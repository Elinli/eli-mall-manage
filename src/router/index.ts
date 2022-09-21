import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { AppRouteModule } from './constant'
import { dynamicImportRoutes } from './util'
import { useApp } from '../store/app'
const modules = import.meta.glob('./modules/**/*.ts', { eager: true })

const routeModuleList: AppRouteModule[] = []

Object.keys(modules).forEach((key) => {
  const module: any = modules[key]
  const mod = module.default || {}
  const modList = Array.isArray(mod) ? [...mod] : [mod]
  routeModuleList.push(...modList)
})

const basicRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: 'login/index',
    meta: {
      title: '登陆',
    },
    redirect: '',
  },

  {
    path: '/',
    name: 'Index',
    component: 'layouts/index',
    meta: {
      title: 'routes.basic.home',
    },
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: 'home/index',
        meta: {
          orderNo: 500,
          icon: 'ion:bar-chart-outline',
          title: '首页',
        },
      },

      ...routeModuleList,
    ],
  },
]

dynamicImportRoutes(basicRoutes)

const router = createRouter({
  history: createWebHashHistory(),
  routes: basicRoutes as unknown as RouteRecordRaw[],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

router.beforeEach((to, from, next) => {
  console.log(to)
  const appStore = useApp()
  console.log(appStore)
  appStore.setNavbar(to)
  next()
})

export default router
