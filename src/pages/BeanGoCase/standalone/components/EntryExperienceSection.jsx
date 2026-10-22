import React from "react";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";
import { entryExperienceAssets } from "../data/extensionAssets.js";

function EntryImage({ src, label, title, description, className = "" }) {
  return (
    <Reveal className={`entry-experience-card ${className}`}>
      <div className="entry-experience-image-wrap">
        <img src={src} alt={`BeanGo ${title}`} />
      </div>
      <div className="entry-experience-copy">
        <span>{label}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Reveal>
  );
}

export default function EntryExperienceSection() {
  const assets = entryExperienceAssets;

  return (
    <section
      id="entry-experience"
      className="entry-experience-section section-pad"
    >
      <div className="page-container">
        <SectionHeading
          index="05A"
          eyebrow="APP ENTRY EXPERIENCE / 首次进入体验"
          title={
            <>
              从第一秒，
              <br />
              <em>让咖啡探索开始。</em>
            </>
          }
          description="闪屏建立品牌记忆，引导页 01 与 03 把用户带入 BeanGo 的第一段探索。"
        />

        <div className="entry-experience-grid">
          <EntryImage
            src={assets.splash}
            label="01 / SPLASH SCREEN"
            title="品牌闪屏"
            description="用于建立 BeanGo 的第一印象，快速传达品牌识别、IP 形象与“喝懂每一杯”的核心气质。"
            className="entry-experience-feature"
          />
          <div className="entry-experience-onboarding">
            <EntryImage
              src={assets.onboarding01}
              label="02 / ONBOARDING 01"
              title="欢迎进入 BeanGo"
              description="用西部牛仔小鸭 IP 和咖啡探索场景，建立产品的情绪基调与陪伴感。"
            />
            <EntryImage
              src={assets.onboarding03}
              label="03 / ONBOARDING 03"
              title="开始探索"
              description="通过简洁的空状态式引导，把用户自然带入“去发现第一杯”的行动入口。"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
