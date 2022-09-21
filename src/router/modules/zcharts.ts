import { AppRouteModule } from '/@/router/constant'

const charts: AppRouteModule = {
  path: '/charts',
  name: 'charts',
  component: 'default',
  redirect: '/charts/pie',
  meta: {
    orderNo: 500,
    icon: 'ion:bar-chart-outline',
    title: '图表',
  },
  children: [
    {
      path: 'pie',
      name: 'Pie',
      meta: {
        title: '饼图',
      },
      component: 'charts/Pie',
      // component: () => import('/@/views/charts/map/Baidu.vue'),
    },
    {
      path: 'line',
      name: 'Line',
      meta: {
        title: '线图',
      },
      component: 'charts/Line',
      // component: () => import('/@/views/charts/map/Gaode.vue'),
    },

    {
      path: 'map',
      name: 'Map',
      component: 'default',
      meta: {
        title: '地图',
      },
      children: [
        {
          path: 'baidu',
          name: 'Baidu',
          component: 'charts/map/Baidu',
          meta: {
            title: '百度',
          },
        },
        {
          path: 'gaode',
          name: 'Gaode',
          component: 'charts/map/Gaode',
          meta: {
            title: '高德',
          },
        },
        {
          path: 'google',
          name: 'Google',
          component: 'charts/map/Google',
          meta: {
            title: '谷歌',
          },
        },
      ],
    },
  ],
}

export default charts
