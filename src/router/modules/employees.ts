import { AppRouteModule } from '/@/router/constant'

const employees: AppRouteModule = {
  path: '/employ',
  name: 'Employ',
  component: 'default',
  redirect: '/charts/echarts/map',
  meta: {
    orderNo: 500,
    icon: 'ion:bar-chart-outline',
    title: 'routes.demo.charts.charts',
  },
  children: [
    {
      path: 'baiduMap',
      name: 'BaiduMap',
      meta: {
        title: 'routes.demo.charts.baiduMap',
      },
      component: 'charts/map/Baidu',
      // component: () => import('/@/views/charts/map/Baidu.vue'),
    },
    {
      path: 'aMap',
      name: 'AMap',
      meta: {
        title: 'routes.demo.charts.aMap',
      },
      component: 'charts/map/Gaode',
      // component: () => import('/@/views/charts/map/Gaode.vue'),
    },
    {
      path: 'googleMap',
      name: 'GoogleMap',
      meta: {
        title: 'routes.demo.charts.googleMap',
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
