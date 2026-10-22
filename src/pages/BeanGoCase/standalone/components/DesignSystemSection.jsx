import React from "react";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

const colors = [
  ["GO ORANGE", "#E47735", "品牌识别 · 主按钮 · 关键行动", "orange"],
  ["MORNING SUN", "#F4B942", "成就 · 评分 · 活动高光", "sun"],
  ["OAT CREAM", "#F7EBD7", "全局背景 · 温暖画布", "cream"],
  ["ESPRESSO", "#3B2418", "主文字 · 描边 · 深色表面", "espresso"],
  ["AI MINT", "#67C9B5", "AI 状态 · 智能反馈", "mint"],
  ["BERRY NOTE", "#D96C8A", "社区互动 · 情绪强调", "berry"],
];

const typeRows = [
  ["Display", "BeanGo", "Georgia / Songti SC", "编辑式封面与章节标题"],
  ["H1", "从选择到记忆", "Serif Display", "案例主叙事标题"],
  ["H2", "让每一次选择更清楚", "Humanist Sans", "内容区块与设计结论"],
  [
    "Body",
    "咖啡选择从今天开始变得更容易理解。",
    "PingFang SC / Avenir Next",
    "产品说明与体验叙事",
  ],
  [
    "Caption",
    "ORIGINAL UI / HOME",
    "System Sans · 11px",
    "图片注释、来源、辅助信息",
  ],
  [
    "Numeric",
    "01  ·  4.8  ·  #E47735",
    "Courier New",
    "编号、色值、评分与数据",
  ],
];

const languageCards = [
  [
    "Warm",
    "陪伴",
    "用奶油底、咖啡棕和柔和高光，把 AI 变成可以靠近的咖啡搭子。",
  ],
  [
    "Relaxed",
    "松弛",
    "用大留白、圆角表面和低对比描边，给用户留下慢下来理解菜单的空间。",
  ],
  [
    "Smart",
    "智能",
    "用 AI Mint、清晰层级和可解释反馈，让推荐有依据，而不是神秘的黑盒。",
  ],
  [
    "Explore",
    "探索",
    "用牛仔、地图、咖啡豆和路径感，把每一次选择连接到下一次发现。",
  ],
];

export default function DesignSystemSection() {
  return (
    <section
      id="system"
      className="system-section section-pad extension-section design-system-section"
    >
      <div className="page-container">
        <SectionHeading
          index="07"
          eyebrow="VISUAL DESIGN SYSTEM / 视觉规范"
          title={
            <>
              让咖啡生活方式，
              <br />
              <em>拥有一套可持续的视觉语言。</em>
            </>
          }
          description="BeanGo 将咖啡的温度、AI 的清晰度与牛仔探索文化放进同一套可复用的设计系统。"
        />
        <div className="visual-language-block">
          <div className="extension-subheading">
            <span>01 / VISUAL LANGUAGE</span>
            <p>视觉语言</p>
          </div>
          <div className="visual-language-grid">
            {languageCards.map(([english, chinese, text]) => (
              <Reveal
                key={english}
                className={`language-card language-${english.toLowerCase()}`}
              >
                <span>{english}</span>
                <h3>{chinese}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="color-system-block">
          <div className="extension-subheading">
            <span>02 / COLOR SYSTEM</span>
            <p>品牌色彩系统</p>
          </div>
          <div className="color-system-grid">
            {colors.map(([name, hex, usage, tone]) => (
              <Reveal key={name} className={`color-token color-token-${tone}`}>
                <div className="color-token-swatch" />
                <div className="color-token-meta">
                  <strong>{name}</strong>
                  <code>{hex}</code>
                  <small>{usage}</small>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="type-system-block">
          <div className="extension-subheading">
            <span>03 / TYPOGRAPHY</span>
            <p>字体层级</p>
          </div>
          <div className="type-system-layout">
            <div className="type-system-intro">
              <span className="type-display-mark">Aa</span>
              <h3>科技 + 生活方式</h3>
              <p>
                中文高频 UI 使用清晰圆润的无衬线字体；品牌展示标题保留 Serif /
                宋体气质，形成有温度的反差。
              </p>
            </div>
            <div className="type-rows">
              {typeRows.map(([label, sample, font, usage]) => (
                <div
                  className={`type-row type-row-${label.toLowerCase()}`}
                  key={label}
                >
                  <span>{label}</span>
                  <strong>{sample}</strong>
                  <code>{font}</code>
                  <small>{usage}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
