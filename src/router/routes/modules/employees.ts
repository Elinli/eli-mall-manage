import { AppRouteModule } from '/@/router/constant'

const employees: AppRouteModule = {
  path: '/employ',
  name: 'Employ',
  component: 'default',
  icon: 'menu-home',
  meta: {
    orderNo: 500,
    icon: 'ion:bar-chart-outline',
    title: '职工管理',
  },
}

export default employees
