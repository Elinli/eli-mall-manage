import { dynamicImportRoutes } from '../util'

import { useApp } from '/@/store/modules/app'
import NProgress from 'nprogress' // Progress 进度条;
import 'nprogress/nprogress.css' // Progress 进度条样式
import { asyncRoutes } from '../routes'
import { Router, RouteRecordRaw } from 'vue-router'
import { useLoadRoutes } from '/@/store/modules/loadRoutes'
export function createPermissionGuard(router: Router) {
  router.beforeEach(async (to, _from, next) => {
    NProgress.start()
    const appStore = useApp()
    const loadRoutesStore = useLoadRoutes()
    if (to.path === '/login' || to.path === '/') {
      next()
      NProgress.done()
      return
    }

    if (loadRoutesStore.getisDynamicAddedRoute) {
      await dynamicImportRoutes(asyncRoutes)
      asyncRoutes.forEach((route) => {
        router.addRoute(route as unknown as RouteRecordRaw)
      })
      loadRoutesStore.setisDynamicAddedRoute(false)
      next({ path: to.fullPath, replace: true, query: to.query })
    } else {
      next()
    }

    const allRoutes = router.getRoutes()
    const isToPathExist = allRoutes.some((item) => item.path === to.path)
    if (isToPathExist && to.meta.type === 'M') appStore.setNavbar(to)
    NProgress.done()
  })
}
