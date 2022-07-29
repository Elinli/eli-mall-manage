import { AppRouteModule } from '/@/router/constant'

const system: AppRouteModule = {
  path: '/system',
  name: 'System',
  component: 'default',
  redirect: '/system/menu',
  meta: {
    orderNo: 500,
    icon: 'ion:bar-chart-outline',
    title: 'routes.demo.system.system',
  },
  children: [
    {
      path: 'menu',
      name: 'Menu',
      meta: {
        title: 'routes.demo.system.baiduMap',
      },
      component: 'system/menu/index',
      // component: () => import('/@/views/system/map/Baidu.vue'),
    },
    {
      path: 'account',
      name: 'Account',
      meta: {
        title: 'routes.demo.system.aMap',
      },
      component: 'system/account/index',
      // component: () => import('/@/views/system/map/Gaode.vue'),
    },
    {
      path: 'account_detail/:id',
      name: 'AccountDetail',
      meta: {
        title: 'routes.demo.system.aMap',
        hideMenu: true,
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/system/account',
      },
      component: 'system/account/AccountDetail',
      // component: () => import('/@/views/system/map/Gaode.vue'),
    },
    {
      path: 'process',
      name: 'Process',
      meta: {
        title: 'routes.demo.system.googleMap',
      },
      component: 'system/process/index',
      // component: () => import('/@/views/system/map/Google.vue'),
    },

    {
      path: 'roles',
      name: 'Roles',
      component: 'system/roles/index',
      meta: {
        title: 'Roles',
      },
    },
  ],
}

export default system
