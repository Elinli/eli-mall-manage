import { LAYOUT, EXCEPTION_COMPONENT, AppRouteRecordRaw } from '/@/router/constant'

// 404 on a page
export const PageNotFound: AppRouteRecordRaw = {
  path: '/:path(.*)*',
  name: 'notFound',
  component: LAYOUT,
  meta: {
    title: 'ErrorPage',
    hideBreadcrumb: true,
    hideMenu: true,
  },
  children: [
    {
      path: '/:path(.*)*',
      name: 'not',
      component: EXCEPTION_COMPONENT,
      meta: {
        title: 'ErrorPage',
        hideBreadcrumb: true,
        hideMenu: true,
      },
    },
  ],
}

export const Redirect: AppRouteRecordRaw = {
  path: '/redirect',
  component: LAYOUT,
  name: 'RedirectTo',
  meta: {
    title: 'redirect',
    hideBreadcrumb: true,
    hideMenu: true,
  },
  children: [
    {
      path: '/redirect/:path(.*)',
      name: 'redirec-v',
      component: () => import('/@/views/redirect/index.vue'),
      meta: {
        title: 'rc',
        hideBreadcrumb: true,
      },
    },
  ],
}

export const ERROR_LOG_ROUTE: AppRouteRecordRaw = {
  path: '/error-log',
  name: 'ErrorLog',
  component: LAYOUT,
  redirect: '/error-log/list',
  meta: {
    title: 'ErrorLog',
    hideBreadcrumb: true,
    hideChildrenInMenu: true,
  },
  children: [
    {
      path: 'list',
      name: 'ErrorLogList',
      component: () => import('/@/views/sys/error-log/index.vue'),
      meta: {
        title: 'routes.basic.errorLogList',
        hideBreadcrumb: true,
        currentActiveMenu: '/error-log',
      },
    },
  ],
}
