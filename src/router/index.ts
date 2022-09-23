import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'
import { PageNotFound } from './routes/basic'

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
  PageNotFound,
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: basicRoutes as unknown as RouteRecordRaw[],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export default router

// config router
export function setupRouter(app: App<Element>) {
  app.use(router)
}
