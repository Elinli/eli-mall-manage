import { AppRouteModule } from '/@/router/constant'
const staticMenu: Array<AppRouteModule> = [
  {
    name: 'home',
    path: '/dashboard',
    title: '首页',
    parent: 'root',
    icon: 'menu-home',
    hiddenChildren: true,
  },
  {
    name: 'charts',
    path: '/charts',
    title: '图标',
    parent: 'root',
    icon: 'menu-home',
    children: [
      {
        name: 'pie',
        path: '/charts/pie',
        title: '饼图',
        parent: 'charts',
        icon: '',
        hiddenChildren: true,
      },
      {
        name: 'line',
        path: '/charts/line',
        title: '线图',
        parent: 'charts',
        icon: '',
        hiddenChildren: true,
      },

      {
        name: 'map',
        path: '/charts/map',
        title: '地图',
        parent: 'charts',
        icon: '',
        hiddenChildren: false,
        children: [
          {
            name: 'baidu',
            path: '/charts/map/baidu',
            title: '百度',
            parent: 'map',
            icon: '',
            hiddenChildren: true,
          },
          {
            name: 'gaode',
            path: '/charts/map/gaode',
            title: '高德',
            parent: 'map',
            icon: '',
            hiddenChildren: true,
          },
          {
            name: 'google',
            path: '/charts/map/google',
            title: '谷歌',
            parent: 'map',
            icon: '',
            hiddenChildren: true,
          },
        ],
      },
    ],
    hiddenChildren: false,
    uniqueId: 3,
    level: 1,
  },
  {
    name: 'category',
    path: '/category/index',
    title: '分类',
    parent: 'root',
    icon: 'menu-system',
    children: '',
    hiddenChildren: true,
    uniqueId: 1,
    level: 1,
  },
  {
    name: 'system',
    path: '/system',
    title: '系统',
    parent: 'root',
    icon: 'menu-home',
    children: [
      {
        name: 'menu',
        path: '/system/menu',
        title: '菜单管理',
        parent: 'system',
        icon: '',
        hiddenChildren: true,
      },
      {
        name: 'process',
        path: '/system/process',
        title: '流程管理',
        parent: 'system',
        icon: '',
        hiddenChildren: true,
      },
      {
        name: 'account',
        path: '/system/account',
        title: '账户管理',
        parent: 'system',
        icon: '',
        hiddenChildren: true,
      },
      {
        name: 'roles',
        path: '/system/roles',
        title: '角色管理',
        parent: 'system',
        icon: '',
        hiddenChildren: true,
      },
      {
        name: 'tests',
        path: '/system/tests',
        title: '测试管理',
        parent: 'system',
        icon: '',
        hiddenChildren: false,
        children: [
          {
            name: 'testsOne',
            path: '/system/tests/testone',
            title: '测试以',
            parent: 'tests',
            icon: '',
            hiddenChildren: true,
          },
        ],
      },
    ],
    hiddenChildren: false,
    uniqueId: 3,
    level: 1,
  },
]

// whole menu include button and link and menu
const wholeMenu: Array<AppRouteModule> = []

// menu for role
const roleMenu = {
  admin: [],
  ordinary: [],
  root: [],
  manager: [],
  chairman: [],
}

export { wholeMenu, roleMenu, staticMenu }
