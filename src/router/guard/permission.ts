import { dynamicImportRoutes } from '../util'

import { useApp } from '/@//store/modules/app'
import NProgress from 'nprogress' // Progress 进度条;
import 'nprogress/nprogress.css' // Progress 进度条样式
import { asyncRoutes } from '../routes'
import { Router, RouteRecordRaw } from 'vue-router'

export function createPermissionGuard(router: Router) {
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
}
