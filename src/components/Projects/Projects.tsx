import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { CaseIntroReveal, TiltCard } from '../case-intro/CaseIntroMotion'
import styles from './Projects.module.css'

type Project = {
  id: string
  href?: string
  index: string
  category: string
  title: string
  titleSecondary?: string
  subtitle: string
  description: string
  tags: string[]
  titlePills?: string[]
  star?: Array<{
    key: 'S' | 'T' | 'A' | 'R'
    text: string
  }>
  coverClass: string
  coverLabel: string
}

const projects: Project[] = [
  {
    id: 'beango',
    href: '/projects/beango',
    index: '01',
    category: 'AI PRODUCT DESIGN',
    title: 'BeanGo APP',
    subtitle: 'AI Coffee Assistant',
    description:
      '面向年轻用户的 AI 咖啡助手 APP，通过智能识别、风味推荐与内容互动，帮助用户快速发现适合自己的咖啡，构建轻松有趣的咖啡探索体验。',
    tags: ['AI PRODUCT', 'UI / UX', 'AIGC', 'PRODUCT DESIGN'],
    titlePills: ['AI产品设计', 'UI/UX设计', '用户体验'],
    star: [
      { key: 'S', text: 'AI 识别降低咖啡选择门槛，提升用户决策效率' },
      { key: 'T', text: '打通识别、推荐、探索与记录的完整体验流程' },
      { key: 'A', text: '温暖 IP 结合情感化交互，增强品牌记忆与用户连接' },
      { key: 'R', text: '构建年轻化咖啡生活方式，提升产品体验价值' },
    ],
    coverClass: styles.beanGoCover,
    coverLabel: '手持手机展示 BeanGo 首页界面的项目封面',
  },
  {
    id: 'content-workflow',
    href: '/workflow/index.html',
    index: '02',
    category: 'AI WORKFLOW SYSTEM',
    title: '自媒体内容生产',
    titleSecondary: '· 工作流系统',
    subtitle: 'AIGC Workflow Design',
    description:
      '面向自媒体内容创作场景的智能生产工作流，通过 AI 辅助、流程整合与自动化工具协同，提升内容生产效率，构建高效便捷的创作体验。',
    tags: ['AI WORKFLOW', 'PRODUCT', 'FULL-STACK', 'AUTOMATION'],
    titlePills: ['AIGC设计', '工作流设计', '用户体验'],
    star: [
      { key: 'S', text: '优化内容生产流程，降低创作时间成本' },
      { key: 'T', text: '构建选题、生成、编辑与发布的完整工作流' },
      { key: 'A', text: '通过 AI 工具协同提升创作效率与体验' },
      { key: 'R', text: '打造智能化内容生产解决方案' },
    ],
    coverClass: styles.workflowCover,
    coverLabel: '深灰与蓝紫节点结构构成的 AI 内容工作流抽象封面',
  },
  {
    id: 'relationship-calculator',
    href: '/projects/relationship-calculator/index.html',
    index: '03',
    category: 'INTERACTION PRODUCT',
    title: '叫啥呢关系通',
    titleSecondary: '· 微信小程序',
    subtitle: 'Relationship Calculator',
    description:
      '面向复杂亲属关系理解场景的智能交互小程序，通过关系计算、路径可视化与情境化引导，帮助用户快速找到称谓答案，重新连接人与家庭关系。',
    tags: ['MINI PROGRAM', 'UX', 'INTERACTION', 'PRODUCT'],
    titlePills: ['交互设计', '信息可视化', '小程序设计'],
    star: [
      { key: 'S', text: '解决传统亲属称谓记忆困难，降低查询成本' },
      { key: 'T', text: '构建关系输入、路径推理与结果反馈闭环' },
      { key: 'A', text: '通过可视化关系路径提升信息理解效率' },
      { key: 'R', text: '打造轻量化家庭关系探索与认知工具' },
    ],
    coverClass: styles.relationshipCover,
    coverLabel: '亲戚关系计算器界面与关系路径展示封面',
  },
  {
    id: 'b2b-dashboard',
    href: '/projects/b2b-dashboard/index.html',
    index: '04',
    category: 'B2B PRODUCT DESIGN',
    title: 'BeanGo Admin',
    titleSecondary: '· B端后台管理系统',
    subtitle: 'Admin System Design',
    description:
      '面向企业业务管理场景的智能后台系统，通过数据管理、流程优化与可视化交互，提升运营效率，构建高效稳定的管理体验。',
    tags: ['B2B', 'DASHBOARD', 'UX', 'DESIGN SYSTEM'],
    titlePills: ['B端产品设计', 'UI/UX设计', '数据可视化'],
    star: [
      { key: 'S', text: '优化复杂业务流程，降低后台操作成本' },
      { key: 'T', text: '构建数据管理、业务处理与权限协同闭环' },
      { key: 'A', text: '通过信息架构与可视化设计提升操作效率' },
      { key: 'R', text: '打造高效智能的企业级后台管理体验' },
    ],
    coverClass: styles.dashboardCover,
    coverLabel: '由数据面板、表格和模块构成的 B 端后台管理系统抽象封面',
  },
  {
    id: 'ai-video',
    href: '/cases/ai-video/ai-video-case-study.html',
    index: '05',
    category: 'AI VIDEO / GENERATIVE AI',
    title: 'AI视频创作',
    subtitle: 'AI Video Creation',
    description:
      '面向智能视频创作场景的 AI 生成系统，通过内容生成、视觉优化与智能辅助流程，降低视频制作门槛，提升创作效率与表达体验。',
    tags: ['GENERATIVE AI', 'VIDEO', 'WORKFLOW', 'VISUAL'],
    titlePills: ['AIGC设计', 'AI创作', '视频体验'],
    star: [
      { key: 'S', text: '降低视频制作成本，提高内容创作效率' },
      { key: 'T', text: '构建脚本生成、素材处理与视频输出流程' },
      { key: 'A', text: '结合 AI 工具提升创作自由度与交互体验' },
      { key: 'R', text: '打造智能化视频创作解决方案' },
    ],
    coverClass: styles.aiVideoCover,
    coverLabel: '量杯将咖啡液倒入透明冰咖啡瓶的真实 AI 商业广告画面',
  },
]

const projectTotal = String(projects.length).padStart(2, '0')

type CapabilityIconType = 'product' | 'experience' | 'brand' | 'frontend' | 'ai'

const designCapabilities: Array<{
  title: string
  description: string
  icon: CapabilityIconType
  position: string
}> = [
  { title: '产品思维', description: '从目标与需求出发', icon: 'product', position: 'top' },
  { title: '用户体验', description: '从流程到感受的优化', icon: 'experience', position: 'left' },
  { title: '品牌表达', description: '统一视觉与内容气质', icon: 'brand', position: 'right' },
  { title: '前端实现', description: '让设计真正落地', icon: 'frontend', position: 'bottom-right' },
  { title: 'AI 工作流', description: '提升效率与创作延展性', icon: 'ai', position: 'bottom-left' },
]

function CapabilityIcon({ type }: { type: CapabilityIconType }) {
  const commonProps = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }

  if (type === 'product') {
    return (
      <svg {...commonProps}>
        <path d="M4 19V11M10 19V5M16 19v-8M22 19V2" />
      </svg>
    )
  }

  if (type === 'experience') {
    return (
      <svg {...commonProps}>
        <circle cx="12" cy="8" r="3.2" />
        <path d="M5.5 20c.8-4.1 3-6.2 6.5-6.2s5.7 2.1 6.5 6.2" />
      </svg>
    )
  }

  if (type === 'brand') {
    return (
      <svg {...commonProps}>
        <rect x="3" y="3" width="7" height="7" rx="1.2" />
        <rect x="14" y="3" width="7" height="7" rx="1.2" />
        <rect x="3" y="14" width="7" height="7" rx="1.2" />
        <path d="M14 17.5h7M17.5 14v7" />
      </svg>
    )
  }

  if (type === 'frontend') {
    return (
      <svg {...commonProps}>
        <path d="m8.5 5-5 7 5 7M15.5 5l5 7-5 7M14 3l-4 18" />
      </svg>
    )
  }

  return (
    <svg {...commonProps}>
      <path d="M12 3 4.5 7.2v9.6L12 21l7.5-4.2V7.2L12 3Z" />
      <path d="m8.3 12 2.3 2.3 5.1-5.1M4.8 7.4 12 12l7.2-4.6" />
    </svg>
  )
}

function ProjectCover({ project }: { project: Project }) {
  return (
    <figure
      className={`${styles.projectCover} ${project.coverClass}`}
      role="img"
      aria-label={project.coverLabel}
    >
      <span className={styles.coverNumber} aria-hidden="true">
        {project.index}
      </span>

      {project.id === 'beango' && (
        <img
          className={styles.beanGoImage}
          src="/images/beango-phone.png"
          alt=""
          aria-hidden="true"
          decoding="async"
        />
      )}

      {project.id === 'content-workflow' && (
        <img
          className={styles.workflowImage}
          src="/images/workflow-cover.png"
          alt=""
          aria-hidden="true"
          decoding="async"
        />
      )}

      {project.id === 'relationship-calculator' && (
        <img
          className={styles.relationshipImage}
          src="/images/relationship-calculator-cover-phone-balanced.png"
          alt=""
          aria-hidden="true"
          decoding="async"
        />
      )}

      {project.id === 'b2b-dashboard' && (
        <img
          className={styles.dashboardImage}
          src="/images/b2b-dashboard-cover.png"
          alt=""
          aria-hidden="true"
          decoding="async"
        />
      )}

      {project.id === 'ai-video' && (
        <>
          <img
            className={styles.aiVideoImage}
            src="/images/ai-video-coffee-pour.png"
            alt=""
            aria-hidden="true"
            decoding="async"
          />
          <span className={styles.aiVideoPlayOverlay} aria-hidden="true" />
        </>
      )}
    </figure>
  )
}

function Projects() {
  const sectionRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const section = sectionRef.current
    if (!section || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const articles = gsap.utils.toArray<HTMLElement>(`.${styles.project}`, section)
    const sectionHeader = section.querySelector<HTMLElement>(`.${styles.sectionHeader}`)
    const sectionIntroItems = section.querySelectorAll<HTMLElement>('[data-projects-intro-item]')
    let observer: IntersectionObserver | undefined

    const ctx = gsap.context(() => {
      if (!('IntersectionObserver' in window)) return

      gsap.set(sectionIntroItems, { opacity: 0, y: 30 })
      gsap.set(articles, { opacity: 0, y: 30 })
      articles.forEach((article) => {
        const cover = article.querySelector<HTMLElement>(`.${styles.projectCover}`)
        if (cover) gsap.set(cover, { scale: 0.985 })

        const introItems = article.querySelectorAll<HTMLElement>('[data-case-intro-item]')
        gsap.set(introItems, { opacity: 0, y: 20 })
      })

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return

            if (entry.target === sectionHeader) {
              gsap.to(sectionIntroItems, {
                opacity: 1,
                y: 0,
                duration: 0.72,
                stagger: 0.1,
                ease: 'power3.out',
              })
              observer?.unobserve(entry.target)
              return
            }

            const article = entry.target as HTMLElement
            const cover = article.querySelector<HTMLElement>(`.${styles.projectCover}`)
            const timeline = gsap
              .timeline({ defaults: { ease: 'power3.out' } })
              .to(article, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' })
              .to(cover, { scale: 1, duration: 1, ease: 'power3.out' }, 0)

            const introItems = article.querySelectorAll<HTMLElement>('[data-case-intro-item]')
            timeline.to(
              introItems,
              { opacity: 1, y: 0, duration: 0.58, stagger: 0.08 },
              0.14,
            )

            observer?.unobserve(article)
          })
        },
        { threshold: 0.16, rootMargin: '0px 0px -8% 0px' },
      )

      if (sectionHeader) observer.observe(sectionHeader)
      articles.forEach((article) => observer?.observe(article))
    }, section)

    return () => {
      observer?.disconnect()
      ctx.revert()
    }
  }, [])

  return (
    <section ref={sectionRef} id="projects" className={styles.projects} aria-labelledby="projects-title">
      <div className={styles.transitionGradient} aria-hidden="true" />

      <div className={styles.projectsInner}>
        <header className={styles.sectionHeader}>
          <div className={styles.sectionStatement}>
            <p className={styles.sectionEyebrow} data-projects-intro-item="true">
              <span aria-hidden="true" />
              为什么是我
            </p>

            <h2 id="projects-title" data-projects-intro-item="true">
              <span>我不只是在完成界面，</span>
              <span>而是在把 <em>产品</em>、<em>体验</em>、</span>
              <span><em>品牌</em>、<em>前端</em>与 <em>AI</em>，</span>
              <span>整合成可落地的设计系统。</span>
            </h2>

            <div className={styles.sectionCopy}>
              <p data-projects-intro-item="true">
                从需求理解、体验梳理，到视觉表达与前端落地，
                <br />
                我更关注设计在真实场景中的作用，而不只是呈现结果。
              </p>
              <p data-projects-intro-item="true">
                我希望把创意、逻辑与技术连接起来，
                <br />
                让设计不仅好看，也真正服务于产品目标与用户体验。
              </p>
            </div>
          </div>

          <div className={styles.sectionVisual} data-projects-intro-item="true">
            <span className={styles.systemGlow} aria-hidden="true" />
            <span className={styles.systemGrid} aria-hidden="true" />

            <div className={styles.systemCanvas}>
              <svg
                className={styles.systemConnections}
                viewBox="0 0 800 620"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <ellipse cx="400" cy="310" rx="312" ry="225" />
                <ellipse cx="400" cy="310" rx="235" ry="168" className={styles.innerOrbit} />
                <path d="M400 310 400 92M400 310 132 260M400 310 670 260M400 310 628 510M400 310 176 512" />
                <g className={styles.connectionNodes}>
                  <circle cx="400" cy="92" r="5" />
                  <circle cx="132" cy="260" r="5" />
                  <circle cx="670" cy="260" r="5" />
                  <circle cx="628" cy="510" r="5" />
                  <circle cx="176" cy="512" r="5" />
                </g>
              </svg>

              <div className={styles.systemCore}>
                <span className={styles.coreRing} aria-hidden="true" />
                <span className={styles.coreKicker}>CORE SYSTEM</span>
                <strong>设计整合系统</strong>
                <span className={styles.coreDescription}>体验驱动 · 视觉统一 · 技术协同</span>
              </div>

              <ul className={styles.abilityOrbit} aria-label="设计整合能力">
                {designCapabilities.map((capability) => (
                  <li
                    className={styles.abilityCard}
                    data-position={capability.position}
                    key={capability.title}
                  >
                    <div className={styles.abilityCardInner}>
                      <div className={styles.abilityCardContent}>
                        <span className={styles.abilityIcon}>
                          <CapabilityIcon type={capability.icon} />
                        </span>
                        <span>
                          <strong>{capability.title}</strong>
                          <small>{capability.description}</small>
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ul
            className={styles.sectionCapabilities}
            aria-label="设计能力"
            data-projects-intro-item="true"
          >
            <li>产品思维</li>
            <li>体验设计</li>
            <li>视觉表达</li>
            <li>前端落地</li>
            <li>AI 工作流</li>
          </ul>
        </header>

        <div className={styles.projectList}>
          {projects.map((project, index) => (
            <article
              id={project.id === 'ai-video' ? 'aigc' : `project-${project.id}`}
              className={`${styles.project} ${index % 2 === 1 ? styles.projectReverse : ''}`}
              key={project.id}
            >
              <div className={styles.coverColumn}>
                <TiltCard>
                  <ProjectCover project={project} />
                </TiltCard>
              </div>

              <CaseIntroReveal className={styles.projectInfo}>
                <div className={styles.projectMeta} data-case-intro-item="true">
                  <span>{project.index} / {projectTotal}</span>
                  <span>{project.category}</span>
                </div>

                {project.titlePills && (
                  <ul
                    className={styles.projectTitlePills}
                    aria-label={`${project.title} 设计领域`}
                    data-case-intro-item="true"
                  >
                    {project.titlePills.map((pill) => (
                      <li key={pill}>{pill}</li>
                    ))}
                  </ul>
                )}

                <h3 data-case-intro-item="true">
                  {project.titleSecondary ? (
                    <>
                      <span className={styles.projectTitlePrimary}>{project.title}</span>
                      <span className={styles.projectTitleSecondary}>{project.titleSecondary}</span>
                    </>
                  ) : project.title}
                </h3>
                <p
                  className={styles.projectSubtitle}
                  data-case-intro-item="true"
                >
                  {project.subtitle}
                </p>
                <p
                  className={styles.projectDescription}
                  data-case-intro-item="true"
                >
                  {project.description}
                </p>

                {project.star ? (
                  <dl
                    className={styles.projectStar}
                    aria-label={`${project.title} STAR 项目概览`}
                    data-case-intro-item="true"
                  >
                    {project.star.map((item) => (
                      <div className={styles.starRow} key={item.key}>
                        <dt>{item.key}</dt>
                        <dd><span aria-hidden="true">·</span>{item.text}</dd>
                      </div>
                    ))}
                  </dl>
                ) : (
                  <ul className={styles.projectTags} aria-label={`${project.title} 项目标签`}>
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                )}

                <a
                  className={styles.projectLink}
                  href={project.href ?? `#project-${project.id}`}
                  data-case-intro-item="true"
                >
                  <span>VIEW CASE</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </CaseIntroReveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
