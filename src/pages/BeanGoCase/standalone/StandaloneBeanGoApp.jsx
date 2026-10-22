import React from "react";
import Reveal from "./components/Reveal.jsx";
import SectionHeading from "./components/SectionHeading.jsx";
import PhoneMockup from "./components/PhoneMockup.jsx";
import uploadedLogo from "./assets/beango/brand/bean-go-logo-lossless.svg";
import DesignSystemSection from "./components/DesignSystemSection.jsx";
import IconSystemSection from "./components/IconSystemSection.jsx";
import MascotSection from "./components/MascotSection.jsx";
import StickerSystemSection from "./components/StickerSystemSection.jsx";
import MicroStatesSection from "./components/MicroStatesSection.jsx";
import CampaignSection from "./components/CampaignSection.jsx";
import EntryExperienceSection from "./components/EntryExperienceSection.jsx";
import { uiScreens } from "./data/uiScreens.js";
import locationPermission from "./assets/images/overview/location-permission.png";
import navigationGuide from "./assets/images/overview/navigation-guide.png";
import beanMenuUpdate from "./assets/images/overview/bean-menu-update.png";
import noteDraft from "./assets/images/overview/note-draft.png";
import publishSuccess from "./assets/images/overview/publish-success.png";
import noteDetail from "./assets/images/overview/note-detail.png";
import storeDetail from "./assets/images/overview/store-detail.png";
import tasteProfile from "./assets/images/overview/taste-profile.png";
import beanVault from "./assets/images/overview/bean-vault.png";
import coffeeRecord from "./assets/images/overview/coffee-record.png";
import {
  ArrowRight,
  BeanMark,
  Sparkle,
} from "./components/Icons.jsx";
import {
  features,
  competitorAnalysis,
  experienceMap,
  overviewItems,
  painPoints,
  projectFacts,
} from "./data/caseStudy.js";

function Hero() {
  return (
    <section id="top" className="hero-section case-hero">
      <div className="hero-photo" />
      <div className="hero-overlay" />
      <div className="hero-content page-container hero-layout relative">
        <div className="hero-copy">
          <div className="hero-kicker">
            <span className="tiny-dot" /> 01 / UX / UI DESIGN CASE STUDY{" "}
            <span>— 2026</span>
          </div>
          <h1>
            <span>BeanGo</span>
            <small>豆趣</small>
          </h1>
          <p className="hero-product-type">AI Coffee Companion App</p>
          <p className="hero-case-intro">
            一款帮助用户发现咖啡需求、读懂菜单，并逐步认识个人口味的 AI 咖啡陪伴
            App 概念设计。
          </p>
          <div className="hero-design-goal">
            <span>MY DESIGN GOAL / 我的设计目标</span>
            <strong>让咖啡选择从“猜一杯”，变成有依据、有记忆的探索。</strong>
          </div>
          <a className="hero-scroll" href="#overview">
            <span>浏览设计过程</span>
            <span className="scroll-line" />↓
          </a>
        </div>
        <div className="hero-mockup hero-mockup-dual" aria-label="BeanGo Login 与 Home 双手机展示">
          <PhoneMockup screen="login" className="hero-dual-login" />
          <PhoneMockup screen="home" className="hero-dual-home" priority />
        </div>
      </div>
      <div className="hero-side-label">
        PERSONAL CONCEPT PROJECT · MOBILE APP
      </div>
    </section>
  );
}

function ProjectOverview() {
  return (
    <section id="overview" className="overview-section section-pad">
      <div className="page-container">
        <SectionHeading
          index="02"
          eyebrow="PROJECT OVERVIEW / 项目概览"
          title={
            <>
              把复杂的咖啡选择，
              <br />
              <em>变成贴近个人的体验。</em>
            </>
          }
          description="BeanGo 从用户的真实决策过程出发，连接点单前的犹豫、点单时的理解，以及饮用后的反馈。"
        />
        <div className="overview-card-grid">
          {overviewItems.map((item, index) => (
            <Reveal
              key={item.number}
              delay={index * 70}
              className="overview-card"
            >
              <div className="overview-card-heading">
                <span className="overview-card-number">{item.number}</span>
                <p className="overline">{item.label}</p>
                <h3>{item.title}</h3>
              </div>
              <p className="overview-card-body">{item.text}</p>
            </Reveal>
          ))}
        </div>
        <div className="fact-grid grid">
          {projectFacts.map((fact, index) => (
            <Reveal key={fact.label} delay={index * 50} className="fact-item">
              <span>{fact.label}</span>
              <strong>{fact.value}</strong>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProblemDefinition() {
  return (
    <section id="problem" className="problem-section section-pad">
      <div className="page-container">
        <SectionHeading
          index="03"
          eyebrow="PROBLEM DEFINITION / 问题定义"
          title={
            <>
              用户需要的不是更多选项，
              <br />
              而是更清楚的选择依据。
            </>
          }
          description="围绕咖啡决策路径，概念阶段明确了三个需要被设计解决的核心问题。"
          light
        />
        <div className="problem-grid grid">
          {painPoints.map((point, index) => (
            <Reveal
              className="problem-card"
              key={point.number}
              delay={index * 80}
            >
              <span className="problem-number">{point.number} /</span>
              <h3>{point.title}</h3>
              <p>{point.text}</p>
              <div className="problem-opportunity">
                <span>DESIGN OPPORTUNITY</span>
                <strong>{point.opportunity}</strong>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="how-might-we">
          <span>HOW MIGHT WE</span>
          <p>
            如何让每一次咖啡选择都更容易理解，
            <br />
            并让每一次体验成为<span>下一次选择的线索？</span>
          </p>
          <Sparkle size={34} />
        </Reveal>
      </div>
    </section>
  );
}

function UXStrategy() {
  return (
    <section id="strategy" className="competitive-section section-pad">
      <div className="page-container">
        <SectionHeading
          index="04"
          eyebrow="COMPETITIVE ANALYSIS / 竞品分析"
          title={
            <>
              咖啡选择从来不缺工具，
              <br />
              <em>缺的是一条真正理解用户的路径。</em>
            </>
          }
          description="从咖啡工具、记录产品、内容社区、本地生活平台、品牌 App 到通用 AI，不同产品分别解决了咖啡体验中的某一个环节。"
        />
        <div className="competitive-matrix" role="table" aria-label="BeanGo 竞品分析矩阵">
          <div className="competitive-matrix-head" role="row">
            <span>PRODUCT / 产品</span>
            <span>POSITIONING / 商业背景</span>
            <span>AUDIENCE / 目标人群</span>
            <span>BUSINESS / 商业模式</span>
            <span>BEANGO OPPORTUNITY / BeanGo 对应机会</span>
          </div>
          {competitorAnalysis.map((competitor, index) => (
            <Reveal
              key={competitor.name}
              delay={index * 45}
              className="competitive-row"
            >
              <div className="competitive-cell competitive-product" data-label="PRODUCT / 产品">
                <span>{competitor.number}</span>
                <h3>{competitor.name}</h3>
              </div>
              <div className="competitive-cell" data-label="POSITIONING / 商业背景">
                <p>{competitor.positioning}</p>
              </div>
              <div className="competitive-cell" data-label="AUDIENCE / 目标人群">
                <p>{competitor.audience}</p>
              </div>
              <div className="competitive-cell competitive-business" data-label="BUSINESS / 商业模式">
                <strong>“{competitor.slogan}”</strong>
                <p>{competitor.business}</p>
              </div>
              <div className="competitive-cell competitive-opportunity" data-label="BEANGO OPPORTUNITY / BeanGo 对应机会">
                <p>{competitor.opportunity}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="competitive-insight">
          <div className="competitive-insight-label">
            <span>INSIGHT</span>
            <strong>核心洞察</strong>
          </div>
          <div className="competitive-insight-body">
            <p className="competitive-insight-lead">
              现有产品通常只解决其中一个环节：
            </p>
            <div className="competitive-insight-list">
              <span><b>Kafé</b>帮助理解咖啡</span>
              <span><b>BeanBook / 咖啡猎人</b>帮助专业记录</span>
              <span><b>小红书</b>帮助发现内容</span>
              <span><b>大众点评</b>帮助寻找门店</span>
              <span><b>星巴克</b>帮助完成品牌内交易</span>
              <span><b>DeepSeek</b>帮助回答问题</span>
            </div>
            <p className="competitive-insight-conclusion">
              而 BeanGo 的机会，是把这些分散能力连接起来：
              <strong>看懂 → 选择 → 探店 → 记录 → 形成个人口味 → 再获得更准确的推荐。</strong>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function UserFlow() {
  return (
    <section id="flow" className="experience-map-section section-pad">
      <div className="page-container">
        <SectionHeading
          index="05"
          eyebrow="USER EXPERIENCE MAP / 用户体验地图"
          title={
            <>
              从一次咖啡需求，
              <br />
              到逐渐认识自己的口味。
            </>
          }
          description="把真实 BeanGo 用户旅程放在同一张地图里：从发现需求、理解决策，到喝后记录与口味资产沉淀。"
        />
        <div className="experience-map-scroll">
          <Reveal className="experience-map-shell">
            <div className="experience-map-header">
              <div className="experience-map-corner">
                USER JOURNEY
                <small>BeanGo 全产品核心闭环</small>
              </div>
              {experienceMap.map((stage) => (
                <div className="experience-map-stage" key={stage.number}>
                  <span>{stage.number}</span>
                  <strong>{stage.title}</strong>
                  <small>{stage.stage}</small>
                </div>
              ))}
            </div>

            <div className="experience-map-row needs-row">
              <MapRowLabel label="用户需求" english="NEEDS" />
              {experienceMap.map((stage) => (
                <div className="experience-map-cell" key={stage.number}>
                  {stage.need}
                </div>
              ))}
            </div>

            <div className="experience-map-row stage-row">
              <MapRowLabel label="用户阶段" english="STAGE" />
              {experienceMap.map((stage, index) => (
                <div className="experience-map-stage-cell" key={stage.number}>
                  <span>{stage.stage}</span>
                  {index < experienceMap.length - 1 && <i aria-hidden="true" />}
                </div>
              ))}
            </div>

            <div className="experience-map-row behavior-row">
              <MapRowLabel label="用户行为" english="DOING" />
              <div className="experience-map-behavior-grid">
                {experienceMap.map((stage) => (
                  <div className="experience-map-behavior-cell" key={stage.number}>
                    {stage.behavior.map((item) => (
                      <div className="experience-map-behavior-node" key={item.title}>
                        <span>{item.icon}</span>
                        <strong>{item.title}</strong>
                        <small>{item.detail}</small>
                      </div>
                    ))}
                  </div>
                ))}
                <div className="experience-map-behavior-path" aria-hidden="true" />
              </div>
            </div>

            <div className="experience-map-row touch-row">
              <MapRowLabel label="接触点" english="TOUCH POINT" />
              {experienceMap.map((stage) => (
                <div className="experience-map-cell" key={stage.number}>
                  {stage.touchpoints}
                </div>
              ))}
            </div>

            <div className="experience-map-row feeling-row">
              <MapRowLabel label="情绪曲线" english="FEELING" />
              <div className="experience-map-feeling">
                <svg viewBox="0 0 1000 180" preserveAspectRatio="none" aria-label="用户情绪从疑虑走向认同的连续曲线">
                  <defs>
                    <linearGradient id="feeling-gradient" x1="0" x2="1">
                      <stop offset="0" stopColor="#b77e58" />
                      <stop offset="0.52" stopColor="#e47735" />
                      <stop offset="1" stopColor="#67a995" />
                    </linearGradient>
                  </defs>
                  <path className="feeling-area" d="M0 140 C120 90 140 152 250 115 S390 48 500 92 S630 150 730 80 S870 65 1000 35 V180 H0 Z" />
                  <path className="feeling-line" d="M0 140 C120 90 140 152 250 115 S390 48 500 92 S630 150 730 80 S870 65 1000 35" />
                </svg>
                {experienceMap.map((stage, index) => (
                  <div className={`feeling-note feeling-note-${index + 1}`} key={stage.number}>
                    <span>{index === 0 ? "疑虑" : index === 4 ? "认同" : "转折"}</span>
                    <p>“{stage.feeling}”</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="experience-map-row pain-row">
              <MapRowLabel label="痛点" english="PAIN POINT" />
              {experienceMap.map((stage) => (
                <div className="experience-map-cell" key={stage.number}>{stage.pain}</div>
              ))}
            </div>

            <div className="experience-map-row opportunity-row">
              <MapRowLabel label="机会点" english="OPPORTUNITY" />
              {experienceMap.map((stage) => (
                <div className="experience-map-cell" key={stage.number}>{stage.opportunity}</div>
              ))}
            </div>
          </Reveal>
        </div>
        <Reveal className="experience-map-loop">
          <BeanMark size={24} />
          <span>每一次饮用反馈，都会成为下一次推荐与画像更新的依据。</span>
          <ArrowRight size={18} />
        </Reveal>
      </div>
    </section>
  );
}

function MapRowLabel({ label, english }) {
  return (
    <div className="experience-map-row-label">
      <strong>{label}</strong>
      <span>{english}</span>
    </div>
  );
}

const featureHighlights = {
  home: ["搜索与识别", "AI 咨询", "快捷记录", "地图入口"],
  "taste-map": ["附近门店", "口味匹配", "风味筛选", "推荐理由"],
  "menu-scanner": ["菜单扫描", "豆袋识别", "取景提示", "OCR 识别"],
  community: ["内容流", "关注推荐", "主题标签", "发布分享"],
  profile: ["口味画像", "AI 总结", "探索数据", "个人归档"],
};

function FeatureOverviewNode({ feature, position, core = false }) {
  return (
    <Reveal
      className={`feature-overview-node feature-overview-node-${position}${core ? " is-core" : ""}`}
    >
      <div className="feature-overview-media">
        <PhoneMockup screen={feature.screen} priority={core} />
        <span>ORIGINAL UI / {feature.name.toUpperCase()}</span>
      </div>
      <div className="feature-overview-copy">
        <div className="feature-overview-meta">
          <span>{feature.number}</span>
          <small>{feature.name}</small>
        </div>
        <h3>{feature.chinese}</h3>
        <p>{feature.goal}</p>
        <div className="feature-overview-tags" aria-label={`${feature.name} 功能亮点`}>
          {featureHighlights[feature.id].map((highlight) => (
            <span key={highlight}>{highlight}</span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

function FeatureOverviewMap() {
  const [home, tasteMap, scanner, community, profile] = features;

  return (
    <div className="feature-overview-map" aria-label="BeanGo 五个关键页面功能关系图">
      <FeatureOverviewNode feature={tasteMap} position="top-left" />
      <FeatureOverviewNode feature={scanner} position="top-right" />
      <FeatureOverviewNode feature={home} position="center" core />
      <FeatureOverviewNode feature={community} position="bottom-left" />
      <FeatureOverviewNode feature={profile} position="bottom-right" />
      <div className="feature-overview-flow-label" aria-hidden="true">
        <span>DISCOVER</span>
        <i />
        <span>UNDERSTAND</span>
        <i />
        <span>REMEMBER</span>
      </div>
    </div>
  );
}

function FeatureCaseStudy() {
  return (
    <section id="features" className="features-section section-pad">
      <div className="page-container">
        <SectionHeading
          index="06"
          eyebrow="FEATURE CASE STUDY / 功能设计案例"
          title={
            <>
              五个关键界面，
              <br />
              <em>对应五种真实使用时刻。</em>
            </>
          }
          description="每个功能都从具体的用户问题出发，再通过界面、交互与信息层级给出回应。以下均为 BeanGo 原始界面设计稿。"
        />
        <Reveal className="feature-overview-lead">
          <span>KEY SCREENS OVERVIEW / 关键页面总览</span>
          <p>以首页为核心，把理解、探索、分享与沉淀串成一条可回看的咖啡体验路径。</p>
        </Reveal>
        <FeatureOverviewMap />
      </div>
    </section>
  );
}

function FinalShowcase() {
  const primaryScreens = [
    { image: uiScreens.home, label: "首页 / Home", className: "overview-collage-home" },
    { image: uiScreens.tasteMap, label: "地图探索 / Taste Map", className: "overview-collage-map" },
    { image: uiScreens.community, label: "社区分享 / Community", className: "overview-collage-community" },
    { image: uiScreens.profile, label: "个人中心 / Profile", className: "overview-collage-profile" },
    { image: uiScreens.login, label: "登录 / Welcome", className: "overview-collage-login" },
  ];
  const supportingScreens = [
    { image: locationPermission, label: "位置权限" },
    { image: navigationGuide, label: "导航引导" },
    { image: beanMenuUpdate, label: "更新当前豆单" },
    { image: noteDraft, label: "AI 生成草稿" },
    { image: publishSuccess, label: "发布成功" },
    { image: noteDetail, label: "笔记详情" },
    { image: storeDetail, label: "门店详情" },
    { image: tasteProfile, label: "口味画像" },
    { image: beanVault, label: "我的豆仓" },
    { image: coffeeRecord, label: "记录一杯咖啡" },
  ];

  return (
    <section id="showcase" className="showcase-section interface-overview-section section-pad">
      <div className="page-container">
        <div className="interface-overview-poster">
          <header className="interface-overview-header">
            <div>
              <span className="interface-overview-index">13 / FINAL SHOWCASE</span>
              <p className="interface-overview-eyebrow">INTERFACE OVERVIEW / 页面总览</p>
              <h2>
                页面总览
                <em>Interface Overview</em>
              </h2>
              <p className="interface-overview-summary">
                从探索、记录到分享与管理，构建完整的咖啡生活体验。
              </p>
            </div>
            <span className="interface-overview-mark">BEANGO<br />COFFEE COMPANION</span>
          </header>

          <div className="interface-overview-collage" aria-label="BeanGo 多手机页面总览">
            <div className="overview-collage-copy">
              <span>BEANGO · PRODUCT UI</span>
              <p>从发现一杯咖啡，到记录、分享与再次探索。</p>
            </div>
            {primaryScreens.map((screen, index) => (
              <OverviewPhone
                key={screen.label}
                image={screen.image}
                label={screen.label}
                index={index + 1}
                className={screen.className}
              />
            ))}
            {supportingScreens.map((screen, index) => (
              <OverviewPhone
                key={screen.label}
                image={{ src: screen.image, alt: `BeanGo ${screen.label}` }}
                label={screen.label}
                index={index + 1}
                compact
                showCaption={false}
                className={`overview-collage-support overview-collage-support-${index + 1}`}
              />
            ))}
            <span className="overview-collage-seal">EXPLORE<br />YOUR NEXT CUP</span>
          </div>

          <footer className="interface-overview-footer">
            <span>BEANGO · UX/UI CASE STUDY</span>
            <p>更多页面，串联更完整的咖啡体验。</p>
            <span>EXPLORE · RECORD · SHARE · GROW</span>
          </footer>
        </div>
      </div>
    </section>
  );
}

function OverviewPhone({ image, label, index, compact = false, className = "", showCaption = true }) {
  return (
    <figure className={`overview-phone ${compact ? "is-compact" : ""} ${className}`}>
      <div className="overview-phone-shell">
        <span className="overview-phone-island" aria-hidden="true" />
        <div className="overview-phone-screen">
          <img src={image.src} alt={image.alt ?? `BeanGo ${label}`} loading="lazy" />
        </div>
      </div>
      {showCaption && (
        <figcaption>
          <span>{String(index).padStart(2, "0")}</span>
          {label}
        </figcaption>
      )}
    </figure>
  );
}

function Footer() {
  return (
    <footer id="footer" className="footer-section">
      <div className="page-container">
        <div className="footer-top">
          <span>PROJECT CONCLUSION</span>
          <span>BEANGO · UX/UI CASE STUDY</span>
        </div>
        <h2>
          让下一杯咖啡，
          <br />
          <em>更有把握。</em>
        </h2>
        <p className="footer-summary">
          这是一个个人概念项目。设计假设、交互流程与界面需要在真实用户访谈和可用性测试中继续验证。
        </p>
        <a href="#top" className="back-top">
          回到顶部 <ArrowRight size={20} />
        </a>
        <div className="footer-bottom">
          <span>
            <img
              className="footer-brand-logo"
              src={uploadedLogo}
              alt="BeanGo 豆趣 Logo"
            />{" "}
            BeanGo 豆趣
          </span>
          <span>Personal concept project · 2026</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="beango-case-study">
      <a className="skip-link" href="#overview">
        跳转至主要内容
      </a>
      <main>
        <Hero />
        <ProjectOverview />
        <ProblemDefinition />
        <UXStrategy />
        <UserFlow />
        <EntryExperienceSection />
        <FeatureCaseStudy />
        <DesignSystemSection />
        <IconSystemSection />
        <MascotSection />
        <StickerSystemSection />
        <MicroStatesSection />
        <CampaignSection />
        <FinalShowcase />
      </main>
      <Footer />
    </div>
  );
}
