import { AppRouteModule } from '/@/router/constant'
const staticMenu: Array<AppRouteModule> = [
  {
    name: 'chart',
    path: '/chart',
    title: '图表',
    parent: 'root',
    icon: 'menu-charts',
    redirect: '/echart',
    type: 'M',
    children: [
      {
        name: 'chartIndex',
        path: '/echart',
        title: '报表',
        parent: 'chart',
        icon: '',
        children: [],
        hiddenChildren: true,
        uniqueId: 3,
        level: 2,
      },
      {
        name: 'chartDetail',
        path: '/echart/detail',
        title: '统计',
        parent: 'chart',
        icon: '',
        children: [],
        hiddenChildren: true,
        uniqueId: 3,
        level: 2,
      },
    ],
    hiddenChildren: false,
    uniqueId: 2,
    level: 1,
  },
  {
    name: 'employ',
    path: '/employ',
    title: '职工',
    parent: 'root',
    icon: 'menu-system',
    children: null,
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
    children: null,
    hiddenChildren: true,
    uniqueId: 3,
    level: 1,
  },
]

// whole menu include button and link and menu
const wholeMenu: Array<Menu> = []

// menu for role
const roleMenu = {
  admin: [],
  ordinary: [],
  root: [],
  manager: [],
  chairman: [],
}

export { wholeMenu, roleMenu, staticMenu }
