import type { RouteRecordRaw, RouteMeta, RouteRecordRedirectOption } from 'vue-router'
import { defineComponent } from 'vue'

export const ROUTERVIEW = () => import('/@/layouts/RouterView.vue')
console.log(ROUTERVIEW)

export type Component<T = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import('*.vue')>)
  | (() => Promise<T>)

// @ts-ignore
export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
  name: string
  meta: RouteMeta
  component?: Component | string
  components?: Component
  children?: AppRouteRecordRaw[] | undefined
  props?: Recordable
  fullPath?: string
  redirect?: RouteRecordRedirectOption
}

export type AppRouteModule = AppRouteRecordRaw

export const getParentLayout = (_name?: string) => {
  return () =>
    new Promise((resolve) => {
      resolve({
        name: '',
      })
    })
}
