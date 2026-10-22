import type { ReactElement } from 'react'
import styles from './BeanGoIpSections.module.css'

const profileFacts = [
  ['姓名', '咖小鸭'],
  ['性别', '女'],
  ['年龄', '1 岁'],
  ['星座', '水瓶座'],
]

const palette = [
  { name: '咖啡棕', value: '#5b2f18' },
  { name: '皮革棕', value: '#9b572d' },
  { name: '暖奶油', value: '#fff4df' },
  { name: '活力金', value: '#e9a72f' },
  { name: '拿铁米', value: '#f3d8a7' },
  { name: '安全绿', value: '#718d5e' },
]

function AssetFigure({
  src,
  alt,
  caption,
  className = '',
}: {
  src: string
  alt: string
  caption?: string
  className?: string
}): ReactElement {
  return (
    <figure className={`${styles.assetFigure} ${className}`}>
      <img src={src} alt={alt} loading="lazy" decoding="async" />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}

function CharacterProfileSection(): ReactElement {
  return (
    <div className={styles.ipModule}>
      <div className={styles.moduleIntro}>
        <div>
          <span className={styles.moduleKicker}>COFFEE MASCOT SYSTEM</span>
          <p>一个可以陪用户探索咖啡，也可以在产品里持续回应用户的品牌角色。</p>
        </div>
        <span className={styles.moduleIndex}>01 / 03</span>
      </div>

      <div className={styles.profileGrid}>
        <AssetFigure
          src="/media/beango/ip/character-2d.png"
          alt="咖小鸭 2D 角色立绘，戴牛仔帽、黄围巾并手持冰咖啡"
          caption="2D / 线稿与比例标准"
          className={styles.characterCard}
        />
        <AssetFigure
          src="/media/beango/ip/character-3d.png"
          alt="咖小鸭 3D 角色形象，戴牛仔帽、黄围巾并背着皮革小包"
          caption="3D / 材质与空间体积"
          className={`${styles.characterCard} ${styles.characterCardFeatured}`}
        />

        <aside className={styles.profileAside}>
          <div className={styles.roleStatement}>
            <span>CHARACTER ROLE</span>
            <h3>咖啡搭子<br />+ 牛仔探索者</h3>
            <p>亲切、可靠、会推荐，让 AI 陪伴感拥有一个可被记住的表情。</p>
          </div>

          <dl className={styles.profileFacts}>
            {profileFacts.map(([term, value]) => (
              <div key={term}>
                <dt>{term}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>

          <div className={styles.paletteBlock}>
            <span>PALETTE LANGUAGE</span>
            <div className={styles.paletteGrid}>
              {palette.map((color) => (
                <div key={color.name}>
                  <i style={{ backgroundColor: color.value }} aria-hidden="true" />
                  <span>{color.name}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <div className={styles.moduleQuote}>
        <span>CORE VALUE</span>
        <p>让“推荐一杯咖啡”从一个功能动作，变成一次有角色陪伴的生活方式体验。</p>
      </div>
    </div>
  )
}

function CharacterSystemSection(): ReactElement {
  return (
    <div className={styles.ipModule}>
      <div className={styles.moduleIntro}>
        <div>
          <span className={styles.moduleKicker}>CHARACTER SYSTEM</span>
          <p>咖小鸭不是一张单独的吉祥物海报，而是一套可以被动画、表情和运营持续调用的角色规则。</p>
        </div>
        <span className={styles.moduleIndex}>02 / 03</span>
      </div>

      <AssetFigure
        src="/media/beango/ip/three-view.png"
        alt="咖小鸭 2D 与 3D 角色三视图，对照展示正面、侧面与背面"
        caption="2D 统一比例、服饰和轮廓；3D 统一材质、表情与空间体积。"
        className={styles.systemWide}
      />

      <div className={styles.ruleGrid}>
        <article>
          <span>01 / 2D STANDARD</span>
          <h3>先保证识别，再扩展情绪。</h3>
          <p>统一鸭嘴、牛仔帽、黄围巾和皮革配件的比例关系，让角色在小尺寸图标和大尺寸海报中都保持清晰。</p>
        </article>
        <article>
          <span>02 / 3D STANDARD</span>
          <h3>让角色拥有可持续的空间表现。</h3>
          <p>用材质、光照和体积建立真实触感，为后续动效、引导动画和活动视觉保留一致的角色基础。</p>
        </article>
      </div>

      <div className={styles.stickerSystem}>
        <div className={styles.stickerGroup}>
          <h3>日常陪伴表情</h3>
          <AssetFigure
            src="/media/beango/ip/sticker-daily.png"
            alt="咖小鸭日常陪伴表情：开心、疑问、思考与安慰"
            caption="用于日常情绪反馈，让 AI 陪伴更自然。"
            className={styles.stickerWide}
          />
        </div>
        <div className={styles.stickerGroup}>
          <h3>运营互动表情</h3>
          <AssetFigure
            src="/media/beango/ip/sticker-ops.png"
            alt="咖小鸭运营互动表情：好耶、收到、活动、奖励与分享"
            caption="用于聊天、弹窗、活动和任务奖励等互动场景。"
            className={styles.stickerWide}
          />
        </div>
      </div>

      <div className={styles.expressionLegend}>
        <div>
          <span className={styles.legendDot} />
          <div><strong>日常陪伴表情</strong><small>疑问、开心、思考、安慰</small></div>
        </div>
        <div>
          <span className={`${styles.legendDot} ${styles.legendDotOrange}`} />
          <div><strong>运营互动表情</strong><small>好耶、收到、活动、奖励、分享</small></div>
        </div>
        <p>角色系统保证动画、表情和后续运营延展的一致性。</p>
      </div>
    </div>
  )
}

type BentoCardProps = {
  className?: string
  label: string
  title: string
  src: string
  alt: string
}

function BentoCard({ className = '', label, title, src, alt }: BentoCardProps): ReactElement {
  return (
    <article className={`${styles.bentoCard} ${className}`}>
      <div className={styles.bentoCopy}>
        <span>{label}</span>
        <h3>{title}</h3>
      </div>
      <img src={src} alt={alt} loading="lazy" decoding="async" />
    </article>
  )
}

function IpProductExperienceSection(): ReactElement {
  return (
    <div className={styles.ipModule}>
      <div className={styles.moduleIntro}>
        <div>
          <span className={styles.moduleKicker}>IP IN PRODUCT EXPERIENCE</span>
          <p>IP 进入用户旅程的关键节点，参与引导、反馈、状态和运营，而不是停留在装饰层。</p>
        </div>
        <span className={styles.moduleIndex}>03 / 03</span>
      </div>

      <div className={styles.bentoGrid}>
        <BentoCard
          className={styles.bentoLarge}
          label="ONBOARDING / 引导"
          title="用探索者身份降低第一次使用的陌生感"
          src="/media/beango/ip/onboarding.png"
          alt="BeanGo onboarding 引导页，咖小鸭带领用户开始探索咖啡"
        />
        <BentoCard
          className={styles.bentoLarge}
          label="SPLASH + LOGIN / 闪屏与登录"
          title="让品牌识别在第一秒成立"
          src="/media/beango/ip/splash-login.png"
          alt="BeanGo 闪屏与登录界面，咖小鸭强化品牌识别"
        />
        <BentoCard
          className={`${styles.bentoLarge} ${styles.campaignCard}`}
          label="CAMPAIGN / 活动"
          title="把节日运营变成一次咖啡探险"
          src="/media/beango/ip/campaign.png"
          alt="BeanGo 咖啡探险季活动海报与活动页"
        />
        <BentoCard
          className={styles.bentoSmall}
          label="LOADING / 加载"
          title="等待也有陪伴感"
          src="/media/beango/ip/loading.png"
          alt="BeanGo 加载动画与推荐生成状态"
        />
        <BentoCard
          className={styles.bentoSmall}
          label="EMPTY / 空状态"
          title="没有结果时仍然给出下一步"
          src="/media/beango/ip/empty-states.png"
          alt="BeanGo 搜索无结果、网络异常和暂无收藏空状态"
        />
        <BentoCard
          className={styles.bentoSmall}
          label="POPUP / 弹窗"
          title="让关键操作更有角色感"
          src="/media/beango/ip/popups.png"
          alt="BeanGo 开启定位、确认删除和完善口味弹窗"
        />
      </div>

      <div className={styles.experienceConclusion}>
        <span>IP IN EXPERIENCE</span>
        <p>IP 贯穿品牌识别、引导、反馈与陪伴体验。</p>
      </div>
    </div>
  )
}

export const beangoIpRenderers: Record<string, ReactElement> = {
  'character-profile': <CharacterProfileSection />,
  'character-system': <CharacterSystemSection />,
  'ip-product-experience': <IpProductExperienceSection />,
}
