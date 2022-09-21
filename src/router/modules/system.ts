import { AppRouteModule } from '/@/router/constant'

const system: AppRouteModule = {
  path: '/system',
  name: 'System',
  component: 'default',
  redirect: '/system/menu',
  meta: {
    orderNo: 500,
    icon: 'ion:bar-chart-outline',
    title: '系统管理',
  },
  children: [
    {
      path: 'menu',
      name: 'Menu',
      meta: {
        title: '菜单管理',
      },
      component: 'system/menu/index',
      // component: () => import('/@/views/system/map/Baidu.vue'),
    },
    {
      path: 'account',
      name: 'Account',
      meta: {
        title: '账户管理',
      },
      component: 'system/account/index',
      // component: () => import('/@/views/system/map/Gaode.vue'),
    },
    {
      path: 'account_detail/:id',
      name: 'AccountDetail',
      meta: {
        title: '账号详情',
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
        title: '流程管理',
      },
      component: 'system/process/index',
      // component: () => import('/@/views/system/map/Google.vue'),
    },

    {
      path: 'roles',
      name: 'Roles',
      component: 'system/roles/index',
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'tests',
      name: 'Tests',
      component: 'default',
      meta: {
        title: '测试管理',
      },
      children: [
        {
          path: 'testone',
          name: 'Testone',
          component: 'system/testss/testsss/index',
          meta: {
            title: '单元测试',
          },
        },
      ],
    },
  ],
}

export default system
