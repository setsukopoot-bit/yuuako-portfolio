import { useLayoutEffect, useRef, type ReactElement, type SyntheticEvent } from 'react'
import gsap from 'gsap'
import { scrollToSection } from '../../utils/scrollToSection'
import styles from './Contact.module.css'

const capabilities = ['产品思维', 'AI 创作', '交互设计', '视觉表达']

function hideMissingImage(event: SyntheticEvent<HTMLImageElement>): void {
  event.currentTarget.hidden = true
}

function Contact(): ReactElement {
  const sectionRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const section = sectionRef.current
    if (!section || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!('IntersectionObserver' in window)) return

    const revealElements = gsap.utils.toArray<HTMLElement>(`.${styles.reveal}`, section)
    let observer: IntersectionObserver | undefined

    const context = gsap.context(() => {
      gsap.set(revealElements, { opacity: 0, y: 26 })

      observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry?.isIntersecting) return

          gsap.to(revealElements, {
            opacity: 1,
            y: 0,
            duration: 0.72,
            stagger: 0.09,
            ease: 'power3.out',
          })

          observer?.disconnect()
        },
        { threshold: 0.16, rootMargin: '0px 0px -8% 0px' },
      )

      observer.observe(section)
    }, section)

    return () => {
      observer?.disconnect()
      context.revert()
    }
  }, [])

  return (
    <section id="contact" ref={sectionRef} className={styles.contact} aria-labelledby="contact-title">
      <div className={styles.deepSpace} aria-hidden="true" />
      <div className={styles.particleField} aria-hidden="true">
        {Array.from({ length: 12 }, (_, index) => (
          <span key={index} />
        ))}
      </div>

      <svg className={styles.dataStreams} viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <path d="M-80 670C235 520 359 662 582 480S1012 184 1680 365" />
        <path d="M-42 754C250 700 421 358 718 436s421 318 954 57" />
        <path d="M185 70C458 228 644 118 850 246s330 302 702 260" />
      </svg>

      <div className={styles.contactInner}>
        <header className={`${styles.sectionHeader} ${styles.reveal}`}>
          <p>06 / 联系</p>
          <button className={styles.backToTop} type="button" onClick={() => scrollToSection('hero')}>
            返回顶部
            <span aria-hidden="true">↑</span>
          </button>
        </header>

        <div className={styles.contactStage}>
          <div className={`${styles.aiCore} ${styles.reveal}`} aria-hidden="true">
            <div className={styles.coreHalo} />
            <div className={styles.coreSphere}>
              <span />
              <span />
              <span />
            </div>
            <div className={`${styles.orbit} ${styles.orbitOne}`}><i /></div>
            <div className={`${styles.orbit} ${styles.orbitTwo}`}><i /></div>
            <div className={`${styles.orbit} ${styles.orbitThree}`}><i /></div>
          </div>

          <div className={`${styles.titleBlock} ${styles.reveal}`}>
            <p className={styles.titleKicker}>THINK · EXPLORE · CREATE</p>
            <h2 id="contact-title">
              让设计拥有思考，
              <br />
              让想法真正落地。
            </h2>
            <p className={styles.titleDescription}>
              从用户需求洞察，到产品体验设计，
              <br />
              再到 AI 辅助实现，探索智能时代设计的新可能。
            </p>
          </div>

          <ul className={styles.capabilityCloud} aria-label="核心能力">
            {capabilities.map((capability) => (
              <li className={`${styles.capability} ${styles.reveal}`} key={capability}>
                <span aria-hidden="true" />
                {capability}
              </li>
            ))}
          </ul>

          <div className={`${styles.identity} ${styles.reveal}`}>
            <p className={styles.role}>AI 智能交互设计师</p>
            <p className={styles.disciplines}>AI × 产品 × 体验 × 创造</p>
          </div>

          <aside className={`${styles.contactDetails} ${styles.reveal}`} aria-label="联系方式">
            <header className={styles.contactHeading}>
              <span>联系我</span>
              <small>CONTACT</small>
            </header>

            <div className={styles.contactBody}>
              <dl className={styles.contactList}>
                <div>
                  <dt>微信</dt>
                  <dd>y3246601278</dd>
                </div>
                <div>
                  <dt>邮箱</dt>
                  <dd>
                    <a href="mailto:3246601278@qq.com">3246601278@qq.com</a>
                  </dd>
                </div>
                <div>
                  <dt>电话</dt>
                  <dd>
                    <a href="tel:13470244222">13470244222</a>
                  </dd>
                </div>
              </dl>

              <figure className={styles.qrFigure}>
                <div className={styles.qrFrame}>
                  <span className={styles.qrPlaceholder} aria-hidden="true">二维码原图待补充</span>
                  <img
                    src="/images/contact/wechat-qr.jpg"
                    alt="于海阔的微信二维码"
                    onError={hideMissingImage}
                  />
                </div>
                <figcaption>扫码添加微信</figcaption>
              </figure>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Contact
