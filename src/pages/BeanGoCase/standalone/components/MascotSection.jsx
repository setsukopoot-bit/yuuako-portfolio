import React from "react";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";
import { beangoPng, mascotAssets } from "../data/extensionAssets.js";

const mascotRoleAssets = {
  twoD: beangoPng("mascot-2d-transparent.png"),
  threeD: beangoPng("mascot-3d-role-latest.png"),
};

export default function MascotSection() {
  return (
    <section
      id="mascot"
      className="extension-section mascot-section section-pad"
    >
      <div className="page-container">
        <SectionHeading
          index="09"
          eyebrow="MASCOT SYSTEM / IP 角色系统"
          title={
            <>
              咖小鸭是咖啡搭子，
              <br />
              <em>也是带路的探索者。</em>
            </>
          }
          description="角色不只是品牌装饰，而是进入引导、推荐、反馈和运营的情绪化接口。"
          light
        />
        <div className="mascot-role-grid">
          <Reveal className="mascot-role-card">
            <span>CHARACTER ROLE</span>
            <h3>
              咖啡搭子
              <br />+ 牛仔探索者
            </h3>
            <p>
              亲切、可靠、会推荐、愿意探索。咖小鸭让 AI
              有了可以被记住的表情和姿态。
            </p>
            <div className="mascot-role-tags">
              <b>陪伴</b>
              <b>推荐</b>
              <b>探索</b>
            </div>
          </Reveal>
          <Reveal className="mascot-duo-card" delay={100}>
            <div>
              <img src={mascotRoleAssets.twoD} alt="咖小鸭 2D 角色原图" />
              <span>2D / 轻量传播</span>
            </div>
            <div>
              <img src={mascotRoleAssets.threeD} alt="咖小鸭 3D 角色原图" />
              <span>3D / 空间主视觉</span>
            </div>
          </Reveal>
        </div>
        <div className="mascot-view-block">
          <div className="extension-subheading light-subheading">
            <span>CHARACTER STANDARD / 角色标准</span>
            <p>统一轮廓、服饰、比例与材质，保证角色在不同尺寸下仍然可识别。</p>
          </div>
          <Reveal className="mascot-three-view">
            <img
              src={mascotAssets.threeView}
              alt="咖小鸭 2D 与 3D 三视图原图"
            />
          </Reveal>
          <div className="mascot-reference-plates">
            <figure>
              <div className="mascot-reference-image">
                <img src={mascotAssets.twoDView} alt="咖小鸭 2D 三视图原图" />
              </div>
              <figcaption>2D / 比例与服饰标准</figcaption>
            </figure>
            <figure>
              <div className="mascot-reference-image">
                <img src={mascotAssets.lineView} alt="咖小鸭 三视图线稿原图" />
              </div>
              <figcaption>Line / 轮廓与结构检查</figcaption>
            </figure>
          </div>
          <div className="mascot-view-notes">
            <div>
              <span>2D STANDARD</span>
              <strong>先保证识别，再扩展情绪。</strong>
              <p>鸭嘴、牛仔帽、黄围巾与皮革配件构成最小识别单元。</p>
            </div>
            <div>
              <span>3D STANDARD</span>
              <strong>让角色拥有可持续的空间表现。</strong>
              <p>体积、材质和光照为动效、引导与活动视觉留下统一基础。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
