import { useEffect, useRef, type ReactNode } from 'react'
import styles from './CaseIntroMotion.module.css'

type MotionContainerProps = {
  children: ReactNode
  className?: string
}

function joinClassNames(...classNames: Array<string | undefined>) {
  return classNames.filter(Boolean).join(' ')
}

export function TiltCard({ children, className }: MotionContainerProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!finePointer.matches || reducedMotion.matches) return

    let animationFrame = 0
    let pointerX = 0
    let pointerY = 0

    const updateTilt = () => {
      const bounds = card.getBoundingClientRect()
      const normalizedX = (pointerX - bounds.left) / bounds.width - 0.5
      const normalizedY = (pointerY - bounds.top) / bounds.height - 0.5

      card.style.setProperty('--case-tilt-x', `${(-normalizedY * 6).toFixed(2)}deg`)
      card.style.setProperty('--case-tilt-y', `${(normalizedX * 10).toFixed(2)}deg`)
      animationFrame = 0
    }

    const handlePointerMove = (event: PointerEvent) => {
      pointerX = event.clientX
      pointerY = event.clientY

      if (!animationFrame) animationFrame = window.requestAnimationFrame(updateTilt)
    }

    const resetTilt = () => {
      if (animationFrame) window.cancelAnimationFrame(animationFrame)
      animationFrame = 0
      card.style.setProperty('--case-tilt-x', '0deg')
      card.style.setProperty('--case-tilt-y', '0deg')
    }

    card.addEventListener('pointermove', handlePointerMove)
    card.addEventListener('pointerleave', resetTilt)
    card.addEventListener('pointercancel', resetTilt)

    return () => {
      resetTilt()
      card.removeEventListener('pointermove', handlePointerMove)
      card.removeEventListener('pointerleave', resetTilt)
      card.removeEventListener('pointercancel', resetTilt)
    }
  }, [])

  return (
    <div ref={cardRef} className={joinClassNames(styles.tiltCard, className)}>
      <div className={styles.effectSurface}>
        {children}
        <span className={styles.lightSweep} aria-hidden="true" />
      </div>
    </div>
  )
}

export function CaseIntroReveal({ children, className }: MotionContainerProps) {
  return (
    <div className={className} data-case-intro-reveal="true">
      {children}
    </div>
  )
}
