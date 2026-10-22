import React from "react";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";
import {
  iconPortfolioCount,
  iconPortfolioGroups,
} from "../data/iconPortfolioData.js";

function IconPortfolioCard({ group }) {
  return (
    <Reveal className={`icon-portfolio-card ${group.className}`}>
      <header className="icon-portfolio-card-head">
        <div>
          <span className="icon-portfolio-index">{group.index} / 05</span>
          <h3>{group.title}</h3>
          <p>{group.english}</p>
        </div>
        <b>{String(group.items.length).padStart(2, "0")} ITEMS</b>
      </header>
      <div className="icon-portfolio-grid">
        {group.items.map((item) => (
          <figure key={item.file} className="icon-portfolio-item">
            <img src={item.src} alt={item.name} />
            <figcaption>{item.name}</figcaption>
          </figure>
        ))}
      </div>
    </Reveal>
  );
}

export default function IconSystemSection() {
  return (
    <section
      id="icon-system"
      className="extension-section icon-system-section icon-portfolio-section section-pad"
    >
      <div className="page-container">
        <SectionHeading
          index="08"
          eyebrow="ICON SYSTEM / 图标系统"
          title="定义图标风格"
          description="根据不同模块的使用场景，图标采用拟物图标、面性图标与线性图标相结合的差异化展示形式。整体风格围绕「温暖」「陪伴」「探索」展开，以咖啡豆为品牌识别线索，保留柔和的材质、明亮的高光与轻盈的圆角轮廓。"
        />
        <div className="icon-portfolio-meta" aria-label="图标资产说明">
          <span>{iconPortfolioCount} 个 PNG 图标</span>
          <span>透明背景</span>
          <span>原图保留</span>
        </div>
        <div className="icon-portfolio-grid-layout">
          {iconPortfolioGroups.map((group) => (
            <IconPortfolioCard key={group.id} group={group} />
          ))}
        </div>
        <footer className="icon-portfolio-footer">
          <span>BEANGO ICON LANGUAGE</span>
          <strong>Warm · Companion · Explore</strong>
        </footer>
      </div>
    </section>
  );
}
