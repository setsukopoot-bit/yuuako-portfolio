import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import beanGoAdminDashboard from '../../pages/B2BDashboardCase/assets/screens/workbench-dashboard.png'
import { scrollToSection } from '../../utils/scrollToSection'
import styles from './Hero.module.css'

function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  function scrollToAbout() {
    scrollToSection('about-me')
  }

  useLayoutEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) return

    const ctx = gsap.context(() => {
      const reveals = gsap.utils.toArray<HTMLElement>(`.${styles.reveal}`, hero)
      const backdrop = hero.querySelector<HTMLElement>(`.${styles.studioBackdrop}`)
      const glow = hero.querySelector<HTMLElement>(`.${styles.ambientGlow}`)
      const cards = gsap.utils.toArray<HTMLElement>(`.${styles.glassCard}`, hero)

      gsap.set(reveals, { opacity: 0, y: 24 })
      gsap.set(cards, { opacity: 0, y: 18, scale: 0.97 })
      gsap.set(backdrop, { opacity: 0, scale: 1.025 })

      gsap
        .timeline({ defaults: { ease: 'power3.out' } })
        .to(backdrop, { opacity: 1, scale: 1, duration: 1.25 }, 0)
        .to(reveals, { opacity: 1, y: 0, duration: 0.72, stagger: 0.09 }, 0.12)
        .to(cards, { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.11 }, 0.38)

      if (glow) {
        gsap.to(glow, {
          xPercent: 7,
          yPercent: -4,
          scale: 1.08,
          duration: 8,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        })
      }

      cards.forEach((card, index) => {
        gsap.to(card, {
          y: index % 2 === 0 ? -5 : 5,
          x: index === 1 ? 3 : -2,
          duration: 4.6 + index * 0.55,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          delay: index * 0.35,
        })
      })
    }, hero)

    return () => ctx.revert()
  }, [])

  return (
    <main id="hero" ref={heroRef} className={styles.hero} aria-label="AI 全栈设计师个人作品集首页">
      <div className={styles.studioBackdrop} aria-hidden="true" />
      <div className={styles.backdropShade} aria-hidden="true" />
      <div className={styles.gridTexture} aria-hidden="true" />
      <div className={styles.ambientGlow} aria-hidden="true" />

      <div className={styles.decorations} aria-hidden="true">
        <div className={`${styles.glassCard} ${styles.cardOne}`}>
          <div className={`${styles.projectPanel} ${styles.workflowPanel}`}>
            <div className={styles.panelSurface}>
              <img
                className={styles.panelImage}
                src="/images/workflow-cover.png"
                alt=""
              />
              <span className={styles.panelVeil} />
              <span className={styles.panelReflection} />
              <span className={styles.panelCaption}>
                <small>01</small>
                <strong>自媒体内容生产工作流</strong>
              </span>
            </div>
          </div>
        </div>

        <div className={`${styles.glassCard} ${styles.cardTwo}`}>
          <div className={`${styles.projectPanel} ${styles.adminPanel}`}>
            <div className={styles.panelSurface}>
              <img
                className={`${styles.panelImage} ${styles.adminImage}`}
                src={beanGoAdminDashboard}
                alt=""
              />
              <span className={styles.panelVeil} />
              <span className={styles.panelReflection} />
              <span className={styles.panelCaption}>
                <small>02</small>
                <span className={styles.panelCaptionCopy}>
                  <strong>BeanGo Admin</strong>
                  <em>后台管理系统</em>
                </span>
              </span>
            </div>
          </div>
        </div>
        <span className={styles.techOrbit} />
      </div>

      <div className={styles.heroInner}>
        <section className={styles.heroContent}>
          <p className={`${styles.eyebrow} ${styles.reveal}`}>PORTFOLIO / 2026</p>

          <h1 className={styles.reveal}>
            <span className={styles.titleLatin}>AI</span>
            <span>全栈设计师</span>
          </h1>

          <p className={`${styles.capabilities} ${styles.reveal}`}>
            UI / UX · AIGC · 产品设计
            <br />
            AI 工作流 · 视觉设计
          </p>

          <span className={`${styles.copyDivider} ${styles.reveal}`} aria-hidden="true" />

          <p className={`${styles.intro} ${styles.reveal}`}>
            我用设计与 AI，打造更智能的数字体验。
            <br />
            从产品思维到 AI 驱动创作。
          </p>

          <div className={`${styles.actions} ${styles.reveal}`}>
            <a className={styles.primaryAction} href="#projects">
              <span>VIEW PROJECTS</span>
              <span className={styles.actionArrow} aria-hidden="true">↗</span>
            </a>
            <button
              id="about-me-trigger"
              className={styles.secondaryAction}
              type="button"
              onClick={scrollToAbout}
            >
              ABOUT ME
            </button>
          </div>
        </section>

        <div className={styles.visualColumn} aria-hidden="true">
          <div className={styles.personAura} />
          <div className={styles.personStage}>
            <div className={styles.characterMedia}>
              <img
                className={styles.characterImage}
                src="/images/intro/ip-character.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.signature} ${styles.reveal}`} aria-hidden="true">
        <span />
        DESIGN · AI · CREATE
      </div>
    </main>
  )
}

export default Hero
