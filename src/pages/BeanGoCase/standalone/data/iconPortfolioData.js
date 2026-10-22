const iconAssets = import.meta.glob("../assets/beango/icons/portfolio/*.png", {
  eager: true,
  query: "?url",
  import: "default",
});

function iconUrl(file) {
  const entry = Object.entries(iconAssets).find(([path]) =>
    path.endsWith(`/${file}`),
  );
  return entry?.[1] ?? "";
}

export const iconPortfolioGroups = [
  {
    id: "brand-character",
    index: "01",
    title: "品牌与角色 ICON",
    english: "BRAND & CHARACTER",
    className: "brand",
    items: [
      ["图标2.png", "咖啡门店"],
      ["图标4.png", "牛仔鸭"],
      ["图标5.png", "角色装扮"],
      ["图标8.png", "品牌咖啡豆"],
      ["图标10.png", "附近门店"],
    ],
  },
  {
    id: "map-location",
    index: "02",
    title: "地图与定位 ICON",
    english: "MAP & LOCATION",
    className: "map",
    items: [
      ["图标14.png", "地图定位"],
      ["图标17.png", "探索地图"],
      ["图标19.png", "地点标记"],
      ["图标25.png", "下一步"],
    ],
  },
  {
    id: "ai-messaging",
    index: "03",
    title: "AI 与消息互动 ICON",
    english: "AI & MESSAGING",
    className: "ai",
    items: [
      ["图标1.png", "对话互动"],
      ["图标16.png", "AI 对话"],
      ["图标26.png", "更多消息"],
    ],
  },
  {
    id: "tools-actions",
    index: "04",
    title: "工具与通用操作 ICON",
    english: "TOOLS & ACTIONS",
    className: "tools",
    items: [
      ["图标3.png", "清单表单"],
      ["图标6.png", "收藏星标"],
      ["图标7.png", "设置"],
      ["图标9.png", "优惠券"],
      ["图标11.png", "通知"],
      ["图标12.png", "帮助中心"],
      ["图标13.png", "扫描识别"],
      ["图标15.png", "相机拍照"],
      ["图标18.png", "笔记记录"],
    ],
  },
  {
    id: "feedback-rating",
    index: "05",
    title: "反馈与评价 ICON",
    english: "FEEDBACK & RATING",
    className: "feedback",
    items: [
      ["图标20.png", "已完成"],
      ["图标21.png", "不满意"],
      ["图标22.png", "强烈不满"],
      ["图标23.png", "满意"],
      ["图标24.png", "点赞"],
      ["图标27.png", "点踩"],
    ],
  },
].map((group) => ({
  ...group,
  items: group.items.map(([file, name]) => ({
    file,
    name,
    category: group.id,
    src: iconUrl(file),
  })),
}));

export const iconPortfolioCount = iconPortfolioGroups.reduce(
  (total, group) => total + group.items.length,
  0,
);
