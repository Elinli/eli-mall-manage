import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { dynamicImportRoutes } from './util'
import { useApp } from '../store/modules/app'
import NProgress from 'nprogress' // Progress 进度条;
import 'nprogress/nprogress.css' // Progress 进度条样式
import { asyncRoutes } from './routes'

// const modules = import.meta.glob('./routes/modules/**/*.ts', { eager: true })

// const routeModuleList: AppRouteModule[] = []

// Object.keys(modules).forEach((key) => {
//   const module: any = modules[key]
//   const mod = module.default || {}
//   const modList = Array.isArray(mod) ? [...mod] : [mod]
//   routeModuleList.push(...modList)
// })
// console.log('routeModuleList', routeModuleList)

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
    name: 'root',
    meta: {
      title: 'root',
    },
    redirect: '/dashboard',
  },
]

console.log(basicRoutes)

const router = createRouter({
  history: createWebHashHistory(),
  routes: basicRoutes as unknown as RouteRecordRaw[],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})
let isAsync = true
router.beforeEach(async (to, _from, next) => {
  NProgress.start()
  const appStore = useApp()
  appStore.setNavbar(to)
  if (to.path === '/login' || to.path === '/') {
    next()
    NProgress.done()
    return
  }
  if (isAsync) {
    await dynamicImportRoutes(asyncRoutes)
    asyncRoutes.forEach((route) => {
      router.addRoute(route as unknown as RouteRecordRaw)
    })
    isAsync = false
    next({ path: to.fullPath, replace: true, query: to.query })
  } else {
    next()
  }

  NProgress.done()
})

export default router
