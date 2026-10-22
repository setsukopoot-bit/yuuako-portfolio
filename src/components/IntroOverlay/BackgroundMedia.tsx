import { useEffect, useRef, useState } from 'react'
import SatinRidges from './SatinRidges'
import styles from './IntroOverlay.module.css'

const DESKTOP_WEBM_SRC = '/media/intro/satin/satin-desktop.webm'
const DESKTOP_MP4_SRC = '/media/intro/satin/satin-desktop-optimized.mp4'
const BACKGROUND_DECISION_DEADLINE_MS = 650
const MINIMUM_BUFFER_AHEAD_SECONDS = 1.25

type BackgroundState = 'webgl' | 'video-loading' | 'video-active' | 'video-failed'

type FrameCallbackVideo = HTMLVideoElement & {
  requestVideoFrameCallback?: (
    callback: (now: number, metadata: VideoFrameCallbackMetadata) => void,
  ) => number
  cancelVideoFrameCallback?: (handle: number) => void
}

function getInitialState(): BackgroundState {
  if (typeof window === 'undefined') return 'webgl'

  const desktop = window.matchMedia('(min-width: 681px)').matches
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  return desktop && !reducedMotion ? 'video-loading' : 'webgl'
}

function getBufferedSeconds(video: HTMLVideoElement) {
  if (video.buffered.length === 0) return 0

  for (let index = 0; index < video.buffered.length; index += 1) {
    if (video.buffered.start(index) <= video.currentTime && video.buffered.end(index) >= video.currentTime) {
      return video.buffered.end(index) - video.currentTime
    }
  }

  return 0
}

/** Locks one background source before the Intro foreground becomes visible. */
export default function BackgroundMedia() {
  const videoRef = useRef<FrameCallbackVideo>(null)
  const [backgroundState, setBackgroundState] = useState<BackgroundState>(getInitialState)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const desktop = window.matchMedia('(min-width: 681px)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!desktop || reducedMotion) return

    let disposed = false
    let decisionLocked = false
    let firstFrameSubmitted = false
    let playbackStarted = false
    let releasing = false
    let frameCallbackId: number | undefined
    let firstAnimationFrame: number | undefined
    let secondAnimationFrame: number | undefined
    const decisionStartedAt = window.performance.now()

    const releaseVideo = () => {
      releasing = true
      video.pause()
      video.removeAttribute('src')
      video.load()
      window.queueMicrotask(() => {
        releasing = false
      })
    }

    const hasPlaybackHeadroom = () =>
      video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA &&
      (video.readyState === HTMLMediaElement.HAVE_ENOUGH_DATA ||
        getBufferedSeconds(video) >= MINIMUM_BUFFER_AHEAD_SECONDS)

    const activateIfReady = () => {
      if (disposed || decisionLocked || !firstFrameSubmitted || !hasPlaybackHeadroom()) return

      if (window.performance.now() - decisionStartedAt > BACKGROUND_DECISION_DEADLINE_MS) {
        decisionLocked = true
        setBackgroundState('webgl')
        releaseVideo()
        return
      }

      decisionLocked = true
      window.clearTimeout(decisionDeadline)
      setBackgroundState('video-active')
    }

    const confirmFirstFrame = () => {
      if (disposed || decisionLocked) return

      if (video.requestVideoFrameCallback) {
        frameCallbackId = video.requestVideoFrameCallback(() => {
          firstFrameSubmitted = true
          activateIfReady()
        })
        return
      }

      firstAnimationFrame = window.requestAnimationFrame(() => {
        secondAnimationFrame = window.requestAnimationFrame(() => {
          firstFrameSubmitted = true
          activateIfReady()
        })
      })
    }

    const attemptPlayback = async () => {
      if (disposed || decisionLocked || playbackStarted) return
      playbackStarted = true

      try {
        video.currentTime = 0
        await video.play()

        if (disposed || decisionLocked) {
          releaseVideo()
          return
        }

        confirmFirstFrame()
        activateIfReady()
      } catch {
        if (disposed || decisionLocked) return
        decisionLocked = true
        setBackgroundState('video-failed')
        releaseVideo()
      }
    }

    const failVideo = () => {
      if (disposed || releasing || decisionLocked) return
      decisionLocked = true
      window.clearTimeout(decisionDeadline)
      setBackgroundState('video-failed')
      releaseVideo()
    }

    const decisionDeadline = window.setTimeout(() => {
      if (disposed || decisionLocked) return
      decisionLocked = true
      setBackgroundState('webgl')
      releaseVideo()
    }, BACKGROUND_DECISION_DEADLINE_MS)

    // H.264 is preferred here because the full Intro composition showed
    // sustained VP9 decode contention even though the WebM played smoothly
    // in isolation. The smaller WebM remains the compatibility fallback.
    const selectedSource = video.canPlayType('video/mp4; codecs="avc1.640028"')
      ? DESKTOP_MP4_SRC
      : DESKTOP_WEBM_SRC

    video.muted = true
    video.playsInline = true
    video.preload = 'auto'
    video.addEventListener('loadeddata', attemptPlayback, { once: true })
    video.addEventListener('canplay', activateIfReady)
    video.addEventListener('progress', activateIfReady)
    video.addEventListener('playing', activateIfReady)
    video.addEventListener('error', failVideo)
    video.src = selectedSource
    video.load()

    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      void attemptPlayback()
    }

    return () => {
      disposed = true
      window.clearTimeout(decisionDeadline)
      video.removeEventListener('loadeddata', attemptPlayback)
      video.removeEventListener('canplay', activateIfReady)
      video.removeEventListener('progress', activateIfReady)
      video.removeEventListener('playing', activateIfReady)
      video.removeEventListener('error', failVideo)

      if (frameCallbackId !== undefined && video.cancelVideoFrameCallback) {
        video.cancelVideoFrameCallback(frameCallbackId)
      }
      if (firstAnimationFrame !== undefined) window.cancelAnimationFrame(firstAnimationFrame)
      if (secondAnimationFrame !== undefined) window.cancelAnimationFrame(secondAnimationFrame)

      releaseVideo()
    }
  }, [])

  const videoActive = backgroundState === 'video-active'
  const backgroundResolved = backgroundState !== 'video-loading'

  return (
    <div
      className={`${styles.backgroundMedia} ${
        videoActive ? styles.backgroundMediaVideoActive : ''
      }`}
      data-background-state={backgroundState}
      aria-hidden="true"
    >
      {!videoActive && (
        <div className={styles.backgroundFallback}>
          <SatinRidges />
        </div>
      )}
      <video ref={videoRef} className={styles.backgroundVideo} muted playsInline preload="auto" />
      <span
        className={`${styles.backgroundGate} ${
          backgroundResolved ? styles.backgroundGateOpen : ''
        }`}
      />
    </div>
  )
}
