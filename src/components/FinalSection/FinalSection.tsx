import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { scrollToSection } from '../../utils/scrollToSection'
import styles from './FinalSection.module.css'

function DecorativeOrbits() {
  return (
    <svg className={styles.orbits} viewBox="0 0 1000 720" aria-hidden="true">
      <g className={styles.orbitLines}>
        <ellipse cx="560" cy="376" rx="446" ry="178" transform="rotate(-12 560 376)" />
        <ellipse cx="566" cy="372" rx="358" ry="292" transform="rotate(21 566 372)" />
        <ellipse cx="564" cy="370" rx="472" ry="92" transform="rotate(16 564 370)" />
        <path d="M126 532C280 706 666 732 976 536" />
        <path d="M246 115C482 18 814 76 1016 258" />
      </g>
      <g className={styles.techArcs}>
        <path d="M167 414A420 242 0 0 1 469 174" />
        <path d="M734 153A430 260 0 0 1 1011 394" />
        <path d="M285 646A438 268 0 0 0 763 684" />
        <path d="M879 558A404 226 0 0 0 1006 431" />
      </g>
      <g className={styles.techTicks}>
        <path d="M149 357l22 5M205 223l18 14M373 112l7 22M884 174l-17 16M1005 320l-22 7M931 601l-18-14M682 714l-4-22M340 675l13-19" />
      </g>
      <g className={styles.orbitNodes}>
        <circle cx="146" cy="384" r="5" />
        <circle cx="342" cy="130" r="4" />
        <circle cx="811" cy="185" r="5" />
        <circle cx="916" cy="463" r="4" />
        <circle cx="355" cy="613" r="4" />
        <circle cx="202" cy="591" r="3" />
        <circle cx="926" cy="239" r="3" />
      </g>
    </svg>
  )
}

function FinalSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const section = sectionRef.current
    if (!section || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!('IntersectionObserver' in window)) return

    const reveals = gsap.utils.toArray<HTMLElement>(`.${styles.reveal}`, section)
    const character = section.querySelector<HTMLElement>(`.${styles.character}`)
    const atmosphere = section.querySelector<HTMLElement>(`.${styles.atmosphere}`)
    let observer: IntersectionObserver | undefined

    const ctx = gsap.context(() => {
      gsap.set(reveals, { opacity: 0, y: 24 })
      gsap.set(character, { opacity: 0, x: 44, y: 18, scale: 0.985 })
      gsap.set(atmosphere, { opacity: 0, scale: 0.97 })

      observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry?.isIntersecting) return

          gsap
            .timeline({ defaults: { ease: 'power3.out' } })
            .to(atmosphere, { opacity: 1, scale: 1, duration: 0.9 })
            .to(reveals, { opacity: 1, y: 0, duration: 0.66, stagger: 0.08 }, 0.1)
            .to(character, { opacity: 1, x: 0, y: 0, scale: 1, duration: 0.95 }, 0.18)

          observer?.disconnect()
        },
        { threshold: 0.14, rootMargin: '0px 0px -8% 0px' },
      )

      observer.observe(section)
    }, section)

    return () => {
      observer?.disconnect()
      ctx.revert()
    }
  }, [])

  return (
    <section id="final" ref={sectionRef} className={styles.finalSection} aria-labelledby="final-title">
      <div className={styles.spaceBackground} aria-hidden="true" />
      <div className={styles.starField} aria-hidden="true" />

      <div className={`${styles.atmosphere} ${styles.atmosphereLayer}`} aria-hidden="true">
        <div className={styles.planetGlow} />
        <div className={styles.planet}>
          <span className={styles.planetTexture} />
          <span className={styles.planetMeridian} />
        </div>
        <div className={styles.moon} />
        <div className={styles.glowOrb} />
        <div className={styles.horizonGlow} />
        <DecorativeOrbits />
      </div>

      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={`${styles.eyebrow} ${styles.reveal}`}>PORTFOLIO / 2026</p>

          <h2 id="final-title" className={`${styles.title} ${styles.reveal}`}>感谢你的观看</h2>

          <p className={`${styles.subtitle} ${styles.reveal}`}>
            期待与你交流，
            <br />
            一起让好的想法发生。
          </p>

          <div className={`${styles.description} ${styles.reveal}`}>
            <p>
              希望这份作品集，
              <br />
              能够展示我对设计、体验与创造的理解。
            </p>
            <p>
              未来也期待通过设计，
              <br />
              探索更多可能。
            </p>
          </div>

          <div className={`${styles.actions} ${styles.reveal}`}>
            <button className={styles.primaryAction} type="button" onClick={() => scrollToSection('contact')}>
              <span>期待合作</span>
              <span className={styles.actionIcon} aria-hidden="true">→</span>
            </button>
            <button className={styles.secondaryAction} type="button" onClick={() => scrollToSection('hero')}>
              <span>返回顶部</span>
              <span className={styles.actionIcon} aria-hidden="true">↑</span>
            </button>
          </div>
        </div>

        <div className={styles.characterStage} aria-hidden="true">
          <div className={styles.characterHalo} />
          <img
            className={styles.character}
            src="/images/final/ip-character.png"
            alt=""
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

    </section>
  )
}

export default FinalSection
