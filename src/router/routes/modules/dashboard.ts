import { AppRouteModule } from '/@/router/constant'

const dashboard: AppRouteModule = {
  path: '/dashboard',
  name: 'Dashboard',
  icon: 'menu-home',
  component: 'layouts/index',
  redirect: '/dashboard/index',
  meta: {
    orderNo: 500,
    icon: 'ion:bar-chart-outline',
    title: 'routes.dashboard.dashboard',
  },
  children: [
    {
      path: 'index',
      name: 'Index',
      component: 'dashboard/index',
      meta: {
        title: 'routes.dashboard.workbench',
      },
    },
  ],
}

export default dashboard
