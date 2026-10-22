export type BeanGoIcon = {
  name: string
  alt: string
  src: string
}

export type BeanGoIconCategory = {
  id: string
  index: string
  title: string
  englishTitle: string
  layout: 'standard' | 'wide'
  icons: BeanGoIcon[]
}

export const beanGoIconCategories: BeanGoIconCategory[] = [
  {
    id: 'brand-character',
    index: '01',
    title: '品牌与角色 ICON',
    englishTitle: 'Brand & Character',
    layout: 'standard',
    icons: [
      { name: '咖啡门店', alt: 'BeanGo 咖啡门店图标', src: '/media/beango/icons/icon-02.png' },
      { name: '牛仔鸭', alt: 'BeanGo 牛仔鸭角色头像图标', src: '/media/beango/icons/icon-04.png' },
      { name: '角色装扮', alt: 'BeanGo 角色装扮图标', src: '/media/beango/icons/icon-05.png' },
      { name: '品牌咖啡豆', alt: 'BeanGo 品牌咖啡豆图标', src: '/media/beango/icons/icon-08.png' },
      { name: '附近门店', alt: 'BeanGo 附近门店图标', src: '/media/beango/icons/icon-10.png' },
    ],
  },
  {
    id: 'map-location',
    index: '02',
    title: '地图与定位 ICON',
    englishTitle: 'Map & Location',
    layout: 'standard',
    icons: [
      { name: '地图定位', alt: 'BeanGo 地图定位图标', src: '/media/beango/icons/icon-14.png' },
      { name: '探索地图', alt: 'BeanGo 探索地图图标', src: '/media/beango/icons/icon-17.png' },
      { name: '地点标记', alt: 'BeanGo 地点标记图标', src: '/media/beango/icons/icon-19.png' },
      { name: '下一步', alt: 'BeanGo 下一步导航图标', src: '/media/beango/icons/icon-25.png' },
    ],
  },
  {
    id: 'ai-messaging',
    index: '03',
    title: 'AI 与消息互动 ICON',
    englishTitle: 'AI & Messaging',
    layout: 'standard',
    icons: [
      { name: '对话互动', alt: 'BeanGo 对话互动图标', src: '/media/beango/icons/icon-01.png' },
      { name: 'AI 对话', alt: 'BeanGo AI 对话图标', src: '/media/beango/icons/icon-16.png' },
      { name: '更多消息', alt: 'BeanGo 更多消息图标', src: '/media/beango/icons/icon-26.png' },
    ],
  },
  {
    id: 'tools-actions',
    index: '04',
    title: '工具与通用操作 ICON',
    englishTitle: 'Tools & Actions',
    layout: 'wide',
    icons: [
      { name: '清单表单', alt: 'BeanGo 清单表单图标', src: '/media/beango/icons/icon-03.png' },
      { name: '收藏星标', alt: 'BeanGo 收藏星标图标', src: '/media/beango/icons/icon-06.png' },
      { name: '设置', alt: 'BeanGo 设置图标', src: '/media/beango/icons/icon-07.png' },
      { name: '优惠券', alt: 'BeanGo 优惠券图标', src: '/media/beango/icons/icon-09.png' },
      { name: '通知', alt: 'BeanGo 通知图标', src: '/media/beango/icons/icon-11.png' },
      { name: '帮助中心', alt: 'BeanGo 帮助中心图标', src: '/media/beango/icons/icon-12.png' },
      { name: '扫描识别', alt: 'BeanGo 扫描识别图标', src: '/media/beango/icons/icon-13.png' },
      { name: '相机拍照', alt: 'BeanGo 相机拍照图标', src: '/media/beango/icons/icon-15.png' },
      { name: '笔记记录', alt: 'BeanGo 笔记记录图标', src: '/media/beango/icons/icon-18.png' },
    ],
  },
  {
    id: 'feedback-rating',
    index: '05',
    title: '反馈与评价 ICON',
    englishTitle: 'Feedback & Rating',
    layout: 'standard',
    icons: [
      { name: '已完成', alt: 'BeanGo 已完成状态图标', src: '/media/beango/icons/icon-20.png' },
      { name: '不满意', alt: 'BeanGo 不满意评价图标', src: '/media/beango/icons/icon-21.png' },
      { name: '强烈不满', alt: 'BeanGo 强烈不满评价图标', src: '/media/beango/icons/icon-22.png' },
      { name: '满意', alt: 'BeanGo 满意评价图标', src: '/media/beango/icons/icon-23.png' },
      { name: '点赞', alt: 'BeanGo 点赞图标', src: '/media/beango/icons/icon-24.png' },
      { name: '点踩', alt: 'BeanGo 点踩图标', src: '/media/beango/icons/icon-27.png' },
    ],
  },
]
