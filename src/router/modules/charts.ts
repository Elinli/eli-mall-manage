import { AppRouteModule, getParentLayout, ROUTERVIEW } from '/@/router/constant'

const charts: AppRouteModule = {
  path: '/charts',
  name: 'Charts',
  component: ROUTERVIEW,
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
      component: () => import('/@/views/demo/charts/map/Baidu.vue'),
    },
    {
      path: 'aMap',
      name: 'AMap',
      meta: {
        title: 'routes.demo.charts.aMap',
      },
      component: () => import('/@/views/demo/charts/map/Gaode.vue'),
    },
    {
      path: 'googleMap',
      name: 'GoogleMap',
      meta: {
        title: 'routes.demo.charts.googleMap',
      },
      component: () => import('/@/views/demo/charts/map/Google.vue'),
    },

    {
      path: 'echarts',
      name: 'Echarts',
      component: getParentLayout('Echarts'),
      meta: {
        title: 'Echarts',
      },
      redirect: '/charts/echarts/map',
      children: [
        {
          path: 'map',
          name: 'Map',
          component: () => import('/@/views/demo/charts/Map.vue'),
          meta: {
            title: 'routes.demo.charts.map',
          },
        },
        {
          path: 'line',
          name: 'Line',
          component: () => import('/@/views/demo/charts/Line.vue'),
          meta: {
            title: 'routes.demo.charts.line',
          },
        },
        {
          path: 'pie',
          name: 'Pie',
          component: () => import('/@/views/demo/charts/Pie.vue'),
          meta: {
            title: 'routes.demo.charts.pie',
          },
        },
      ],
    },
  ],
}

export default charts
