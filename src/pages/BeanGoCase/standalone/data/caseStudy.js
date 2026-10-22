export const projectFacts = [
  { label: "项目性质", value: "个人概念设计" },
  { label: "我的职责", value: "产品策略 · UX · UI" },
  { label: "设计对象", value: "移动端 App 体验" },
  { label: "核心产出", value: "用户流程 · 功能设计 · 视觉系统 · 高保真界面" },
];

export const overviewItems = [
  {
    number: "01",
    label: "PRODUCT CONTEXT / 产品背景",
    title: "选择变多，理解没有跟上。",
    text: "咖啡菜单提供越来越多的品类与风味描述，但信息通常以专业词汇呈现。对于想探索的普通消费者，选择仍像一次猜测。",
  },
  {
    number: "02",
    label: "AUDIENCE / 用户群体",
    title: "想喝得更适合自己的人。",
    text: "面向有日常饮咖啡习惯、愿意尝试新口味，却不熟悉咖啡术语的城市年轻用户。使用场景包括点单前、看到陌生菜单时与饮用后。",
  },
  {
    number: "03",
    label: "DESIGN GOAL / 设计目标",
    title: "降低门槛，建立长期理解。",
    text: "让用户能表达当下需求、理解 AI 推荐依据，并通过轻量记录逐步形成自己的口味画像。",
  },
];

export const painPoints = [
  {
    number: "01",
    title: "咖啡选择困难",
    text: "面对大量选项，用户很难把“今天想喝什么”快速转化为一个具体选择。",
    opportunity: "用生活情境代替先选品类。",
  },
  {
    number: "02",
    title: "菜单理解困难",
    text: "烘焙度、处理法和风味词会增加判断成本，也让尝试新咖啡显得有风险。",
    opportunity: "把专业词汇翻译成可感知的体验。",
  },
  {
    number: "03",
    title: "偏好无法沉淀",
    text: "喝过的咖啡与当时的感受散落在记忆里，下次选择时又要重新开始。",
    opportunity: "让每次反馈成为下一次推荐的线索。",
  },
];

export const competitorAnalysis = [
  {
    number: "01",
    name: "Kafé",
    positioning:
      "海外独立咖啡垂直 App，主打扫描咖啡袋、菜单与标签，解释产地、风味、烘焙与冲煮，并提供 Coffee Journal 与 Taste Profile。",
    audience: "咖啡小白、好奇型消费者、家庭冲煮用户、想建立口味认知的人。",
    slogan: "Coffee made for the curious",
    business: "免费下载 + Coffee Explorer 增值升级。",
    opportunity:
      "最接近“AI 咖啡助手 + 拍照解菜单 + 个人口味档案”。可借鉴其 AI 解释方式，但 BeanGo 要强化中国本地咖啡馆、探店豆单社区以及年轻人的社交表达。",
  },
  {
    number: "02",
    name: "BeanBook",
    positioning:
      "海外精品咖啡记录与发现 App，支持拍咖啡袋自动填充、记录豆子、保存冲煮配方、发现烘焙商新品，并内置 BeanBook AI。",
    audience: "精品咖啡爱好者、手冲用户、家庭咖啡玩家、咖啡师。",
    slogan: "Coffee App built for the future",
    business: "免费下载 + App 内购 / Pro 订阅。",
    opportunity:
      "对应“记不住、学不懂、精品进阶”。可以学习其豆仓与配方结构，但 BeanGo 要把专业参数转化为“小白不踩雷的点单与选豆建议”。",
  },
  {
    number: "03",
    name: "咖啡猎人",
    positioning:
      "国内咖啡记录工具，覆盖冲煮记录、风味雷达、咖啡豆资产、咖啡地图、教程、数据导出等。",
    audience: "国内精品咖啡进阶玩家、手冲用户、器具玩家、喜欢记录数据的人。",
    slogan: "探索咖啡的魅力——从记录每一杯开始",
    business: "全功能免费，无需订阅。",
    opportunity:
      "对应“记不住”和“精品进阶玩家”。咖啡猎人强在专业记录，弱在小白友好、AI 点单和探店社区。BeanGo 的机会是通过 AI 自动沉淀个人口味档案，降低记录与理解门槛。",
  },
  {
    number: "04",
    name: "小红书",
    positioning: "生活兴趣社区，覆盖内容分享、搜索、社交、种草与生活记录。",
    audience: "年轻用户、城市青年、探店爱好者、内容创作者、生活方式消费者。",
    slogan: "你的生活兴趣社区 / 你的生活指南",
    business: "广告营销 + 电商 + 直播 + 品牌合作。",
    opportunity:
      "对应“探店豆单社区”。小红书内容丰富，但咖啡内容缺少结构化。BeanGo 希望做的是“咖啡垂直版的兴趣社区”，让探店内容进一步沉淀成：豆单 → 风味 → 口味地图 → 个人推荐。",
  },
  {
    number: "05",
    name: "大众点评",
    positioning:
      "美团生态下的本地生活消费点评与交易平台，提供商户信息、评价、照片、团购与本地服务。",
    audience: "本地生活消费者、餐饮探店用户、旅游用户、寻找附近商户和优惠的人。",
    slogan: "吃喝玩乐指南",
    business: "团购交易 + 商户服务 + 营销广告。",
    opportunity:
      "对应“怕踩雷”和“探店决策”。大众点评解决的是“去哪家店？”，但是没有解决“到了店里该喝什么？”“哪支豆子真正适合我？”BeanGo 的机会是从大众评分转向基于个人口味的咖啡匹配与推荐。",
  },
  {
    number: "06",
    name: "星巴克 App",
    positioning:
      "星巴克中国官方 App，覆盖在线点单、外送、会员积星、礼品卡、优惠券、咖啡知识与门店探索。",
    audience: "星巴克会员、高频连锁咖啡用户、办公场景用户、品牌忠诚用户。",
    slogan: "解锁你的线上咖啡生活",
    business: "咖啡与食品销售 + 会员积分 + 礼品卡 + 周边商城。",
    opportunity:
      "对应“比连锁 App 更开放”。星巴克强在交易与会员体系，但只服务自己的品牌。BeanGo 要做跨品牌 + 跨咖啡馆 + 跨咖啡豆的开放式个人口味助手。",
  },
  {
    number: "07",
    name: "DeepSeek",
    positioning: "通用 AI 助手，支持聊天问答、联网搜索、深度思考、文件上传与文本提取。",
    audience: "泛 AI 用户、学生、职场人、开发者、需要问答与学习辅助的人。",
    slogan: "AI Assistant",
    business: "App 免费 + API 按量计费。",
    opportunity:
      "对应“比通用 Agent 更有归属感”。DeepSeek 可以回答咖啡知识问题，但没有长期个人口味档案、真实探店场景、咖啡社区与消费闭环。BeanGo 的方向是专属咖啡 Agent + 个人口味记忆 + 真实门店与豆单数据 + 长期消费体验沉淀。",
  },
];

// Content distilled from the BeanGo full product UX maps:
// onboarding, menu understanding, AI assistance, post-drink logging, and taste profile.
export const experienceMap = [
  {
    number: "01",
    title: "发现需求",
    stage: "首次打开 / 进入首页",
    need: "快速知道 BeanGo 能帮我什么，并找到今天的咖啡方向。",
    behavior: [
      { icon: "⌂", title: "打开 BeanGo", detail: "查看首页价值主张" },
      { icon: "＋", title: "进入核心入口", detail: "拍照解菜单 / 问 AI" },
    ],
    touchpoints: "启动页 · 首页 · 拍照解菜单入口 · AI 助手入口",
    feeling: "先看看它和普通咖啡 App 有什么不同",
    pain: "首次印象不明确，用户不知道产品能解决什么问题。",
    opportunity: "3 秒说明核心价值，让用户先体验再决定是否继续。",
  },
  {
    number: "02",
    title: "理解与决策",
    stage: "拍摄菜单 / 调用 AI",
    need: "看懂专业术语，知道哪一杯适合我的口味、预算和场景。",
    behavior: [
      { icon: "⌕", title: "拍照或提问", detail: "上传菜单 / 选择快捷任务" },
      { icon: "✦", title: "读取上下文", detail: "口味、预算、位置与记录" },
    ],
    touchpoints: "拍摄页 · 相册上传 · OCR 识别 · AI 咖啡助手 · 术语卡片",
    feeling: "菜单这么长，能拍完整吗？希望它真的懂我。",
    pain: "等待、识别准确性和推荐依据不透明，会削弱用户信任。",
    opportunity: "分阶段展示识别进度，先给结论，再解释口味、预算和场景依据。",
  },
  {
    number: "03",
    title: "选择与体验",
    stage: "比较推荐 / 确认点单",
    need: "提前知道风味和踩雷风险，快速确定这次要喝什么。",
    behavior: [
      { icon: "◇", title: "比较方案", detail: "匹配度 / 推荐理由 / 风险" },
      { icon: "✓", title: "确认本次点单", detail: "保留门店与饮品信息" },
    ],
    touchpoints: "推荐结果 · 匹配度 · 风味标签 · 预算提示 · 本次点单",
    feeling: "原来这款更适合我，偏酸和超预算也提前说清楚了。",
    pain: "只展示分数或优点时，用户无法判断不适合自己的部分。",
    opportunity: "把推荐理由、风险与替代项并列呈现，并自动生成待记录信息。",
  },
  {
    number: "04",
    title: "喝后记录",
    stage: "饮用完成 / 快速记录",
    need: "趁记忆清晰留下真实感受，不填写复杂的专业表单。",
    behavior: [
      { icon: "＋", title: "进入快速记录", detail: "自动带入门店与饮品" },
      { icon: "✎", title: "描述喝后感受", detail: "口语输入 / 快速评价" },
    ],
    touchpoints: "待记录提醒 · 快速记录 · 好喝 / 一般 / 踩雷 · AI 风味标签",
    feeling: "这杯不错，记下来；原来‘像果汁’也能变成风味标签。",
    pain: "记录入口容易被错过，重复填写和专业字段会打断当下场景。",
    opportunity: "自动带入已知信息，支持口语描述，再由 AI 转成可确认的标签。",
  },
  {
    number: "05",
    title: "形成口味画像",
    stage: "查看我的 / 持续学习",
    need: "看见自己喝过什么、喜欢什么，并知道下一次可以尝试什么。",
    behavior: [
      { icon: "✦", title: "查看口味画像", detail: "六维风味与 AI 总结" },
      { icon: "↗", title: "回顾变化与记录", detail: "让下一次推荐更准确" },
    ],
    touchpoints: "个人中心 · 六维风味雷达 · AI 总结 · 最近记录 · 下一次推荐",
    feeling: "我好像越来越知道自己喜欢什么了。",
    pain: "画像标签缺少依据，变化趋势和个人资产也容易分散。",
    opportunity: "展示画像证据链与变化原因，用喝后记录持续更新下一次推荐。",
  },
];

export const features = [
  {
    id: "home",
    number: "01",
    name: "Home",
    chinese: "从一个熟悉的入口开始探索",
    goal: "把搜索、菜单识别、AI 对话、地图与记录聚合到首页。",
    problem:
      "用户的需求可能是找店、看懂菜单、询问口味或记录一杯，单一入口无法覆盖不同情境。",
    explanation:
      "Hi~Mia 欢迎 Banner 建立陪伴感；搜索框承接明确需求。拍照解菜单、AI 助手、AI 口味地图和快速记录以四个独立入口呈现，底部导航支持跨场景切换。",
    screen: "home",
    theme: "oat",
    details: [
      {
        title: "熟悉的欢迎感",
        text: "Hi~Mia 让首页以对话语气开启。",
        crop: { x: 25, y: 177, width: 672, height: 325 },
      },
      {
        title: "任务入口前置",
        text: "拍照解菜单与 AI 助手位于首行。",
        crop: { x: 8, y: 642, width: 704, height: 312 },
      },
      {
        title: "探索与记录并行",
        text: "地图和快速记录承接下一步行动。",
        crop: { x: 8, y: 970, width: 704, height: 310 },
      },
    ],
  },
  {
    id: "taste-map",
    number: "02",
    name: "AI Taste Map",
    chinese: "在附近找到更适合的一杯",
    goal: "把个人口味偏好与周边咖啡店连接，帮助用户做线下选择。",
    problem:
      "附近门店很多，但距离、菜单和风味信息分散，用户难以判断哪家更适合自己。",
    explanation:
      "上海地图直接呈现门店匹配点与百分比，筛选项支持按风味、类型和距离探索。底部门店卡片汇总匹配度、距离、风味标签与推荐理由，减少地图与详情间的反复跳转。",
    screen: "tasteMap",
    theme: "sage",
    details: [
      {
        title: "先筛选风味",
        text: "风味、类型与距离直接在地图上方切换。",
        crop: { x: 25, y: 153, width: 706, height: 190 },
      },
      {
        title: "匹配点可比较",
        text: "地图标记同时给出门店与匹配百分比。",
        crop: { x: 42, y: 445, width: 668, height: 300 },
      },
      {
        title: "理由与门店相连",
        text: "推荐卡片把匹配度、风味与推荐原因放在一起。",
        crop: { x: 23, y: 882, width: 712, height: 344 },
      },
    ],
  },
  {
    id: "menu-scanner",
    number: "03",
    name: "AI Menu Scanner",
    chinese: "读懂陌生菜单",
    goal: "让用户能快速进入拍摄或上传菜单的任务。",
    problem:
      "陌生菜单与豆袋信息难理解，拍摄时也需要清楚知道扫描范围和下一步操作。",
    explanation:
      "页面明确区分菜单模式与豆袋模式；中央取景区域提示拍摄范围，底部同时提供相册上传和拍摄菜单入口。原始设计稿展示的是扫描入口，未展示识别结果。",
    screen: "scanner",
    theme: "caramel",
    process: ["选择模式", "对齐取景区", "拍摄或上传", "进入 OCR 识别"],
    details: [
      {
        title: "两种识别模式",
        text: "菜单与豆袋任务在拍摄前清晰区分。",
        crop: { x: 28, y: 140, width: 696, height: 110 },
      },
      {
        title: "取景边界明确",
        text: "四角标记和辅助线提示拍摄范围。",
        crop: { x: 60, y: 625, width: 630, height: 310 },
      },
      {
        title: "拍摄或上传",
        text: "相册与拍摄按钮提供两条完成路径。",
        crop: { x: 27, y: 1055, width: 696, height: 225 },
      },
    ],
  },
  {
    id: "community",
    number: "04",
    name: "Community",
    chinese: "从咖啡分享中找到灵感",
    goal: "让用户能浏览关注内容与推荐内容，也能轻松发布自己的发现。",
    problem: "咖啡探索缺少可参考的真实经历，内容如果没有清晰分类也会难以浏览。",
    explanation:
      "关注、推荐及主题标签位于内容流上方；咖啡内容卡片显示标题、店铺、作者和互动数据。发布入口保持醒目，让浏览与分享之间的切换更直接。",
    screen: "community",
    theme: "clay",
    details: [
      {
        title: "发现与发布",
        text: "关注、推荐和发布保持在同一视线范围。",
        crop: { x: 33, y: 105, width: 692, height: 252 },
      },
      {
        title: "内容结构清晰",
        text: "标题、门店和内容类型帮助快速浏览。",
        crop: { x: 32, y: 571, width: 695, height: 218 },
      },
      {
        title: "互动信息可见",
        text: "作者、喜爱与评论数据为分享提供反馈。",
        crop: { x: 32, y: 804, width: 695, height: 218 },
      },
    ],
  },
  {
    id: "profile",
    number: "05",
    name: "Profile",
    chinese: "让探索沉淀为个人档案",
    goal: "集中呈现探索数据、口味画像和个人内容入口。",
    problem: "饮用、收藏与偏好信息分散时，用户难以回顾自己的探索轨迹。",
    explanation:
      "用户头像与探索数据建立个人身份感；口味雷达图、AI 一句话总结及风味标签让偏好可见。记录、收藏、豆仓、社区和设置形成清晰的个人中心导航。",
    screen: "profile",
    theme: "cocoa",
    details: [
      {
        title: "探索被量化",
        text: "头像与饮用、喜爱、探索数据构成个人概览。",
        crop: { x: 25, y: 104, width: 710, height: 300 },
      },
      {
        title: "口味有了形状",
        text: "雷达图与 AI 总结把偏好转成可读线索。",
        crop: { x: 32, y: 426, width: 696, height: 380 },
      },
      {
        title: "个人内容归档",
        text: "记录、收藏、豆仓与设置集中管理。",
        crop: { x: 30, y: 823, width: 700, height: 207 },
      },
    ],
  },
];
