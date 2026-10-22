export type ImageSection = {
  id: string
  index: string
  navLabel: string
  title: string
  type: 'image'
  image: string
  alt: string
  width: number
  height: number
}

export type VideoSection = {
  id: string
  index: string
  navLabel: string
  title: string
  type: 'video'
  src: string
  poster?: string
  caption?: string
}

export type InteractiveSection = {
  id: string
  index: string
  navLabel: string
  title: string
  type: 'interactive'
  renderer: string
}

export type CustomSection = {
  id: string
  index: string
  navLabel: string
  title: string
  type: 'custom'
  renderer: string
}

export type BeanGoSection = ImageSection | VideoSection | InteractiveSection | CustomSection

export const beanGoHero = {
  id: 'overview',
  index: '01',
  navLabel: 'Overview',
  title: 'BeanGo 豆趣项目封面',
  image: '/media/beango/01-hero.png',
  alt: 'BeanGo 豆趣项目主视觉：暖奶油色咖啡场景、品牌标志与两台手机界面',
  width: 1674,
  height: 942,
} as const

export const beanGoSections: BeanGoSection[] = [
  {
    id: 'why-beango',
    index: '02',
    navLabel: 'Why BeanGo',
    title: '为什么设计 BeanGo',
    type: 'image',
    image: '/media/beango/02-why-beango.png',
    alt: '为什么设计 BeanGo：年轻咖啡消费机会、AI 辅助设计实践与核心价值',
    width: 1660,
    height: 942,
  },
  {
    id: 'market-research',
    index: '03',
    navLabel: 'Market',
    title: '咖啡消费市场现状',
    type: 'image',
    image: '/media/beango/03-market-research.png',
    alt: 'BeanGo 咖啡消费市场研究：市场数据与行业痛点',
    width: 1683,
    height: 942,
  },
  {
    id: 'product-architecture',
    index: '04',
    navLabel: 'Architecture',
    title: '产品核心功能架构',
    type: 'image',
    image: '/media/beango/04-product-architecture.png',
    alt: 'BeanGo 产品核心功能架构：首页、拍照识别、AI 咖啡助手、记录、口味地图与社区',
    width: 1673,
    height: 942,
  },
  {
    id: 'icon-system',
    index: '05',
    navLabel: 'Icon System',
    title: 'Icon System / 图标系统',
    type: 'custom',
    renderer: 'icon-system',
  },
  {
    id: 'character-profile',
    index: '06',
    navLabel: 'Mascot',
    title: 'BeanGo 品牌 IP｜咖小鸭',
    type: 'custom',
    renderer: 'character-profile',
  },
  {
    id: 'character-system',
    index: '07',
    navLabel: 'Character System',
    title: '角色系统与表情语言',
    type: 'custom',
    renderer: 'character-system',
  },
  {
    id: 'ip-product-experience',
    index: '08',
    navLabel: 'IP in Product',
    title: 'IP 在产品中的落地应用',
    type: 'custom',
    renderer: 'ip-product-experience',
  },
  {
    id: 'feature-comparison',
    index: '09',
    navLabel: 'Comparison',
    title: '咖啡类产品功能对比',
    type: 'image',
    image: '/media/beango/05-feature-comparison.png',
    alt: 'BeanGo 与 Kafe、BeanBook、咖啡猎人、小红书、大众点评、星巴克和 DeepSeek 的功能对比',
    width: 1674,
    height: 942,
  },
  {
    id: 'competitor-analysis',
    index: '10',
    navLabel: 'Competitors',
    title: 'AI 咖啡 C 端项目竞品分析',
    type: 'image',
    image: '/media/beango/06-competitor-analysis.png',
    alt: 'BeanGo 竞品分析：竞品背景、目标人群、口号、商业模式与差异化机会',
    width: 1673,
    height: 942,
  },
]

export const beanGoNavigation = [
  { id: beanGoHero.id, label: beanGoHero.navLabel },
  ...beanGoSections.map(({ id, navLabel }) => ({ id, label: navLabel })),
]
