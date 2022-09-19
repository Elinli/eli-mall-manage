import { AppRouteModule } from '/@/router/constant'

const charts: AppRouteModule = {
  path: '/charts',
  name: 'charts',
  component: 'default',
  redirect: '/charts/pie',
  meta: {
    orderNo: 500,
    icon: 'ion:bar-chart-outline',
    title: 'routes.demo.charts.charts',
  },
  children: [
    {
      path: 'pie',
      name: 'Pie',
      meta: {
        title: 'routes.demo.charts.baiduMap',
      },
      component: 'charts/Pie',
      // component: () => import('/@/views/charts/map/Baidu.vue'),
    },
    {
      path: 'line',
      name: 'Line',
      meta: {
        title: 'routes.demo.charts.aMap',
      },
      component: 'charts/Line',
      // component: () => import('/@/views/charts/map/Gaode.vue'),
    },

    {
      path: 'map',
      name: 'Map',
      component: 'default',
      meta: {
        title: 'map',
      },
      children: [
        {
          path: 'baidu',
          name: 'Baidu',
          component: 'charts/map/Baidu',
          meta: {
            title: 'baidu',
          },
        },
        {
          path: 'gaode',
          name: 'Gaode',
          component: 'charts/map/Gaode',
          meta: {
            title: 'Gaode',
          },
        },
        {
          path: 'google',
          name: 'Google',
          component: 'charts/map/Google',
          meta: {
            title: 'Google',
          },
        },
      ],
    },
  ],
}

export default charts
