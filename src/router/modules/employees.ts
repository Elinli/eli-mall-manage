import { AppRouteModule } from '/@/router/constant'

const employees: AppRouteModule = {
  path: '/employ',
  name: 'Employ',
  component: 'default',
  redirect: '/charts/echarts/map',
  meta: {
    orderNo: 500,
    icon: 'ion:bar-chart-outline',
    title: '图表',
  },
  children: [
    {
      path: 'baiduMap',
      name: 'BaiduMap',
      meta: {
        title: '百度',
      },
      component: 'charts/map/Baidu',
      // component: () => import('/@/views/charts/map/Baidu.vue'),
    },
    {
      path: 'gaode',
      name: 'Gaode',
      meta: {
        title: '高德',
      },
      component: 'charts/map/Gaode',
      // component: () => import('/@/views/charts/map/Gaode.vue'),
    },
    {
      path: 'google',
      name: 'Google',
      meta: {
        title: '谷歌',
      },
      component: 'charts/map/Google',
      // component: () => import('/@/views/charts/map/Google.vue'),
    },

    {
      path: 'echarts',
      name: 'Echarts',
      component: 'default',
      meta: {
        title: 'Echarts',
      },
      redirect: '/charts/echarts/map',
      children: [
        {
          path: 'map',
          name: 'Map',
          component: 'charts/Map',
          // component: () => import('/@/views/charts/Map.vue'),
          meta: {
            title: 'routes.demo.charts.map',
          },
        },
        {
          path: 'line',
          name: 'Line',
          component: 'charts/Line',
          // component: () => import('/@/views/charts/Line.vue'),
          meta: {
            title: 'routes.demo.charts.line',
          },
        },
        {
          path: 'pie',
          name: 'Pie',
          component: 'charts/Pie',
          // component: () => import('/@/views/charts/Pie.vue'),
          meta: {
            title: 'routes.demo.charts.pie',
          },
        },
      ],
    },
  ],
}

export default employees
