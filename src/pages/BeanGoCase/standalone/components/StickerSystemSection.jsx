import React from "react";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";
import { dailyStickers, opsStickers } from "../data/extensionAssets.js";

function StickerRow({ items, label, title, description, tone }) {
  return (
    <Reveal className={`sticker-row sticker-row-${tone}`}>
      <div className="sticker-row-copy">
        <span>{label}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="sticker-gallery">
        {items.map((src, index) => (
          <figure key={src}>
            <img src={src} alt={`${title} ${index + 1}`} />
          </figure>
        ))}
      </div>
    </Reveal>
  );
}

export default function StickerSystemSection() {
  return (
    <section
      id="stickers"
      className="extension-section sticker-section section-pad"
    >
      <div className="page-container">
        <SectionHeading
          index="10"
          eyebrow="STICKER SYSTEM / 表情系统"
          title={
            <>
              让每一次反馈，
              <br />
              <em>都有一个可以回应的表情。</em>
            </>
          }
          description="16 张咖小鸭表情原图被分成日常陪伴与运营互动两套语言，分别服务产品对话与品牌活动。"
        />
        <div className="sticker-system-intro">
          <span>ONE CHARACTER · TWO RHYTHMS</span>
          <p>表情包把角色的“陪伴”与“行动”分开，让情绪在正确的场景里出现。</p>
        </div>
        <div className="sticker-rows">
          <StickerRow
            items={dailyStickers}
            label="A / DAILY COMPANION"
            title="日常陪伴表情"
            description="用于 AI 对话、聊天反馈、推荐结果与轻量状态回应。"
            tone="daily"
          />
          <StickerRow
            items={opsStickers}
            label="B / OPERATIONAL PLAY"
            title="运营互动表情"
            description="用于任务奖励、活动运营、社区互动与弹窗，让行动更有情绪。"
            tone="ops"
          />
        </div>
      </div>
    </section>
  );
}
