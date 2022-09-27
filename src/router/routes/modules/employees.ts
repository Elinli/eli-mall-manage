import { AppRouteModule } from '/@/router/constant'

const employees: AppRouteModule = {
  path: '/employ',
  name: 'Employ',
  component: 'Layout',
  icon: 'menu-home',
  redirect: '/employ/index',
  meta: {
    orderNo: 500,
    icon: 'ion:bar-chart-outline',
    title: 'routes.demo.employ.employmgt',
    type: 'M',
  },
  children: [
    {
      path: 'index',
      name: 'EmployIndex',
      component: 'employ/index',
      meta: {
        title: 'routes.demo.employ.employmgt',
        type: 'M',
      },
    },
  ],
}

export default employees
