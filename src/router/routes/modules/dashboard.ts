import { AppRouteModule } from '/@/router/constant'

const dashboard: AppRouteModule = {
  path: '/dashboard',
  name: 'Dashboard',
  icon: 'menu-home',
  component: 'Layout',
  redirect: '/dashboard/index',
  meta: {
    orderNo: 500,
    type: 'M',
    icon: 'ion:bar-chart-outline',
    title: 'routes.dashboard.dashboard',
  },
  children: [
    {
      path: 'index',
      name: 'DashboardIndex',
      component: 'dashboard/index',
      meta: {
        title: 'routes.dashboard.workbench',
        type: 'M',
      },
    },
  ],
}

export default dashboard
