import type { RouteRecordRaw, RouteMeta, RouteRecordRedirectOption } from 'vue-router'
import { defineComponent } from 'vue'

export type Component<T = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import('*.vue')>)
  | (() => Promise<T>)

// @ts-ignore
export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
  name: string
  meta?: RouteMeta
  component?: Component | string
  children?: AppRouteRecordRaw[] | undefined | null | string | null
  props?: Recordable
  fullPath?: string
  redirect?: RouteRecordRedirectOption | string
  icon?: string
  type?: string
  hiddenChildren?: boolean
  uniqueId?: number | string
  level?: number
  title?: string
  parent?: string | null | undefined
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

export const LAYOUT = () => import('/@/views/layouts/index.vue')
export const EXCEPTION_COMPONENT = () => import('/@/views/exception/index.vue')
