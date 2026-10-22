import React from "react";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";
import { campaignAssets } from "../data/extensionAssets.js";

function H5Panel({ src, title, label, className = "" }) {
  if (!src) return null;
  return (
    <Reveal className={`campaign-h5-panel ${className}`}>
      <div className="campaign-h5-panel-head">
        <span>{label}</span>
        <strong>{title}</strong>
      </div>
      <div className="campaign-h5-image-wrap">
        <img src={src} alt={`BeanGo ${title}`} />
      </div>
    </Reveal>
  );
}

function CampaignGroup({ label, title, children, className = "" }) {
  return (
    <section className={`campaign-h5-group ${className}`}>
      <div className="campaign-h5-group-heading">
        <span>{label}</span>
        <h3>{title}</h3>
      </div>
      <div className="campaign-h5-group-grid">{children}</div>
    </section>
  );
}

export default function CampaignSection() {
  const h5 = campaignAssets.h5;
  const newcomer = campaignAssets.newcomer;

  return (
    <section
      id="campaign"
      className="extension-section campaign-section section-pad"
    >
      <div className="page-container">
        <SectionHeading
          index="12"
          eyebrow="CAMPAIGN & H5 / 活动运营与社区增长"
          title={
            <>
              让一次咖啡命题，
              <br />
              <em>变成持续发生的社区参与。</em>
            </>
          }
          description="围绕“本周咖啡命题”设计了一套可持续运营的 H5 活动链路，从活动入口、主题参与、积分奖励到成功反馈与分享传播，强化社区互动与用户留存。"
          light
        />

        <Reveal className="campaign-banner-stage">
          <div className="campaign-banner-meta">
            <span>CAMPAIGN KEY VISUAL / 01</span>
            <strong>本周咖啡命题</strong>
          </div>
          <img src={h5.banner} alt="本周咖啡命题横版 Banner" />
        </Reveal>

        <div className="campaign-flow-line" aria-label="H5 活动运营链路">
          <span>入口</span><i>→</i><span>玩法说明</span><i>→</i>
          <span>参与发布</span><i>→</i><span>积分激励</span><i>→</i>
          <span>反馈分享</span>
        </div>

        <CampaignGroup
          label="A / CAMPAIGN INTRO"
          title="先让用户理解，为什么值得加入。"
          className="campaign-group-intro"
        >
          <H5Panel
            src={h5.why}
            title="为什么加入本周咖啡命题？"
            label="02 / WHY JOIN"
          />
          <H5Panel
            src={h5.topics}
            title="本周都聊什么？"
            label="03 / TOPICS"
          />
        </CampaignGroup>

        <CampaignGroup
          label="B / PARTICIPATION"
          title="从进入活动，到完成一次发布。"
          className="campaign-group-participation"
        >
          <H5Panel
            src={h5.overview}
            title="本周咖啡命题"
            label="04 / WEEKLY THEME"
            className="campaign-h5-panel-featured"
          />
          <H5Panel
            src={h5.howToJoin}
            title="如何参与？"
            label="05 / HOW TO JOIN"
          />
        </CampaignGroup>

        <CampaignGroup
          label="C / REWARD SYSTEM"
          title="让每一次发布，都有可继续的理由。"
          className="campaign-group-reward"
        >
          <H5Panel
            src={h5.points}
            title="咖啡豆积分有什么用？"
            label="06 / POINTS"
          />
          <H5Panel
            src={h5.rules}
            title="活动规则"
            label="07 / RULES"
          />
        </CampaignGroup>

        <CampaignGroup
          label="D / FEEDBACK & SHARE"
          title="用即时反馈，把参与继续传出去。"
          className="campaign-group-feedback"
        >
          <H5Panel
            src={h5.featuredPopup}
            title="本周精选活动"
            label="08 / FEATURED POPUP"
            className="campaign-h5-panel-support"
          />
          <H5Panel
            src={h5.publishSuccess}
            title="恭喜你 / 发布成功"
            label="09 / SUCCESS FEEDBACK"
            className="campaign-h5-panel-support"
          />
          <H5Panel
            src={h5.share}
            title="分享给好友"
            label="10 / SHARE TO FRIENDS"
            className="campaign-h5-panel-support"
          />
        </CampaignGroup>

        <Reveal className="campaign-system-note">
          <span>PRODUCT × COMMUNITY × GROWTH</span>
          <p>活动入口、内容发布、积分奖励、即时反馈与分享传播，组成 BeanGo 可持续运营的完整闭环。</p>
        </Reveal>

        <div className="campaign-case campaign-case-newcomer">
          <Reveal className="campaign-case-heading">
            <span>CAMPAIGN CASE 02 / NEWCOMER BENEFITS</span>
            <h2>新人注册送好礼</h2>
            <p>以注册、口味测试与邀请好友为入口，把新用户带入 BeanGo 的第一段咖啡旅程。</p>
          </Reveal>

          <Reveal className="campaign-banner-stage">
            <div className="campaign-banner-meta">
              <span>CAMPAIGN KEY VISUAL / 02</span>
              <strong>新人注册送好礼</strong>
            </div>
            <img src={newcomer.banner} alt="新人注册送好礼横版 Banner" />
          </Reveal>

          <div className="campaign-flow-line" aria-label="新人注册送好礼活动链路">
            <span>活动入口</span><i>→</i><span>注册参与</span><i>→</i>
            <span>领取礼包</span><i>→</i><span>邀请奖励</span><i>→</i>
            <span>活动规则</span>
          </div>

          <CampaignGroup
            label="A / WELCOME & VALUE"
            title="先回答用户：为什么选择 BeanGo。"
            className="campaign-group-newcomer-intro"
          >
            <H5Panel
              src={newcomer.why}
              title="为什么选择 BeanGo"
              label="01 / WHY BEANGO"
              className="campaign-h5-panel-featured"
            />
            <H5Panel
              src={newcomer.overview}
              title="新人注册送好礼"
              label="02 / CAMPAIGN OVERVIEW"
            />
          </CampaignGroup>

          <CampaignGroup
            label="B / ONBOARDING"
            title="用四步完成注册，并领取第一份专属礼遇。"
            className="campaign-group-newcomer-participation"
          >
            <H5Panel
              src={newcomer.howToJoin}
              title="如何参与活动"
              label="03 / HOW TO JOIN"
              className="campaign-h5-panel-featured"
            />
            <H5Panel
              src={newcomer.rewards}
              title="新人专属礼包 / 奖励说明"
              label="04 / REWARD SYSTEM"
            />
          </CampaignGroup>

          <CampaignGroup
            label="C / REFERRAL & RULES"
            title="让新用户留下来，也让邀请自然发生。"
            className="campaign-group-newcomer-reward"
          >
            <H5Panel
              src={newcomer.shareRewards}
              title="分享好友 / 邀请奖励"
              label="05 / INVITE REWARDS"
              className="campaign-h5-panel-featured"
            />
            <H5Panel
              src={newcomer.rules}
              title="活动规则"
              label="06 / RULES"
            />
          </CampaignGroup>

          <CampaignGroup
            label="D / FEEDBACK & SHARE"
            title="用即时反馈把奖励与传播闭环。"
            className="campaign-group-newcomer-feedback"
          >
            <H5Panel
              src={newcomer.benefitsPopup}
              title="新人福利弹窗"
              label="07 / BENEFITS POPUP"
              className="campaign-h5-panel-support"
            />
            <H5Panel
              src={newcomer.rewardSuccess}
              title="奖励成功弹窗"
              label="08 / REWARD SUCCESS"
              className="campaign-h5-panel-support"
            />
            <H5Panel
              src={newcomer.noReward}
              title="未获得奖励提示"
              label="09 / NO REWARD"
              className="campaign-h5-panel-support"
            />
            <H5Panel
              src={newcomer.sharePopup}
              title="分享好友弹窗"
              label="10 / SHARE POPUP"
              className="campaign-h5-panel-support"
            />
          </CampaignGroup>

          <Reveal className="campaign-system-note">
            <span>PRODUCT × COMMUNITY × GROWTH</span>
            <p>注册礼遇、首次体验、邀请奖励与规则反馈，组成 BeanGo 面向新用户的完整增长链路。</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
