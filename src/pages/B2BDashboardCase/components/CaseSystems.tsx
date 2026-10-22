import { useState } from 'react'
import { b2bAssets } from '../data/b2bAssets'
import {
  chartCategories,
  domainEnglish,
  domains,
  journeys,
  permissionChinese,
  permissions,
  roleEnglish,
  roleMatrix,
  roles,
  showcasePrimary,
  surfaces,
  workflowNodes,
} from '../data/b2bCaseStudy'
import { Bilingual, ChartGlyph, StaticSurface } from './CasePrimitives'

export function WorkflowMapping() {
  const evidence = [
    ['/stores', '门店录入', 'Store Input'],
    ['/ai/vision', 'AI 结构化', 'AI Structure'],
    ['/approvals', '审批节点', 'Approval Gate'],
  ] as const

  return (
    <div className="workflow-map">
      <div className="workflow-map-intro">
        <span className="label"><Bilingual zh="系统地图 · 跨模块运营模型" en="System Map · Cross-module Operating Model" className="bilingual-label" /></span>
        <p>同一条业务链由不同角色、模块和控制层共同完成；流程节点对应真实后台入口，连线表达数据和责任的移动。</p>
      </div>
      <div className="workflow-layer workflow-layer--business">
        <div className="workflow-layer-title"><span><Bilingual zh="业务数据层" en="Business Data Layer" /></span><small>业务数据从门店资料进入系统，再回到知识与策略。</small></div>
        <div className="workflow-chain">
          {workflowNodes.map(([number, title, route, role, tone, english]) => (
            <div className={`flow-node flow-node--${tone}`} key={number}>
              <span>{number}</span><strong><Bilingual zh={title} en={english} /></strong><code>{route}</code><small>{role}</small>
            </div>
          ))}
        </div>
      </div>
      <div className="workflow-layers">
        <div className="workflow-lane"><span className="workflow-lane-label"><Bilingual zh="治理层" en="Governance Layer" /></span><div><b><Bilingual zh="权限" en="Permission" /></b><i>→</i><b><Bilingual zh="审批" en="Approval" /></b><i>→</i><b><Bilingual zh="审计日志" en="Audit Log" /></b><small>/system/roles · /approvals · /system/audit</small></div></div>
        <div className="workflow-lane"><span className="workflow-lane-label"><Bilingual zh="反馈层" en="Feedback Layer" /></span><div><b><Bilingual zh="用户反馈" en="Feedback" /></b><i>→</i><b><Bilingual zh="数据分析" en="Analytics" /></b><i>→</i><b><Bilingual zh="知识 / 策略" en="Knowledge / Strategy" /></b><small>/operations/feedback · /analytics · /ai/knowledge</small></div></div>
      </div>
      <div className="workflow-evidence">
        <span className="label"><Bilingual zh="界面证据 · 真实页面" en="UI Evidence · Real Surfaces" className="bilingual-label" /></span>
        <div>{evidence.map(([route, zh, en]) => <figure key={route}><div><StaticSurface route={route} compact showStatus={false} /></div><figcaption><Bilingual zh={zh} en={en} /><code>{route}</code></figcaption></figure>)}</div>
      </div>
    </div>
  )
}

export function RolePermissionMatrix() {
  const scopeByRole: Record<string, string> = { P09: 'system-only', P03: 'assigned', P04: 'content-only', P06: 'masked', P07: 'aggregate', P08: 'aggregate' }
  return (
    <>
      <div className="ia-layout">
        <div className="role-grid">
          {roles.map(([id, name, focus]) => <div className="role-card" key={id}><span className="role-id">{id}</span><strong><Bilingual zh={name} en={roleEnglish[id]} /></strong><small>{focus}</small><div className="role-scope">{scopeByRole[id] ?? 'all'}</div></div>)}
        </div>
        <div className="domain-stack">
          <span className="label"><Bilingual zh="8 个业务领域" en="8 Business Domains" /></span>
          {domains.map((domain, index) => <div className="domain-row" key={domain}><span>0{index + 1}</span><strong><Bilingual zh={domain} en={domainEnglish[index]} /></strong><i /></div>)}
        </div>
      </div>
      <div className="permission-strip"><span className="label"><Bilingual zh="动作层" en="Action Layer" /></span>{permissions.map((permission) => <span className="permission" key={permission}><Bilingual zh={permissionChinese[permission]} en={permission} /></span>)}</div>
      <div className="rbac-layout">
        <div className="role-rail"><span className="label"><Bilingual zh="角色索引" en="Role Index" /></span>{roleMatrix.map(([id, name, , , , , , , scope]) => <div className="role-rail-item" key={id}><b>{id}</b><span>{name}</span><small>{roleEnglish[id]} · {scope}</small></div>)}</div>
        <div className="rbac-table-wrap">
          <table className="rbac-table">
            <thead><tr><th><Bilingual zh="角色" en="Role" /></th><th><Bilingual zh="工作台" en="Dashboard" /></th><th><Bilingual zh="门店" en="Store" /></th><th><Bilingual zh="AI 复核" en="AI Review" /></th><th><Bilingual zh="发布" en="Publish" /></th><th><Bilingual zh="审批" en="Approval" /></th><th><Bilingual zh="审计" en="Audit" /></th><th><Bilingual zh="数据范围" en="Data Scope" /></th></tr></thead>
            <tbody>{roleMatrix.map(([id, name, dashboard, store, ai, publish, approval, audit, scope]) => <tr key={id}><th><b>{id}</b><span>{name}</span></th><td>{dashboard}</td><td>{store}</td><td>{ai}</td><td>{publish}</td><td>{approval}</td><td>{audit}</td><td><code>{scope}</code></td></tr>)}</tbody>
          </table>
        </div>
      </div>
      <div className="callout"><span className="callout-icon">↳</span><div><strong><Bilingual zh="职责分离" en="Separation of Duties" /></strong><p>系统管理员 / 安全审计角色拥有系统安全与审计职责；审批流程保留“发起人不可自审”的约束，形成风险动作的职责分离。</p></div></div>
    </>
  )
}

export function InformationArchitecture() {
  const navLabels: Record<string, [string, string]> = { Knowledge: ['知识库', 'Knowledge'], Stores: ['门店', 'Stores'], Menus: ['豆单', 'Menus'], 'Taste Map': ['口味地图', 'Taste Map'], 'AI Vision': ['AI 视觉', 'AI Vision'], 'AI Assistant': ['AI 助手', 'AI Assistant'], Evaluation: ['评估', 'Evaluation'], Settings: ['设置', 'Settings'], Roles: ['角色', 'Roles'], Audit: ['审计', 'Audit'], 'Security Alerts': ['安全告警', 'Security Alerts'] }
  const slices = [
    ['P05', '门店与咖啡运营', 'Store & Coffee Operations', ['Knowledge', 'Stores', 'Menus', 'Taste Map']],
    ['P06', 'AI / 知识库运营', 'AI / Knowledge Operations', ['AI Vision', 'AI Assistant', 'Knowledge', 'Evaluation']],
    ['P09', '系统安全审计', 'System Security & Audit', ['Settings', 'Roles', 'Audit', 'Security Alerts']],
  ] as const
  const groups = [
    ['数据与洞察', 'Data & Insights', '概览 · 分析', 'Overview · Analytics'], ['用户与个性化', 'Users & Personalization', '用户 · 口味画像', 'Users · Taste Profiles'], ['AI 与知识', 'AI & Knowledge', 'AI 视觉 · AI 助手 · 知识库', 'AI Vision · AI Assistant · Knowledge'], ['门店与消费', 'Store & Consumption', '门店 · 豆单 · 口味地图 · 咖啡记录', 'Stores · Menus · Taste Map · Coffee Records'], ['社区与治理', 'Community & Governance', '内容 · 评论 · 举报 · 标签', 'Content · Comments · Reports · Tags'], ['增长与运营', 'Growth & Operations', '推荐 · 搜索 · 活动 · 客服', 'Recommendation · Search · Campaigns · Support'], ['系统与安全', 'System & Security', '设置 · 管理员 · 角色 · 审计', 'Settings · Admins · Roles · Audit'],
  ] as const
  return (
    <div className="ia-evolution">
      <div className="ia-before">
        <div className="ia-column-heading"><span className="label"><Bilingual zh="之前 · 角色导航切片" en="Before · Role-specific Navigation" /></span><p><span className="bilingual-paragraph-cn">不同角色从不同导航切片进入同一个运营世界。</span><span className="bilingual-paragraph-en">Different roles entered the same operational universe through different navigation slices.</span></p></div>
        <div className="ia-slices">{slices.map(([id, title, english, items]) => <div className="ia-slice" key={id}><div><b>{id}</b><strong><Bilingual zh={title} en={english} /></strong></div>{items.map((item) => <span key={item}><Bilingual zh={navLabels[item][0]} en={navLabels[item][1]} /></span>)}</div>)}</div>
      </div>
      <div className="ia-bridge"><span><Bilingual zh="角色可见性" en="Role Visibility" /></span><b>→</b><small>shared shell<br />different scope</small></div>
      <div className="ia-after">
        <div className="ia-column-heading"><span className="label"><Bilingual zh="之后 · 统一后台结构" en="After · Unified Back-office Structure" /></span><p>一个共享骨架，承载不同角色的可见性和数据范围。</p></div>
        <div className="ia-groups">{groups.map(([zh, en, itemsZh, itemsEn], index) => <div className="ia-group" key={zh}><span>0{index + 1}</span><div><b><Bilingual zh={zh} en={en} /></b><small>{itemsZh}<br /><em>{itemsEn}</em></small></div></div>)}</div>
      </div>
    </div>
  )
}

export function JourneyFlows() {
  const stepNames: Record<string, [string, string]> = { Workbench: ['工作台', 'Workbench'], Stores: ['门店', 'Stores'], Menus: ['豆单', 'Menus'], 'AI Vision': ['AI 视觉', 'AI Vision'], Review: ['复核', 'Review'], Approval: ['审批', 'Approval'], 'Confidence Check': ['置信度检查', 'Confidence Check'], Correction: ['人工修正', 'Correction'], 'Knowledge Base': ['知识库', 'Knowledge Base'], Roles: ['角色', 'Roles'], Permission: ['权限', 'Permission'], Audit: ['审计', 'Audit'] }
  return <div className="journey-grid">{journeys.map(([id, title, english, role, goal, trigger, outcome, steps]) => <article className="journey-card" key={id}><div className="journey-head"><span>{id}</span><div><strong><Bilingual zh={title} en={english} /></strong><small>{role}</small></div></div><div className="journey-context"><div><span><Bilingual zh="目标" en="Goal" /></span><b>{goal}</b></div><div><span><Bilingual zh="触发" en="Trigger" /></span><b>{trigger}</b></div></div><div className="journey-timeline">{steps.map(([label, route], index) => <div className="journey-step" key={`${label}-${route}`}><i>{String(index + 1).padStart(2, '0')}</i><div><b><Bilingual zh={stepNames[label][0]} en={stepNames[label][1]} /></b><code>{route}</code></div></div>)}</div><div className="journey-outcome"><span><Bilingual zh="系统反馈" en="System Feedback" /></span><b>{outcome}</b></div></article>)}</div>
}

export function StateDesign() {
  const aiStates = [['待复核', 'Needs Review'], ['需修正', 'Needs Correction'], ['已修正', 'Corrected'], ['识别成功', 'Recognized']] as const
  const contentStates = [['草稿', 'Draft'], ['审核中', 'Reviewing'], ['已批准', 'Approved'], ['已发布', 'Published']] as const
  const stateImages = [
    ['component-toast', '操作反馈', 'Toast · Action Feedback'], ['component-empty', '筛选无结果', 'Empty · Filtered Result'], ['component-skeleton', '加载骨架', 'Skeleton · Loading'], ['component-modal', '新建 / 编辑', 'Modal · Create / Edit'], ['component-drawer', '详情上下文', 'Drawer · Detail Context'],
  ] as const
  const StateTrack = ({ items }: { items: readonly (readonly [string, string])[] }) => <div className="state-track">{items.map(([zh, en], index) => <div className="state-step" key={zh}><i className={`state-dot state-dot--${index + 1}`} /><b><Bilingual zh={zh} en={en} /></b>{index < items.length - 1 && <span>→</span>}</div>)}</div>
  return <div className="state-design"><div className="state-flow-grid"><div className="state-flow-card"><span className="label"><Bilingual zh="AI 质量" en="AI Quality" /></span><StateTrack items={aiStates} /><small>/ai/vision · confidence / feedback / correction</small></div><div className="state-flow-card"><span className="label"><Bilingual zh="内容治理" en="Content Governance" /></span><StateTrack items={contentStates} /><small>/community/content · /approvals · /system/audit</small></div><div className="state-flow-card state-flow-card--risk"><span className="label"><Bilingual zh="组件状态" en="Component States" /></span><div className="status-palette">{[['normal', '正常', 'Normal'], ['warning', '警告', 'Warning'], ['error', '错误', 'Error'], ['empty', '空状态', 'Empty'], ['loading', '加载中', 'Loading'], ['success', '成功', 'Success']].map(([kind, zh, en]) => <span className={`status-demo status-demo--${kind}`} key={kind}><Bilingual zh={zh} en={en} /></span>)}</div><small>状态决定用户是否继续、修正、回退或获得反馈。</small></div></div><div className="state-evidence"><div><span className="label"><Bilingual zh="真实界面状态" en="Real UI States" /></span><p>状态不是装饰，它决定用户能否继续操作、是否需要审批，以及反馈如何回到系统。</p></div><div className="state-evidence-grid">{stateImages.map(([screen, zh, en]) => <figure key={screen}><img src={b2bAssets.screens[screen]} alt={`BeanGo Admin ${zh}`} loading="lazy" /><figcaption><Bilingual zh={zh} en={en} /></figcaption></figure>)}</div></div></div>
}

export function DataManagementPatterns() {
  const tabs = surfaces.filter((surface) => ['users', 'stores', 'campaigns'].includes(surface.screen))
  const [activeRoute, setActiveRoute] = useState(tabs[0].route)
  const notes = [['检索 / 筛选 / 排序', 'Search / Filter / Sort', '列表检索、条件筛选、排序与分页'], ['表格 / 状态标签', 'Table / Status Tag', '状态标签、选中、批量动作'], ['抽屉 / 弹窗 / Toast', 'Drawer / Modal / Toast', '详情、编辑、审批反馈'], ['空态 / 错误 / 加载', 'Empty / Error / Loading', '空态、错误态、Skeleton']] as const
  return <div className="subsection-block"><div className="subsection-heading"><span className="label"><Bilingual zh="数据管理模式" en="Data Management Patterns" /></span><strong>同一套列表模式，让不同业务模块保持可预期。</strong></div><div className="pattern-tabs" role="tablist" aria-label="数据管理页面"><>{tabs.map((surface) => <button type="button" role="tab" aria-selected={activeRoute === surface.route} className={`pattern-tab${activeRoute === surface.route ? ' is-active' : ''}`} onClick={() => setActiveRoute(surface.route)} key={surface.route}><Bilingual zh={surface.labelZh} en={surface.label} /></button>)}</></div><div className="pattern-stage"><div id="pattern-frame"><StaticSurface route={activeRoute} /></div><div className="pattern-notes"><span className="label"><Bilingual zh="已观察到的模式" en="Observed Patterns" /></span>{notes.map(([zh, en, detail]) => <div className="pattern-note" key={zh}><b><Bilingual zh={zh} en={en} /></b><span>{detail}</span></div>)}</div></div></div>
}

export function DesignSystemContent() {
  const swatches = [['#E47735', 'Go 橙', 'Go Orange'], ['#F4B942', '晨光黄', 'Morning Sun'], ['#F7EBD7', '燕麦米', 'Oat Cream'], ['#3B2418', '浓缩咖啡', 'Espresso'], ['#67C9B5', 'AI 薄荷', 'AI Mint'], ['#D96C8A', '莓果粉', 'Berry Note']] as const
  const rules = [['间距', 'Spacing', '4px base · 24px page padding'], ['控件', 'Controls', '28 / 32 / 36px height'], ['圆角', 'Radius', '2 / 4 / 6 / 8 / 12px'], ['字体', 'Typography', 'PingFang / Microsoft YaHei · DIN / Roboto Mono'], ['组件', 'Components', 'Table · Button · Input · Select · Tag · Tabs · Modal · Drawer · Toast · Skeleton · Empty · Error'], ['交互', 'Interaction', 'Focus trap · restore focus · responsive · accessibility']] as const
  const stack = [['component-modal', '弹窗', 'Modal', 'Button · Input · Select'], ['component-drawer', '抽屉', 'Drawer', 'Detail · Edit context'], ['component-toast', '操作提示', 'Toast', 'Action feedback'], ['component-empty', '空状态', 'Empty', 'Filtered no-result state'], ['component-skeleton', '骨架屏', 'Skeleton', 'Loading state']] as const
  return <><div className="token-layout"><div className="token-col"><span className="label"><Bilingual zh="BeanGo 设计 Token" en="BeanGo Tokens" /></span><div className="swatches">{swatches.map(([color, zh, en]) => <div key={color}><i style={{ background: color }} /><b><Bilingual zh={zh} en={en} /></b><small>{color}</small></div>)}</div></div><div className="token-col token-list"><span className="label"><Bilingual zh="系统规则" en="System Rules" /></span>{rules.map(([zh, en, value]) => <div key={zh}><b><Bilingual zh={zh} en={en} /></b><span>{value}</span></div>)}</div></div><div className="component-showcase"><figure className="component-feature"><div className="component-media component-media--table"><img src={b2bAssets.screens.campaigns} alt="BeanGo Admin operations table real capture" loading="lazy" /></div><figcaption><span className="label"><Bilingual zh="真实组件状态 · 数据管理" en="Real Component States · Data Management" /></span><strong><Bilingual zh="表格 · 搜索 · 筛选 · 排序 · 状态 · 分页" en="Table · Search · Filter · Sort · Status · Pagination" /></strong><small>来自真实 Operations / Campaigns 页面，不是重新绘制的组件样稿。</small></figcaption></figure><div className="component-stack">{stack.map(([screen, zh, en, detail]) => <figure key={screen}><div className={`component-media component-media--${en.toLowerCase()}`}><img src={b2bAssets.screens[screen]} alt={`BeanGo Admin real ${en} capture`} loading="lazy" /></div><figcaption><strong><Bilingual zh={zh} en={en} /></strong><small>{detail}</small></figcaption></figure>)}</div></div></>
}

function ChartCard({ item }: { item: readonly [string, string, string] }) {
  const [zh, en, kind] = item
  return <div className="chart-card"><span className={`chart-glyph chart-glyph--${kind}`} aria-hidden="true"><ChartGlyph kind={kind} /></span><div><strong>{zh}</strong><small>{en}</small></div></div>
}

export function DataVisualizationSystem() {
  return <div className="viz-subsection"><div className="subsection-heading"><span className="label"><Bilingual zh="数据可视化体系" en="Data Visualization System" /></span><strong><Bilingual zh="数据可视化类别展示" en="Chart Types / BeanGo Admin Chart Language" /></strong></div><p className="viz-intro"><Bilingual zh="建立 BeanGo Admin 后台统一的数据表达规范，用于工作台、数据分析、审批与运营等模块。" en="A shared visual language for decisions across Workbench, analytics, approvals and operations." /></p><div className="viz-network"><div className="viz-center"><span className="viz-center-index">12.4</span><span className="viz-center-glyph" aria-hidden="true" /><strong><Bilingual zh="图表类型" en="Chart Types" /></strong><small>semantic · comparable · actionable</small></div>{['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((position) => <span className={`chart-connector chart-connector--${position}`} aria-hidden="true" key={position} />)}{chartCategories.map((category) => <article className={`chart-category chart-category--${category.key}`} key={category.key}><header><span className="chart-category-dot" /><div><strong>{category.zh}</strong><small>{category.en}</small></div></header><div className="chart-card-grid">{category.items.map((item) => <ChartCard item={item} key={item[2]} />)}</div></article>)}</div></div>
}

export function GridLayoutReference() {
  return <div className="grid-layout-reference"><div className="grid-layout-reference-copy"><span className="label"><Bilingual zh="栅格布局" en="GRID LAYOUT" /></span><h3><Bilingual zh="页面布局规范" en="LAYOUT RULES FOR OPERATIONAL CLARITY" /></h3><div className="grid-reference-params"><div><span>页面尺寸</span><b>1440 × 900 <small>px</small></b></div><div><span>侧边导航</span><b>220 <small>px</small></b></div><div><span>列数</span><b>24 <small>Columns</small></b></div><div><span>水槽 / Gutter</span><b>16 <small>px</small></b></div></div><p>栅格系统应用于规范 BeanGo Admin 后台页面的信息布局，帮助设计人员组织复杂信息工具，确保设计与开发过程中的一致性、秩序感与可扩展性。</p><p>通过统一页面宽度、边距、列宽与模块比例，可以有效提升后台页面的清晰度与信息获取效率。</p><span className="grid-reference-signature">BEANGO ADMIN · UI / WEB SYSTEM DESIGN</span></div><div className="grid-reference-figure"><div className="grid-reference-measure grid-reference-measure--width"><span>1440 px</span></div><div className="grid-reference-measure grid-reference-measure--height"><span>900 px</span></div><div className="grid-reference-frame"><div className="grid-reference-sidebar"><b>SIDEBAR</b><small>220 px</small></div><div className="grid-reference-header"><span>HEADER / ROLE SWITCHER</span><b>56 px</b></div><div className="grid-reference-content"><div className="grid-reference-grid">{Array.from({ length: 24 }, (_, index) => <i aria-hidden="true" key={index} />)}</div><div className="grid-reference-zone grid-reference-zone--top" /><div className="grid-reference-zone grid-reference-zone--left" /><div className="grid-reference-zone grid-reference-zone--right" /><div className="grid-reference-zone grid-reference-zone--bottom" /><span className="grid-reference-label grid-reference-label--columns">24 columns</span><span className="grid-reference-label grid-reference-label--gutter">16 px gutter</span></div><span className="grid-reference-dimension grid-reference-dimension--sidebar">220 px</span><span className="grid-reference-dimension grid-reference-dimension--header">56 px</span></div><div className="grid-reference-caption"><span>GRID OVERLAY</span><span>4 px BASE · 16 px GUTTER · 24 COLUMNS</span></div></div></div>
}

export function FinalShowcase() {
  const support = surfaces.filter((surface) => ['users', 'campaigns'].includes(surface.screen))
  return <><div className="showcase-primary-stack">{showcasePrimary.map((item, index) => <article className={`showcase-primary-card${index < 3 ? ' showcase-primary-card--featured' : ''}`} key={item.route}><div className="showcase-primary-media"><StaticSurface route={item.route} showStatus={false} /></div><div className="showcase-primary-note"><span className="showcase-index">0{index + 1}</span><h3><Bilingual zh={item.zh} en={item.en} /></h3><p className="showcase-goal"><span><Bilingual zh="设计目标" en="Design Goal" /></span><b>{item.goalZh}</b><em>{item.goalEn}</em></p><div className="showcase-key-list"><span><Bilingual zh="关键设计" en="Key Decisions" /></span>{item.keys.map(([zh, en]) => <div key={zh}><Bilingual zh={zh} en={en} /></div>)}</div><span className="showcase-live-link showcase-live-link--static">Static interface evidence</span></div></article>)}</div><div className="showcase-supporting"><div className="showcase-supporting-heading"><span><Bilingual zh="辅助页面" en="Supporting Screens" /></span><p>用于补充用户生命周期与数据管理模式的真实界面证据。</p></div><div className="showcase-supporting-grid">{support.map((surface) => <article className="showcase-support-card" key={surface.route}><div><StaticSurface route={surface.route} showStatus={false} /></div><div className="showcase-support-caption"><strong><Bilingual zh={surface.labelZh} en={surface.label} /></strong><small><Bilingual zh={surface.noteZh} en={surface.note} /></small></div></article>)}</div></div></>
}
