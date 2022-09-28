import { AppRouteModule } from '/@/router/constant'

const system: AppRouteModule = {
  path: '/system',
  name: 'System',
  component: 'Layout',
  icon: 'menu-home',
  redirect: '/system/menu',
  meta: {
    orderNo: 500,
    icon: 'ion:bar-chart-outline',
    title: '系统管理',
    type: 'M',
  },
  children: [
    {
      path: 'menu',
      name: 'Menu',
      meta: {
        title: '菜单管理',
        type: 'M',
      },
      component: 'system/menu/index',
    },
    {
      path: 'account',
      name: 'Account',
      meta: {
        title: '账户管理',
        type: 'M',
      },
      component: 'system/account/index',
    },

    {
      path: 'process',
      name: 'Process',
      meta: {
        title: '流程管理',
        type: 'M',
      },
      component: 'system/process/index',
      // component: () => import('/@/views/system/map/Google.vue'),
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
      path: 'roles',
      name: 'Roles',
      component: 'system/roles/index',
      meta: {
        title: '角色管理',
        type: 'M',
      },
    },
    {
      path: 'tests',
      name: 'Tests',
      component: 'default',
      meta: {
        title: '测试管理',
        type: 'M',
      },
      children: [
        {
          path: 'testone',
          name: 'Testone',
          component: 'system/testss/unittest/index',
          meta: {
            title: '单元测试',
            type: 'M',
          },
        },
      ],
    },
  ],
}

export default system
