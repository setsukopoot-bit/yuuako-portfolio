import { b2bAssets } from './data/b2bAssets'
import { navItems } from './data/b2bCaseStudy'
import { Bilingual, SectionHeading, SectionTitle, StaticSurface } from './components/CasePrimitives'
import {
  DataManagementPatterns,
  DataVisualizationSystem,
  DesignSystemContent,
  FinalShowcase,
  GridLayoutReference,
  InformationArchitecture,
  JourneyFlows,
  RolePermissionMatrix,
  StateDesign,
  WorkflowMapping,
} from './components/CaseSystems'
import './B2BCaseStudy.css'

function SideNavigation() {
  return (
    <aside className="toc">
      <a className="brand" href="#b2b-top" aria-label="返回 BeanGo Admin 顶部">
        <span className="brand-mark brand-mark--image"><img src={b2bAssets.logo} alt="BeanGo logo" /></span>
        <span>BeanGo<br /><em>Admin case study</em></span>
      </a>
      <nav aria-label="B端案例章节">
        <a href="#s01"><span>01</span><SectionTitle title="Hero" /></a>
        {navItems.map((label, index) => <a href={`#s${String(index + 2).padStart(2, '0')}`} key={label}><span>{String(index + 2).padStart(2, '0')}</span><SectionTitle title={label} /></a>)}
      </nav>
      <div className="toc-note">Portfolio case study<br />BeanGo Admin · 2026</div>
    </aside>
  )
}

function HeroSection() {
  return (
    <section className="hero section-pad" id="s01">
      <div className="hero-copy">
        <p className="eyebrow accent">BEANGO · ENTERPRISE DESIGN</p>
        <h1 className="hero-title"><span className="hero-title-brand">BeanGo Admin <em>后台管理系统</em></span><span className="hero-title-sub">Enterprise Admin Workbench <i>/</i> 企业后台工作台</span></h1>
        <p className="hero-lede">面向咖啡业务运营、AI 审核、门店管理和系统治理的一体化后台工作台。</p>
        <div className="hero-meta"><span>Role-based Operations</span><span>RBAC System</span><span>Approval Workflow</span><span>AI Quality Governance</span></div>
      </div>
      <div className="hero-right">
        <div className="hero-side"><div className="hero-index">01—14</div><div className="hero-project"><strong>BeanGo Admin</strong><span><Bilingual zh="企业级 UX/UI 案例" en="Enterprise UX/UI Case Study" /></span></div><div className="hero-line" /><dl className="hero-facts"><div><dt><Bilingual zh="范围" en="Scope" /></dt><dd>Role-based operations</dd></div><div><dt><Bilingual zh="系统" en="System" /></dt><dd>RBAC / Approval / Audit</dd></div><div><dt><Bilingual zh="年份" en="Year" /></dt><dd>2026 · <code>/workbench</code></dd></div></dl></div>
        <div className="hero-live-surface" aria-label="BeanGo Admin Workbench static showcase"><div className="hero-laptop-shell"><div className="hero-laptop-screen"><span className="hero-laptop-camera" /><img src={b2bAssets.screens.workbench} alt="BeanGo Admin Workbench complete static showcase" /></div><div className="hero-laptop-base"><span /></div></div></div>
      </div>
    </section>
  )
}

function WorkbenchSection() {
  const annotations = [['01', 'KPI 优先级', 'KPI Priority', '先回答“现在发生了什么”'], ['02', '今日待办', 'Today’s Todos', '把待处理事项放在决策路径上'], ['03', '快捷操作', 'Quick Actions', '将高频动作缩短为一步入口'], ['04', '数据范围', 'Data Scope', '明确 all / assigned / masked / aggregate'], ['05', '角色切换器', 'Role Switcher', '让角色上下文可见'], ['06', '数据图表', 'Charts', '用趋势、分布、漏斗支持判断']] as const
  const crops = [['workbench-kpi', 'KPI 优先级', 'KPI Priority'], ['workbench-todos', '今日待办', 'Today’s Todos'], ['workbench-role', '角色切换器', 'Role Switcher'], ['workbench-dashboard', '数据看板', 'Dashboard']] as const
  return <section className="band band-sand" id="s08"><div className="section-pad"><SectionHeading number="08" title="Workbench Design" intro="第一个核心设计案例：同一套后台骨架，按角色变成不同的决策界面。" /><div className="case-grid"><div><StaticSurface route="/workbench" /></div><div className="annotation-panel"><span className="label"><Bilingual zh="标注 · 工作台" en="Annotation · Workbench" /></span>{annotations.map(([number, zh, en, detail]) => <div className="annotation" key={number}><span>{number}</span><div><strong><Bilingual zh={zh} en={en} /></strong><p>{detail}</p></div></div>)}</div></div><div className="zoom-row"><div className="zoom-label"><span className="label"><Bilingual zh="局部放大" en="Detail View" /></span><strong>工作台不是 KPI 墙，而是下一步行动的编排。</strong><p>指标、待办、快捷操作和数据范围被放在同一个首屏上下文里。</p></div><div className="zoom-crops">{crops.map(([screen, zh, en]) => <figure className="zoom-crop" key={screen}><img src={b2bAssets.screens[screen]} alt={`${zh} · BeanGo Admin Workbench real capture`} loading="lazy" /><figcaption><Bilingual zh={zh} en={en} /></figcaption></figure>)}</div></div></div></section>
}

function AIQualitySection() {
  const steps = [['01', 'AI 识别', 'AI Recognition', '模型生成候选结果'], ['02', '低置信度', 'Low Confidence', '进入待复核队列'], ['03', '人工复核', 'Human Review', '确认 / 修正 / 补充上下文'], ['04', '知识库', 'Knowledge Base', '修正结果进入知识回流']] as const
  const evidence = [['模型数据', 'Model Data', '置信度 / 候选识别 / 待复核状态'], ['人工判断', 'Human Judgment', '修正结果 / 复核理由 / 责任人'], ['用户反馈', 'User Feedback', '将识别偏差转化为质量线索'], ['知识回流', 'Knowledge Loop', '标记为知识 / 更新知识库']] as const
  return <section className="section-pad" id="s09"><SectionHeading number="09" title="AI Quality Workflow" intro="第二个核心设计案例：把模型输出变成可复核、可修正、可回流的质量闭环。" /><div className="workflow-track">{steps.map(([number, zh, en, detail], index) => <div key={number} className="workflow-node-wrap"><div className="workflow-node"><span>{number}</span><strong><Bilingual zh={zh} en={en} /></strong><p>{detail}</p></div>{index < steps.length - 1 && <i className="arrow">→</i>}</div>)}</div><div className="ai-grid"><div><StaticSurface route="/ai/vision" /></div><div className="ai-evidence"><span className="label"><Bilingual zh="模型 · 人工 · 知识" en="Model ↔ Human ↔ Knowledge" /></span>{evidence.map(([zh, en, detail]) => <div className="evidence-card" key={zh}><b><Bilingual zh={zh} en={en} /></b><span>{detail}</span></div>)}</div></div></section>
}

function RiskGovernanceSection() {
  const steps = [['01', '高风险操作', 'High-risk Action', '触发动作'], ['02', '影响范围预览', 'Impact Preview', 'impact drawer'], ['03', '发起审批', 'Request Approval', 'requester'], ['04', '审批 / 驳回', 'Approve / Reject', 'approval'], ['05', '执行', 'Execute', 'state change'], ['06', '审计日志', 'Audit Log', 'before / after']] as const
  return <section className="band band-dark" id="s10"><div className="section-pad"><SectionHeading number="10" title="Risk Governance" intro="第三个核心设计案例：高风险动作被拆成可预览、可审批、可执行、可追溯的状态链。" /><div className="risk-flow">{steps.map(([number, zh, en, detail]) => <div className="risk-node" key={number}><span>{number}</span><strong><Bilingual zh={zh} en={en} /></strong><small>{detail}</small></div>)}</div><div className="governance-grid"><div><StaticSurface route="/approvals" /></div><div className="audit-proof"><span className="label"><Bilingual zh="可追溯性" en="Traceability" /></span><h3>每一次改变，都留下可解释的上下文。</h3><div className="audit-lines"><p><span>Who</span> actor / requester / approver</p><p><span>What</span> action / before / after</p><p><span>Why</span> reason / impact scope</p><p><span>When</span> status / timestamp</p></div><div className="audit-capture"><StaticSurface route="/system/audit" compact /></div><a href="#s12" className="text-link">See data patterns →</a></div></div></div></section>
}

function B2BCaseStudy() {
  return (
    <div className="b2b-dashboard-case">
      <div className="site-shell">
        <SideNavigation />
        <main id="b2b-top">
          <header className="topbar"><div className="eyebrow">B-END / ENTERPRISE UX &amp; UI</div><div className="topbar-right"><span className="status-pill"><i /> Portfolio case</span><span>2026 · v1.0</span></div></header>
          <HeroSection />
          <section className="section-pad section-overview" id="s02"><div className="overview-note"><span className="label"><Bilingual zh="项目定位" en="Project Positioning" /></span><p>BeanGo Admin 是 BeanGo / 豆趣的内部运营与治理后台，围绕用户、咖啡内容、AI 识别、门店、社区、增长与系统安全建立统一工作台。</p></div><div className="overview-facts"><div><span><Bilingual zh="服务对象" en="Audience" /></span><strong>9 个运营 / 管理角色</strong></div><div><span><Bilingual zh="设计范围" en="Design Scope" /></span><strong>工作台 · CRUD · 审批 · 审计</strong></div><div><span><Bilingual zh="真实入口" en="Source Route" /></span><strong>/workbench</strong></div></div></section>
          <section className="band band-dark" id="s03"><div className="section-pad"><SectionHeading number="03" title="Business Complexity" intro="复杂度不在页面数量，而在角色、领域、模块与数据范围同时变化。" /><div className="complexity-equation"><div className="equation-cell"><b>09</b><span><Bilingual zh="角色" en="Roles" /></span><small>角色工作台</small></div><div className="equation-op">×</div><div className="equation-cell"><b>08</b><span><Bilingual zh="业务领域" en="Business Domains" /></span><small>业务领域</small></div><div className="equation-op">×</div><div className="equation-cell"><b>24</b><span><Bilingual zh="功能模块" en="Modules" /></span><small>功能模块</small></div><div className="equation-op">×</div><div className="equation-cell"><b>≠</b><span><Bilingual zh="相同数据范围" en="Same Data Scope" /></span><small>数据范围不同</small></div></div><div className="complexity-foot"><span>一个后台</span><strong>不是一套导航</strong><span>而是一套动态可见性系统</span></div></div></section>
          <section className="section-pad" id="s04"><SectionHeading number="04" title="Business Workflow Mapping" intro="从门店资料到知识回流，跨模块业务由数据、角色和治理层共同完成。" /><WorkflowMapping /></section>
          <section className="section-pad" id="s05"><SectionHeading number="05" title="User Roles & RBAC" intro="角色不是一条简单层级，而是工作台、数据范围和动作权限的组合。" /><RolePermissionMatrix /></section>
          <section className="section-pad" id="s06"><SectionHeading number="06" title="Information Architecture" intro="不是把页面堆在一起，而是把不同角色的导航切片收束到同一套后台骨架。" /><InformationArchitecture /></section>
          <section className="band band-sand" id="s07"><div className="section-pad"><SectionHeading number="07" title="Core User Journey" intro="把角色目标拆成可观察、可审批、可回流的任务路径。" /><JourneyFlows /></div></section>
          <WorkbenchSection />
          <AIQualitySection />
          <RiskGovernanceSection />
          <section className="band band-sand" id="s11"><div className="section-pad"><SectionHeading number="11" title="System State Design" intro="B 端界面的关键不是只有数据，还包括每个状态下用户是否能继续、修正或回退。" /><StateDesign /></div></section>
          <section className="section-pad" id="s12"><SectionHeading number="12" title="Component System" intro="现有后台的视觉语言被当作案例素材，而不是另起一套品牌系统。" /><DataManagementPatterns /><DesignSystemContent /><DataVisualizationSystem /><GridLayoutReference /></section>
          <section className="section-pad" id="s13"><SectionHeading number="13" title="Final Interface Showcase" intro="精选 6 个核心界面，解释真实后台如何承载决策、治理与数据操作。" /><FinalShowcase /></section>
          <section className="band band-dark" id="s14"><div className="section-pad"><SectionHeading number="14" title="Reflection & Boundary" intro="案例只陈述已经存在的系统能力，也明确哪些内容仍需真实环境验证。" /><div className="boundary-grid"><div><span className="boundary-index">01</span><h3><Bilingual zh="已实现内容" en="Implemented Scope" /></h3><p>9 角色工作台、24 模块路由、RBAC 权限、通用数据管理、核心工作流、审批与审计日志均来自现有代码。</p></div><div><span className="boundary-index">02</span><h3><Bilingual zh="Mock / Demo 边界" en="Mock / Demo Boundary" /></h3><p>当前本地仓库使用 Mock Repository、localStorage 与 demo 账号。界面中的数字仅用于展示状态，不代表真实业务 KPI。</p></div><div><span className="boundary-index">03</span><h3><Bilingual zh="尚需验证" en="Still to Validate" /></h3><p>真实 API 接入、跨角色可用性、生产数据量下的性能、实际用户验证与业务结果，均不在本案例的事实范围内。</p></div></div><div className="closing-line"><span>BeanGo Admin</span><strong>Complexity, made legible.</strong><span>Portfolio case study · v1.0</span></div></div></section>
          <footer className="footer section-pad"><span>BeanGo Admin B-End UX/UI Designer Portfolio Case Study</span><span>Integrated into Yuxin Portfolio · No external prototype dependency</span></footer>
        </main>
      </div>
    </div>
  )
}

export default B2BCaseStudy
