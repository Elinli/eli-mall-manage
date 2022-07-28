import { AppRouteRecordRaw } from './constant'
import { ROUTERVIEW } from './constant'
const LayoutMap = new Map<string, () => Promise<typeof import('*.vue')>>()

LayoutMap.set('ROUTERVIEW', ROUTERVIEW)
type Modules = Record<string, () => Promise<Recordable>>

let dynamicViewsModules: Modules
function dynamicImport(dynamicViewsModules: Modules, component: string) {
  const keys = Object.keys(dynamicViewsModules)

  const matchKeys = keys.filter((key) => {
    const k = key.replace('../views', '')
    const startFlag = component.startsWith('/')
    const endFlag = component.endsWith('.vue') || component.endsWith('.tsx')
    const startIndex = startFlag ? 0 : 1
    const lastIndex = endFlag ? k.length : k.lastIndexOf('.')
    const subVmpt = k.substring(startIndex, lastIndex)
    console.log(subVmpt)
    return subVmpt === component
  })
  if (matchKeys?.length === 1) {
    const matchKey = matchKeys[0]
    return dynamicViewsModules[matchKey]
  } else if (matchKeys?.length > 1) {
    console.error(
      'Please do not create `.vue` and `.TSX` files with the same file name in the same hierarchical directory under the views folder. This will cause dynamic introduction failure',
    )
    return
  } else {
    console.error(
      '在src/views/下找不到`' + component + '.vue` 或 `' + component + '.tsx`, 请自行创建!',
    )
  }
}

export const dynamicImportRoutes = (routes: AppRouteRecordRaw[] | undefined) => {
  if (!routes) return

  dynamicViewsModules = dynamicViewsModules || import.meta.glob('../views/**/*.{vue,tsx}')

  routes.forEach((item) => {
    const { component, children } = item
    if (component) {
      // 父级组件 [router-view]
      const layoutFound = LayoutMap.get(component.toUpperCase())
      if (layoutFound) {
        item.component = dynamicImport(dynamicViewsModules, 'default/index')
      } else {
        item.component = dynamicImport(dynamicViewsModules, component as string)
      }
    }
    children && dynamicImportRoutes(children)
  })
}
