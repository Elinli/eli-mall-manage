import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { AppRouteModule } from './constant'
import { dynamicImportRoutes } from './util'

const modules = import.meta.globEager('./modules/**/*.ts')

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
      title: 'routes.basic.login',
    },
    redirect: '',
  },
  {
    path: '/category',
    name: 'Category',
    component: 'RouterView',
    meta: {
      title: 'routes.basic.login',
    },
    redirect: '/category/index',
    children: [
      {
        path: 'index',
        name: 'index',
        component: 'category/index',
        meta: {
          title: 'routes.basic.login',
          keepAlive: true,
        },
      },
      {
        path: 'edit',
        name: 'Edit',
        component: 'category/Edit',
        meta: {
          title: 'routes.basic.login',
        },
      },
    ],
  },
  {
    path: '/',
    name: 'Home',
    component: 'RouterView',
    meta: {
      title: 'routes.basic.home',
    },
    redirect: '/login',
  },
]
dynamicImportRoutes(basicRoutes)
console.log(basicRoutes)

const router = createRouter({
  history: createWebHashHistory('/'),
  routes: basicRoutes as unknown as RouteRecordRaw[],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export default router
