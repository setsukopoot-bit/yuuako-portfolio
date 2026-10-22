import logo from '../assets/brand/bean-go-logo-lossless.svg'
import aiVision from '../assets/screens/ai-vision.png'
import approvals from '../assets/screens/approvals.png'
import audit from '../assets/screens/audit.png'
import campaigns from '../assets/screens/campaigns.png'
import componentDrawer from '../assets/screens/component-drawer.png'
import componentEmpty from '../assets/screens/component-empty.png'
import componentModal from '../assets/screens/component-modal.png'
import componentSkeleton from '../assets/screens/component-skeleton.png'
import componentToast from '../assets/screens/component-toast.png'
import roles from '../assets/screens/roles.png'
import stores from '../assets/screens/stores.png'
import users from '../assets/screens/users.png'
import workbenchDashboard from '../assets/screens/workbench-dashboard.png'
import workbenchKpi from '../assets/screens/workbench-kpi.png'
import workbenchRole from '../assets/screens/workbench-role.png'
import workbenchTodos from '../assets/screens/workbench-todos.png'
import workbench from '../assets/screens/workbench.png'

export const b2bAssets = {
  logo,
  screens: {
    'ai-vision': aiVision,
    approvals,
    audit,
    campaigns,
    'component-drawer': componentDrawer,
    'component-empty': componentEmpty,
    'component-modal': componentModal,
    'component-skeleton': componentSkeleton,
    'component-toast': componentToast,
    roles,
    stores,
    users,
    'workbench-dashboard': workbenchDashboard,
    'workbench-kpi': workbenchKpi,
    'workbench-role': workbenchRole,
    'workbench-todos': workbenchTodos,
    workbench,
  },
} as const

export type B2BScreenKey = keyof typeof b2bAssets.screens
