import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { scrollToSection } from '../../utils/scrollToSection'
import styles from './AboutMe.module.css'

const tools = [
  { name: 'ChatGPT', src: '/images/about/tools/chatgpt.png', className: styles.toolChatgpt },
  { name: 'Codex', src: '/images/about/tools/codex.png', className: styles.toolCodex },
  { name: 'Gemini', src: '/images/about/tools/gemini.png', className: styles.toolGemini },
  { name: 'Figma', src: '/images/about/tools/figma.png', className: styles.toolFigma },
  { name: 'Photoshop', src: '/images/about/tools/photoshop.png', className: styles.toolPhotoshop },
  { name: '剪映', src: '/images/about/tools/capcut.png', className: styles.toolCapcut },
  { name: '即梦', src: '/images/about/tools/jimeng.png', className: styles.toolJimeng },
]

function DoodleStar({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <path d="M32 5 38 25 58 32 38 39 32 59 25 39 5 32 25 25Z" />
    </svg>
  )
}

function RadarChart() {
  return (
    <svg className={styles.radarChart} viewBox="0 0 240 210" role="img" aria-label="审美、旅行、美食、阅读与拍照兴趣雷达图">
      <g className={styles.radarGrid}>
        <polygon points="120,28 198,85 168,177 72,177 42,85" />
        <polygon points="120,51 176,92 155,158 85,158 64,92" />
        <polygon points="120,74 154,99 141,139 99,139 86,99" />
        <line x1="120" y1="103" x2="120" y2="28" />
        <line x1="120" y1="103" x2="198" y2="85" />
        <line x1="120" y1="103" x2="168" y2="177" />
        <line x1="120" y1="103" x2="72" y2="177" />
        <line x1="120" y1="103" x2="42" y2="85" />
      </g>
      <polygon className={styles.radarFill} points="120,48 175,91 155,157 90,149 69,91" />
      <g className={styles.radarLabels}>
        <text x="120" y="18" textAnchor="middle">审美</text>
        <text x="205" y="84">旅行</text>
        <text x="173" y="194">美食</text>
        <text x="42" y="194">阅读</text>
        <text x="4" y="84">拍照</text>
      </g>
    </svg>
  )
}

function AboutMe() {
  const aboutRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const about = aboutRef.current
    if (!about || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!('IntersectionObserver' in window)) return

    const layout = about.querySelector<HTMLElement>(`.${styles.layout}`)
    const backButton = about.querySelector<HTMLElement>(`.${styles.backButton}`)
    let observer: IntersectionObserver | undefined

    const ctx = gsap.context(() => {
      gsap.set(layout, { opacity: 0, y: 28 })
      gsap.set(backButton, { opacity: 0, y: -10 })

      observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry?.isIntersecting) return

          gsap
            .timeline({ defaults: { ease: 'power3.out' } })
            .to(layout, { opacity: 1, y: 0, duration: 0.78 })
            .to(backButton, { opacity: 1, y: 0, duration: 0.42 }, 0.18)

          observer?.disconnect()
        },
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
      )

      observer.observe(about)
    }, about)

    return () => {
      observer?.disconnect()
      ctx.revert()
    }
  }, [])

  function scrollToHero() {
    scrollToSection('hero')
  }

  return (
    <section id="about-me" ref={aboutRef} className={styles.about} aria-labelledby="about-title">
      <div className={styles.paperNoise} aria-hidden="true" />

      <button id="about-back-button" className={styles.backButton} type="button" onClick={scrollToHero}>
        <span aria-hidden="true">←</span> BACK
      </button>

      <div className={styles.layout}>
        <div className={styles.leftColumn}>
          <section className={styles.copyBlock} aria-labelledby="personal-title">
            <p className={styles.tapeLabel}>Personal Information</p>
            <h2 id="personal-title" className={styles.blueTitle}>智能交互设计</h2>
            <div className={styles.copyLines}>
              <p>视觉表达 / 交互体验 / 内容策划</p>
              <p>关注用户体验与信息传达</p>
              <p>擅长把审美与逻辑结合</p>
            </div>
            <span className={`${styles.scribbleUnderline} ${styles.shortUnderline}`} aria-hidden="true" />
            <svg className={styles.bulbDoodle} viewBox="0 0 80 96" aria-hidden="true">
              <path d="M26 54C15 46 12 34 17 23 23 9 42 5 55 14c13 9 15 27 4 39-5 5-9 8-10 16H32c-1-7-2-10-6-15Z" />
              <path d="M33 78h16M35 86h12M40 24v20m-8-14 8 14 9-14M5 31H0m74 0h6M13 9 6 2m60 7 7-7" />
            </svg>
          </section>

          <div className={styles.dashedDivider} aria-hidden="true" />

          <section className={styles.copyBlock} aria-labelledby="objective-title">
            <p className={styles.tapeLabel}>Objective</p>
            <h2 id="objective-title" className={styles.blueTitle}>我的目标？</h2>
            <div className={styles.copyLines}>
              <p>持续提升设计思维与项目实战能力</p>
              <p>打造兼顾美感、逻辑与体验的作品</p>
              <p>探索 AI + 设计的更多可能</p>
            </div>
            <span className={`${styles.scribbleUnderline} ${styles.longUnderline}`} aria-hidden="true" />
            <span className={styles.targetDoodle} aria-hidden="true">◎↗</span>
          </section>

          <div className={styles.learningNote} aria-hidden="true">
            <svg viewBox="0 0 156 86">
              <path d="M5 76 30 38l18 19 28-43 36 60M22 76h118M115 13l9-9m4 20h12m-19 4-6 10" />
              <path d="m31 63 9-10 8 8 27-40 24 36 10-12 24 31" />
            </svg>
            <p>Keep Learning<br />Keep Exploring<br />...</p>
          </div>
        </div>

        <div className={styles.centerColumn}>
          <header className={styles.titleWrap}>
            <span className={styles.quoteMark}>“</span>
            <h1 id="about-title">About Me</h1>
            <span className={styles.quoteMark}>”</span>
            <span className={styles.titleUnderline} aria-hidden="true" />
          </header>

          <p className={styles.profileName}>于海阔</p>

          <div className={styles.portraitStage}>
            <div className={styles.personWrapper}>
              <img
                className={styles.portraitOutline}
                src="/images/about/person-outline.svg"
                alt=""
                aria-hidden="true"
              />
              <img
                className={styles.person}
                src="/images/about/person.png"
                alt="Yuxin 的人物肖像"
                decoding="async"
              />
            </div>

            <span className={`${styles.handLabel} ${styles.designLabel}`}>Design</span>
            <span className={`${styles.handLabel} ${styles.creativeLabel}`}>Creative</span>
            <span className={`${styles.handLabel} ${styles.uxLabel}`}>UX</span>
            <span className={`${styles.handLabel} ${styles.portfolioLabel}`}>Portfolio</span>
            <span className={styles.goodDesign}>Good<br />Design<br />Better Life<br />: )</span>

            <svg className={`${styles.arrowDoodle} ${styles.arrowLeftTop}`} viewBox="0 0 78 72" aria-hidden="true">
              <path d="M64 8C35 10 17 31 20 58M20 58l-10-15m10 15 15-9" />
            </svg>
            <svg className={`${styles.arrowDoodle} ${styles.arrowLeftBottom}`} viewBox="0 0 78 72" aria-hidden="true">
              <path d="M12 8c32 8 48 24 48 51M60 59 48 47m12 12 10-16" />
            </svg>
            <svg className={`${styles.arrowDoodle} ${styles.arrowRightTop}`} viewBox="0 0 78 72" aria-hidden="true">
              <path d="M14 8c30 8 46 25 43 53M57 61 46 47m11 14 11-15" />
            </svg>
            <svg className={`${styles.arrowDoodle} ${styles.arrowRightBottom}`} viewBox="0 0 78 72" aria-hidden="true">
              <path d="M12 8c32 7 47 24 46 51M58 59 46 46m12 13 10-17" />
            </svg>

            <DoodleStar className={`${styles.star} ${styles.starOne}`} />
            <DoodleStar className={`${styles.star} ${styles.starTwo}`} />
            <DoodleStar className={`${styles.star} ${styles.starThree}`} />
            <span className={`${styles.blueBurst} ${styles.burstOne}`} aria-hidden="true" />
            <span className={`${styles.blueBurst} ${styles.burstTwo}`} aria-hidden="true" />
            <span className={styles.blueHeart} aria-hidden="true">♡</span>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <section id="skills" className={`${styles.copyBlock} ${styles.skillsBlock}`} aria-labelledby="skills-title">
            <p className={styles.tapeLabel}>Skills</p>
            <h2 id="skills-title" className={styles.blueTitle}>我能做什么？</h2>
            <div className={styles.copyLines}>
              <p>APP / 小程序设计</p>
              <p>B端后台 / Web设计</p>
              <p>工作流 / 业务流程设计</p>
              <p>UI / UX &amp; 交互原型</p>
              <p>信息架构 / 视觉设计</p>
              <p>AI 辅助设计与前端落地</p>
            </div>

            <div className={styles.toolCluster} aria-label="常用设计与 AI 工具">
              {tools.map((tool) => (
                <div className={`${styles.toolIcon} ${tool.className}`} key={tool.name}>
                  <img src={tool.src} alt={tool.name} width="64" height="64" decoding="async" />
                </div>
              ))}
            </div>
            <DoodleStar className={`${styles.star} ${styles.skillsStar}`} />
          </section>

          <div className={styles.dashedDivider} aria-hidden="true" />

          <section className={`${styles.copyBlock} ${styles.interestsBlock}`} aria-labelledby="interests-title">
            <p className={styles.tapeLabel}>Tools &amp; Interests</p>
            <h2 id="interests-title" className={styles.blueTitle}>我的风格 / 兴趣</h2>
            <div className={styles.interestsContent}>
              <div className={styles.copyLines}>
                <p>摄影记录</p>
                <p>探店灵感</p>
                <p>阅读与观察</p>
                <p>旅行与审美收集</p>
              </div>
              <RadarChart />
            </div>
            <svg className={styles.cameraDoodle} viewBox="0 0 72 58" aria-hidden="true">
              <path d="M8 18h13l5-8h20l5 8h13v33H8ZM36 27a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm21-4h3" />
            </svg>
            <span className={styles.bottomScribble} aria-hidden="true" />
          </section>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
