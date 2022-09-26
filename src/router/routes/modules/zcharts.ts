import { AppRouteModule } from '/@/router/constant'

const charts: AppRouteModule = {
  path: '/charts',
  name: 'charts',
  icon: 'menu-home',
  component: 'Layout',
  redirect: '/charts/pie',
  meta: {
    orderNo: 500,
    icon: 'ion:bar-chart-outline',
    title: '图表',
    type: 'M',
  },
  children: [
    {
      path: 'pie',
      name: 'Pie',
      meta: {
        title: '饼图',
        type: 'M',
      },
      component: 'charts/Pie',
      // component: () => import('/@/views/charts/map/Baidu.vue'),
    },
    {
      path: 'line',
      name: 'Line',
      meta: {
        title: '线图',
        type: 'M',
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
        type: 'M',
      },
      children: [
        {
          path: 'baidu',
          name: 'Baidu',
          component: 'charts/map/Baidu',
          meta: {
            title: '百度',
            type: 'M',
          },
        },
        {
          path: 'gaode',
          name: 'Gaode',
          component: 'charts/map/Gaode',
          meta: {
            title: '高德',
            type: 'M',
          },
        },
        {
          path: 'google',
          name: 'Google',
          component: 'charts/map/Google',
          meta: {
            title: '谷歌',
            type: 'M',
          },
        },
      ],
    },
  ],
}

export default charts
