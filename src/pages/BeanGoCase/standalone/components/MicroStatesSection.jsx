import React from "react";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";
import { stateAssets } from "../data/extensionAssets.js";

function ImageRail({ items, alt, className = "" }) {
  return (
    <div className={`state-image-rail ${className}`}>
      {items.map((src, index) => (
        <figure key={src}>
          <img src={src} alt={`${alt} ${index + 1}`} />
        </figure>
      ))}
    </div>
  );
}

export default function MicroStatesSection() {
  return (
    <section
      id="micro-states"
      className="extension-section micro-states-section section-pad"
    >
      <div className="page-container">
        <SectionHeading
          index="11"
          eyebrow="MICRO STATES / 情绪化状态设计"
          title={
            <>
              系统状态也可以，
              <br />
              <em>像一位咖啡搭子一样回应。</em>
            </>
          }
          description="BeanGo 用咖小鸭、咖啡符号和下一步建议，降低等待、空白和关键操作的不确定感。"
        />
        <div className="state-feature-grid">
          <Reveal className="state-feature state-loading">
            <div className="state-feature-copy">
              <span>01 / LOADING</span>
              <h3>等待也有陪伴感</h3>
              <p>通过角色动作与咖啡语义，让加载不再只是一个机械进度条。</p>
            </div>
            <ImageRail items={stateAssets.loading} alt="BeanGo Loading 状态" />
          </Reveal>
          <Reveal className="state-feature state-empty" delay={80}>
            <div className="state-feature-copy">
              <span>02 / EMPTY STATE</span>
              <h3>没有结果时仍然给出下一步</h3>
              <p>空白页面被转化为发现入口，角色帮助用户继续探索。</p>
            </div>
            <ImageRail items={stateAssets.empty} alt="BeanGo Empty State" />
          </Reveal>
        </div>
        <Reveal className="popup-feature">
          <div className="state-feature-copy">
            <span>03 / POPUP</span>
            <h3>关键操作也保留角色感</h3>
            <p>
              定位权限、删除确认、完善口味等高风险节点，用角色和清晰行动降低犹豫。
            </p>
          </div>
          <ImageRail
            items={stateAssets.popup}
            alt="BeanGo Popup 状态"
            className="popup-rail"
          />
        </Reveal>
      </div>
    </section>
  );
}
