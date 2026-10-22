import type { B2BScreenKey } from './b2bAssets'

export type Surface = {
  label: string
  labelZh: string
  route: string
  screen: B2BScreenKey
  note: string
  noteZh: string
}

export const surfaces: Surface[] = [
  { label: 'Workbench', labelZh: '工作台', route: '/workbench', screen: 'workbench', note: 'Role-based workbench', noteZh: '角色工作台' },
  { label: 'AI Quality', labelZh: 'AI 质量', route: '/ai/vision', screen: 'ai-vision', note: 'AI recognition review', noteZh: 'AI 识别复核' },
  { label: 'User lifecycle', labelZh: '用户生命周期', route: '/users', screen: 'users', note: 'Status & data scope', noteZh: '状态与数据范围' },
  { label: 'Store', labelZh: '门店', route: '/stores', screen: 'stores', note: 'Store onboarding', noteZh: '门店录入' },
  { label: 'Approvals', labelZh: '审批', route: '/approvals', screen: 'approvals', note: 'Risk governance', noteZh: '风险治理' },
  { label: 'Audit log', labelZh: '审计日志', route: '/system/audit', screen: 'audit', note: 'Traceability', noteZh: '可追溯性' },
  { label: 'Permissions', labelZh: '权限', route: '/system/roles', screen: 'roles', note: 'RBAC matrix', noteZh: 'RBAC 矩阵' },
  { label: 'Data patterns', labelZh: '数据模式', route: '/operations/campaigns', screen: 'campaigns', note: 'Tables & states', noteZh: '表格与状态' },
]

export const roles = [
  ['P01', '业务负责人 / 创始人', '经营决策'],
  ['P02', '产品运营负责人', '运营协同'],
  ['P03', '用户运营 / 客服', '用户服务与客服'],
  ['P04', '社区与内容安全运营', '社区与内容安全'],
  ['P05', '咖啡内容与门店运营', '门店与咖啡供给'],
  ['P06', 'AI / 知识库运营', 'AI 质量与知识运营'],
  ['P07', '增长运营', '增长运营'],
  ['P08', '数据分析师', '数据分析'],
  ['P09', '系统管理员 / 安全审计', '系统安全与审计'],
] as const

export const domains = ['数据洞察', '用户与个性化', 'AI 与知识', '门店与消费', '社区与治理', '推荐与增长', '运营与服务', '系统与安全'] as const
export const permissions = ['View', 'Create', 'Edit', 'Approve', 'Publish', 'Export', 'Delete', 'Manage'] as const
export const domainEnglish = ['Data & Insights', 'Users & Personalization', 'AI & Knowledge', 'Store & Consumption', 'Community & Governance', 'Growth & Recommendation', 'Operations & Support', 'System & Security'] as const

export const permissionChinese: Record<string, string> = {
  View: '查看', Create: '新建', Edit: '编辑', Approve: '审批', Publish: '发布', Export: '导出', Delete: '删除', Manage: '管理',
}

export const roleEnglish: Record<string, string> = {
  P01: 'Business Owner', P02: 'Product Operations', P03: 'User Operations / Support', P04: 'Community & Content Safety', P05: 'Coffee Content & Store Ops', P06: 'AI / Knowledge Operations', P07: 'Growth Operations', P08: 'Data Analyst', P09: 'System Security & Audit',
}

export const sectionTitles: Record<string, [string, string]> = {
  Hero: ['首屏', 'Hero'],
  'Project Overview': ['项目概览', 'Project Overview'],
  'Business Complexity': ['业务复杂度', 'Business Complexity'],
  'Business Workflow Mapping': ['业务流程映射', 'Business Workflow Mapping'],
  'User Roles & RBAC': ['用户角色与权限体系', 'User Roles & RBAC'],
  'Information Architecture': ['信息架构', 'Information Architecture'],
  'Core User Journey': ['核心用户旅程', 'Core User Journey'],
  'Workbench Design': ['工作台设计', 'Workbench Design'],
  'AI Quality Workflow': ['AI 质量工作流', 'AI Quality Workflow'],
  'Risk Governance': ['风险治理', 'Risk Governance'],
  'System State Design': ['系统状态设计', 'System State Design'],
  'Component System': ['组件规范', 'Component System'],
  'Final Interface Showcase': ['最终界面展示', 'Final Interface Showcase'],
  'Reflection & Boundary': ['反思与边界', 'Reflection & Boundary'],
}

export const navItems = ['Project Overview', 'Business Complexity', 'Business Workflow Mapping', 'User Roles & RBAC', 'Information Architecture', 'Core User Journey', 'Workbench Design', 'AI Quality Workflow', 'Risk Governance', 'System State Design', 'Component System', 'Final Interface Showcase', 'Reflection & Boundary'] as const

export const workflowNodes = [
  ['01', '店铺录入', '/stores', 'P05 · 门店运营', 'source', 'Store Input'],
  ['02', '资料 / 豆单采集', '/menus', 'P05 · 内容运营', 'source', 'Data & Bean List Capture'],
  ['03', 'AI 识别与结构化', '/ai/vision', 'P06 · AI 运营', 'intelligence', 'AI Recognition & Structuring'],
  ['04', '推荐策略', '/growth/recommendation', 'P01 / P07', 'intelligence', 'Recommendation Strategy'],
  ['05', '人工复核', '/ai/vision', 'P04 / P06', 'review', 'Human Review'],
  ['06', '审批', '/approvals', 'P01 / P02', 'governance', 'Approval'],
  ['07', '发布', '/community/content', 'P04 / P07', 'governance', 'Publish'],
  ['08', '用户反馈', '/operations/feedback', 'P03 · 客服', 'feedback', 'User Feedback'],
  ['09', '知识回流', '/ai/knowledge', 'P06 / P08', 'feedback', 'Knowledge Feedback Loop'],
] as const

export const roleMatrix = [
  ['P01', '业务负责人', '主责', '只读', '只读', '协作', '审批', '只读', 'all'],
  ['P02', '产品运营负责人', '主责', '协作', '协作', '协作', '审批', '只读', 'all'],
  ['P03', '用户运营 / 客服', '主责', '协作', '协作', '协作', '局部', '只读', 'assigned'],
  ['P04', '社区与内容安全', '主责', '只读', '协作', '主责', '审批', '只读', 'content-only'],
  ['P05', '咖啡内容与门店', '主责', '主责', '协作', '主责', '协作', '只读', 'all'],
  ['P06', 'AI / 知识库运营', '主责', '协作', '主责', '协作', '审批', '只读', 'masked'],
  ['P07', '增长运营', '主责', '只读', '只读', '主责', '审批', '只读', 'aggregate'],
  ['P08', '数据分析师', '主责', '只读', '协作', '只读', '审批', '只读', 'aggregate'],
  ['P09', '系统安全审计', '主责', '不可编辑', '不可编辑', '不可编辑', '审批 / 管理', '主责', 'system-only'],
] as const

export const journeys = [
  ['01', '门店与咖啡内容运营', 'Store & Coffee Content Operations', 'P05 · 咖啡内容与门店运营', '维护门店与豆单内容', '资料更新或进入发布链路', '提交审批 / 状态反馈', [['Workbench', '/workbench?role=P05'], ['Stores', '/stores'], ['Menus', '/menus'], ['AI Vision', '/ai/vision'], ['Review', '/ai/vision'], ['Approval', '/approvals']]],
  ['02', 'AI 质量管理', 'AI Quality Management', 'P06 · AI / 知识库运营', '降低低置信识别风险', '低置信结果或不准确反馈', '修正结果 / 知识回流', [['AI Vision', '/ai/vision'], ['Confidence Check', '置信度 < 85'], ['Correction', '人工修正'], ['Knowledge Base', '/ai/knowledge']]],
  ['03', '系统治理', 'System Governance', 'P09 · 系统管理员 / 安全审计', '控制管理员和系统动作', '权限变更或安全事件', 'Audit Log 留痕', [['Roles', '/system/roles'], ['Permission', 'module permissions'], ['Audit', '/system/audit']]],
] as const

export const chartCategories = [
  { key: 'trend', zh: '趋势类', en: 'Trend', items: [['折线图', 'Line Chart', 'line'], ['面积图', 'Area Chart', 'area'], ['堆叠面积图', 'Stacked Area', 'stacked-area'], ['漏斗图', 'Funnel', 'funnel']] },
  { key: 'comparison', zh: '比较类', en: 'Comparison', items: [['基础柱状图', 'Bar Chart', 'bar'], ['堆叠柱状图', 'Stacked Bar', 'stacked-bar'], ['条形图', 'Horizontal Bar', 'horizontal-bar'], ['雷达图', 'Radar', 'radar'], ['热力图', 'Heatmap', 'heatmap']] },
  { key: 'proportion', zh: '占比类', en: 'Proportion', items: [['环形图', 'Donut Chart', 'donut'], ['饼图', 'Pie Chart', 'pie'], ['仪表盘', 'Gauge', 'gauge'], ['百分比堆叠图', '100% Stacked', 'percent-stack'], ['进度条', 'Progress Bar', 'progress'], ['百分比柱状图', 'Percent Bar', 'percent-bar']] },
  { key: 'distribution', zh: '分布类', en: 'Distribution', items: [['盒须图', 'Box Plot', 'box'], ['直方图', 'Histogram', 'histogram'], ['气泡图', 'Bubble Chart', 'bubble'], ['散点图', 'Scatter Plot', 'scatter']] },
] as const

export const showcasePrimary = [
  { route: '/workbench', zh: '工作台设计', en: 'Workbench Design', goalZh: '按角色提供不同决策入口。', goalEn: 'Role-based decision workspace', keys: [['KPI 优先级', 'KPI priority'], ['权限隔离', 'Permission isolation'], ['状态反馈', 'State feedback']] },
  { route: '/stores', zh: '门店管理', en: 'Store Operations', goalZh: '把门店资料、豆单与运营状态放进同一工作上下文。', goalEn: 'Structured store and coffee operations', keys: [['门店资料', 'Store records'], ['豆单上下文', 'Bean list context'], ['运营状态', 'Operational status']] },
  { route: '/ai/vision', zh: 'AI 质量工作台', en: 'AI Vision Review', goalZh: '让模型结果进入可复核、可修正的人工判断流程。', goalEn: 'Human-in-the-loop AI quality control', keys: [['置信度分层', 'Confidence levels'], ['人工复核', 'Human review'], ['知识回流', 'Knowledge loop']] },
  { route: '/approvals', zh: '审批中心', en: 'Approval Center', goalZh: '让高风险动作在执行前可预览、可审批、可追溯。', goalEn: 'Governed actions with traceable decisions', keys: [['影响范围', 'Impact scope'], ['审批状态', 'Approval status'], ['执行留痕', 'Execution trace']] },
  { route: '/system/roles', zh: '权限管理', en: 'RBAC Management', goalZh: '把角色、模块权限与数据范围放进同一矩阵。', goalEn: 'Role, permission and data-scope control', keys: [['角色矩阵', 'Role matrix'], ['动作权限', 'Action permissions'], ['数据范围', 'Data scope']] },
  { route: '/system/audit', zh: '审计日志', en: 'Audit Log', goalZh: '为每一次关键改变保留 Who / What / Why / When。', goalEn: 'Accountability across every system change', keys: [['操作者', 'Actor'], ['前后差异', 'Before / after'], ['时间状态', 'Timestamp / status']] },
] as const
