import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import BackgroundMedia from './BackgroundMedia'
import styles from './IntroOverlay.module.css'

type IntroOverlayProps = {
  onComplete: () => void
  onRevealStart: () => void
}

const showcaseCards = [
  {
    title: 'AI 产品体验',
    meta: 'BeanGo / App Design',
    image: '/images/beango-phone.png',
    position: 'leftTop',
    depth: 0.62,
    visibility: 0.72,
    index: '01',
  },
  {
    title: '数据可视化',
    meta: 'Admin / System',
    image: '/images/b2b-dashboard-cover.png',
    position: 'leftBottom',
    depth: 1.08,
    visibility: 0.98,
    index: '02',
  },
  {
    title: '智能工作流',
    meta: 'AIGC / Workflow',
    image: '/images/workflow-cover.png',
    position: 'rightTop',
    depth: 0.7,
    visibility: 0.74,
    index: '03',
  },
  {
    title: 'AI 商业影像',
    meta: 'Video / Creation',
    image: '/images/ai-video-coffee-pour.png',
    position: 'rightBottom',
    depth: 1.16,
    visibility: 0.98,
    index: '04',
  },
] as const

function IntroOverlay({ onComplete, onRevealStart }: IntroOverlayProps) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const progressValueRef = useRef<HTMLElement>(null)
  const progressBarRef = useRef<HTMLSpanElement>(null)

  useLayoutEffect(() => {
    const overlay = overlayRef.current
    if (!overlay) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) {
      document.body.style.overflow = originalOverflow
      onRevealStart()
      onComplete()
      return
    }

    const context = gsap.context(() => {
      const characterReveal = overlay.querySelector<HTMLElement>(`.${styles.characterReveal}`)
      const characterParallax = overlay.querySelector<HTMLElement>(`.${styles.characterParallax}`)
      const characterFloat = overlay.querySelector<HTMLElement>(`.${styles.characterFloat}`)
      const leftTitle = overlay.querySelector<HTMLElement>(`.${styles.leftStatement}`)
      const rightTitle = overlay.querySelector<HTMLElement>(`.${styles.rightStatement}`)
      const cards = gsap.utils.toArray<HTMLElement>(`.${styles.showcaseSlot}`, overlay)
      const cardSurfaces = gsap.utils.toArray<HTMLElement>(`.${styles.showcaseCard}`, overlay)
      const lightPaths = gsap.utils.toArray<SVGPathElement>(`.${styles.lightPath}`, overlay)
      const ringStrokes = gsap.utils.toArray<SVGElement>(
        `.${styles.energyRingHalo}, .${styles.energyRingStroke}, .${styles.energyRingSecondary}, .${styles.energyFrontHalo}, .${styles.energyFrontStroke}, .${styles.ringComet}`,
        overlay,
      )
      const progress = overlay.querySelector<HTMLElement>(`.${styles.progress}`)
      const progressCaption = overlay.querySelector<HTMLElement>(`.${styles.progressCaption}`)
      const flash = overlay.querySelector<HTMLElement>(`.${styles.progressFlash}`)
      const cornerLabel = overlay.querySelector<HTMLElement>(`.${styles.cornerLabel}`)
      const curtain = overlay.querySelector<HTMLElement>(`.${styles.curtain}`)
      const depthElements = gsap.utils.toArray<HTMLElement>(`.${styles.depthElement}`, overlay)
      const orbitalNodes = gsap.utils.toArray<HTMLElement>(`.${styles.orbitNode}`, overlay)
      const counter = { value: 0 }

      gsap.set(characterReveal, { opacity: 0, scale: 0.92, filter: 'blur(12px)' })
      gsap.set(leftTitle, { opacity: 0, x: -54, filter: 'blur(6px)' })
      gsap.set(rightTitle, { opacity: 0, x: 54, filter: 'blur(6px)' })
      gsap.set(cards, { opacity: 0, y: 20, scale: 0.95, filter: 'blur(8px)' })
      gsap.set(lightPaths, { opacity: 0, strokeDasharray: 760, strokeDashoffset: 760 })
      gsap.set(ringStrokes, { opacity: 0, strokeDashoffset: 1 })
      gsap.set(progress, { opacity: 0, y: 12, filter: 'blur(5px)' })
      gsap.set(progressCaption, { opacity: 0, y: 8 })
      gsap.set(progressBarRef.current, { scaleX: 0, transformOrigin: 'left center' })
      gsap.set(flash, { opacity: 0, scale: 0.72 })
      gsap.set(depthElements, { opacity: 0, scale: 0.96, filter: 'blur(10px)' })
      gsap.set(orbitalNodes, { opacity: 0, scale: 0.6 })

      const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } })

      timeline
        .to(curtain, { opacity: 0, duration: 1 }, 0)
        .to(depthElements, { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.25, stagger: 0.08 }, 0.35)
        .to(characterReveal, { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.2 }, 1)
        .to(leftTitle, { opacity: 1, x: 0, filter: 'blur(0px)', duration: 0.82 }, 2)
        .to(rightTitle, { opacity: 1, x: 0, filter: 'blur(0px)', duration: 0.82 }, 2.35)
        .to(
          cards,
          {
            opacity: (_, element) => Number((element as HTMLElement).dataset.visibility ?? 1),
            y: 0,
            scale: 1,
            filter: 'blur(0px)',
            duration: 0.9,
            stagger: 0.12,
          },
          3.85,
        )
        .to(lightPaths, { opacity: 0.66, strokeDashoffset: 0, duration: 1.15, stagger: 0.12 }, 5)
        .to(ringStrokes, { opacity: 1, strokeDashoffset: 0, duration: 1.05, stagger: 0.07 }, 5.12)
        .to(orbitalNodes, { opacity: 1, scale: 1, duration: 0.48, stagger: 0.08 }, 5.35)
        .to(progress, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.3 }, 6)
        .to(
          counter,
          {
            value: 100,
            duration: 0.85,
            ease: 'power2.out',
            onUpdate: () => {
              if (progressValueRef.current) {
                progressValueRef.current.textContent = `${Math.round(counter.value)}%`
              }
            },
          },
          6,
        )
        .to(progressBarRef.current, { scaleX: 1, duration: 0.85, ease: 'power2.out' }, 6)
        .to(progressCaption, { opacity: 1, y: 0, duration: 0.38 }, 6.32)
        .to(flash, { opacity: 0.72, scale: 1, duration: 0.12 }, 6.72)
        .to(flash, { opacity: 0, scale: 1.24, duration: 0.24, ease: 'power2.out' }, 6.84)
        .call(onRevealStart, [], 7.92)
        .to(
          [cornerLabel, leftTitle, rightTitle, ...cards, ...ringStrokes, ...lightPaths, ...orbitalNodes],
          {
            opacity: 0,
            y: -4,
            filter: 'blur(5px)',
            duration: 0.34,
            ease: 'power2.in',
          },
          7.92,
        )
        .to(progress, { opacity: 0, y: 8, filter: 'blur(4px)', duration: 0.3, ease: 'power2.in' }, 7.98)
        .to(
          characterReveal,
          { opacity: 0, scale: 0.985, filter: 'blur(4px)', duration: 0.36, ease: 'power2.in' },
          8,
        )
        .to(depthElements, { opacity: 0.34, duration: 0.34, ease: 'power1.inOut' }, 8.04)
        .to(
          overlay,
          {
            opacity: 0,
            duration: 0.58,
            ease: 'power2.inOut',
            onComplete,
          },
          8.38,
        )

      gsap.to(characterFloat, {
        y: -7,
        scale: 1.008,
        duration: 3.4,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: 2.15,
      })

      cardSurfaces.forEach((card, index) => {
        gsap.to(card, {
          y: index % 2 === 0 ? -7 : 6,
          duration: 4.6 + index * 0.35,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          delay: 4.6 + index * 0.18,
        })
      })

      if (window.matchMedia('(pointer: fine)').matches) {
        const cardMotion = cards.map((card) => ({
          card,
          depth: Number(card.dataset.depth ?? 1),
          moveX: gsap.quickTo(card, 'x', { duration: 0.85, ease: 'power3.out' }),
          moveY: gsap.quickTo(card, 'y', { duration: 0.85, ease: 'power3.out' }),
          rotateX: gsap.quickTo(card, 'rotationX', { duration: 0.95, ease: 'power3.out' }),
          rotateY: gsap.quickTo(card, 'rotationY', { duration: 0.95, ease: 'power3.out' }),
        }))
        const moveCharacterX = gsap.quickTo(characterParallax, 'x', { duration: 1.15, ease: 'power3.out' })
        const moveCharacterY = gsap.quickTo(characterParallax, 'y', { duration: 1.15, ease: 'power3.out' })
        const rotateCharacterY = gsap.quickTo(characterParallax, 'rotationY', { duration: 1.15, ease: 'power3.out' })

        const handlePointerMove = (event: PointerEvent) => {
          const normalizedX = event.clientX / window.innerWidth - 0.5
          const normalizedY = event.clientY / window.innerHeight - 0.5
          cardMotion.forEach(({ depth, moveX, moveY, rotateX, rotateY }) => {
            moveX(normalizedX * 22 * depth)
            moveY(normalizedY * 18 * depth)
            rotateX(normalizedY * -1.4 * depth)
            rotateY(normalizedX * 1.8 * depth)
          })
          moveCharacterX(normalizedX * 7)
          moveCharacterY(normalizedY * 5)
          rotateCharacterY(normalizedX * 1.2)
        }

        const resetParallax = () => {
          cardMotion.forEach(({ moveX, moveY, rotateX, rotateY }) => {
            moveX(0)
            moveY(0)
            rotateX(0)
            rotateY(0)
          })
          moveCharacterX(0)
          moveCharacterY(0)
          rotateCharacterY(0)
        }

        overlay.addEventListener('pointermove', handlePointerMove)
        overlay.addEventListener('pointerleave', resetParallax)

        return () => {
          overlay.removeEventListener('pointermove', handlePointerMove)
          overlay.removeEventListener('pointerleave', resetParallax)
        }
      }
    }, overlay)

    return () => {
      context.revert()
      document.body.style.overflow = originalOverflow
    }
  }, [onComplete, onRevealStart])

  return (
    <div ref={overlayRef} className={styles.overlay} role="status" aria-label="正在进入作品集">
      <BackgroundMedia />
      <div className={styles.backgroundShade} aria-hidden="true" />
      <div className={`${styles.metallicFolds} ${styles.depthElement}`} aria-hidden="true">
        <span className={styles.foldLeft} />
        <span className={styles.foldCenter} />
        <span className={styles.foldRight} />
      </div>
      <div className={`${styles.silkSpecular} ${styles.depthElement}`} aria-hidden="true" />
      <div className={`${styles.volumeLight} ${styles.depthElement}`} aria-hidden="true" />
      <div className={styles.ambientGlow} aria-hidden="true" />
      <div className={styles.depthVignette} aria-hidden="true" />
      <div className={`${styles.hudField} ${styles.depthElement}`} aria-hidden="true">
        <span className={styles.hudAxis} />
        <span className={styles.hudArc} />
      </div>

      <svg className={styles.lightTrails} viewBox="0 0 1600 900" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="intro-trail" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#7664a8" stopOpacity="0" />
            <stop offset="0.48" stopColor="#c5b4f6" stopOpacity="0.82" />
            <stop offset="1" stopColor="#7765ab" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path className={styles.lightPath} d="M-80 615C260 475 505 535 770 635s566 134 910-56" />
        <path className={styles.lightPath} d="M-40 690c308-86 548-58 817 18s562 67 897-83" />
        <path className={styles.lightPath} d="M65 488c341 58 447 165 706 180s510-52 752-214" />
      </svg>

      <div className={`${styles.statement} ${styles.leftStatement}`}>
        <span>把想法</span>
        <strong>变成作品</strong>
      </div>

      <div className={`${styles.statement} ${styles.rightStatement}`}>
        <span>让创意</span>
        <strong>落地真实</strong>
      </div>

      <div className={styles.showcaseLayer} aria-hidden="true">
        {showcaseCards.map((card) => (
          <div
            key={card.title}
            className={`${styles.showcaseSlot} ${styles[card.position]}`}
            data-depth={card.depth}
            data-visibility={card.visibility}
          >
            <div className={styles.showcaseCard}>
              <div className={styles.panelBackplane} />
              <div className={styles.panelThickness} />
              <div className={styles.panelSurface}>
                <span className={styles.panelIndex}>{card.index}</span>
                <span className={styles.panelStatus}>LIVE PROJECT</span>
                <div className={styles.panelContentPlane}>
                  <img src={card.image} alt="" />
                  <div className={styles.showcaseCopy}>
                    <span>{card.meta}</span>
                    <strong>{card.title}</strong>
                  </div>
                </div>
                <span className={styles.panelReflection} />
                <span className={styles.panelDepthRail} />
                <span className={styles.panelScan} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <svg className={styles.energyRing} viewBox="0 0 1000 240" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="intro-ring" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#7b66aa" stopOpacity="0" />
            <stop offset="0.48" stopColor="#d6c5ff" />
            <stop offset="1" stopColor="#765fa8" stopOpacity="0" />
          </linearGradient>
        </defs>
        <ellipse
          className={styles.energyRingHalo}
          pathLength="1"
          cx="500"
          cy="120"
          rx="460"
          ry="82"
        />
        <ellipse
          className={styles.energyRingStroke}
          pathLength="1"
          cx="500"
          cy="120"
          rx="460"
          ry="82"
        />
        <ellipse
          className={styles.energyRingSecondary}
          pathLength="1"
          cx="500"
          cy="120"
          rx="430"
          ry="68"
        />
        <path
          className={`${styles.ringComet} ${styles.ringCometBack}`}
          pathLength="1"
          d="M40 120a460 82 0 0 1 920 0"
        />
      </svg>

      <div className={styles.orbitNodes} aria-hidden="true">
        <span className={`${styles.orbitNode} ${styles.nodeOne}`} />
        <span className={`${styles.orbitNode} ${styles.nodeTwo}`} />
        <span className={`${styles.orbitNode} ${styles.nodeThree}`} />
      </div>

      <svg className={styles.energyRingFront} viewBox="0 0 1000 240" preserveAspectRatio="none" aria-hidden="true">
        <path
          className={styles.energyFrontHalo}
          pathLength="1"
          d="M66 139c126 66 292 78 434 78s308-12 434-78"
        />
        <path
          className={styles.energyFrontStroke}
          pathLength="1"
          d="M66 139c126 66 292 78 434 78s308-12 434-78"
        />
        <path
          className={`${styles.ringComet} ${styles.ringCometFront}`}
          pathLength="1"
          d="M66 139c126 66 292 78 434 78s308-12 434-78"
        />
      </svg>

      <div className={styles.characterReveal} aria-hidden="true">
        <div className={styles.characterParallax}>
          <div className={styles.characterFloat}>
            <img
              className={styles.character}
              src="/images/intro/ip-character-target-pose-final.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className={styles.progress} aria-hidden="true">
        <span ref={progressValueRef} className={styles.progressValue}>0%</span>
        <span className={styles.progressTrack}>
          <span ref={progressBarRef} className={styles.progressBar} />
        </span>
        <span className={styles.progressCaption}>正在进入我的作品集</span>
        <span className={styles.progressFlash} />
      </div>

      <div className={styles.cornerLabel} aria-hidden="true">
        YU HAIKUO
        <span>AI · DESIGN · INTERACTION</span>
      </div>
      <div className={styles.curtain} aria-hidden="true" />
    </div>
  )
}

export default IntroOverlay
