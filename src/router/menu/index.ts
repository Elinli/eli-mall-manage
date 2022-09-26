import { AppRouteModule } from '/@/router/constant'
import { Menu } from '../types'
import { asyncRoutes } from '/@/router/routes/index'

export const getMenus = () => {
  const asyncRoutesRlt = asyncRoutes as Menu[]
  return filtetTypeMMenus(asyncRoutesRlt)
}

export const filtetTypeMMenus = (menus: Menu[]): Menu[] => {
  const mMenus = (tree: Menu[]) => {
    const rlt = tree?.filter((item: AppRouteModule | any) => {
      if (item.meta.type === 'M') {
        if (item?.children && item?.children.length) {
          const childrenMenu = item.children.filter(
            (citem: AppRouteModule | any) => citem.meta.type === 'M',
          )
          if (childrenMenu.length === 1 && item.redirect === item.children[0]?.path) {
            item.hiddenChildren = true
          } else item.children = mMenus(item.children as unknown as Menu[])
        } else {
          item.hiddenChildren = true
        }
        return true
      }
      return false
    })
    return rlt
  }
  joinParentPath(menus, '')
  return mMenus(menus) as Menu[]
}

function joinParentPath(menus: Menu[], parentPath = '') {
  for (let index = 0; index < menus.length; index++) {
    const menu = menus[index]

    if (!menu.path.startsWith('/')) {
      menu.path = `${parentPath}/${menu.path}`
    }
    if (menu?.children?.length) {
      joinParentPath(menu.children, menu.meta?.hidePathForChildren ? parentPath : menu.path)
    }
  }
}
