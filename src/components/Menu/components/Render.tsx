import { toRaw } from 'vue'
import { ElMenuItem } from 'element-plus'
import { ElSubMenu } from 'element-plus'
import SvgIcon from '/@/components/SvgIcon/index.vue'
import { AppRouteModule } from '/@/router/constant'

export default defineComponent({
  name: 'Render',
  props: {
    menuData: {
      type: Array,
      default: () => [],
    },
  },
  setup(this, props, _ctx) {
    const menuData = toRaw(props).menuData as unknown as AppRouteModule[]
    const renderSubmenu = (menuItem: AppRouteModule) => {
      const slots = {
        title: () => {
          return (
            <>
              <SvgIcon name={menuItem.icon} style={{ marginRight: '10px' }} />
              <span>{menuItem.title}</span>
            </>
          )
        },
      }
      const children: AppRouteModule[] = menuItem.children as AppRouteModule[]
      return (
        <ElSubMenu index={menuItem.path} v-slots={slots}>
          {renderMenu(children)}
        </ElSubMenu>
      )
    }
    const renderMenuItem = (menuItem: AppRouteModule) => {
      return (
        <ElMenuItem index={menuItem.path}>
          <SvgIcon name={menuItem.icon} style={{ marginRight: '10px' }} />
          <span>{menuItem.title}</span>
        </ElMenuItem>
      )
    }
    const renderMenu = (menuDataProps: AppRouteModule[] | undefined) => {
      return menuDataProps?.map((menuItem: AppRouteModule) => {
        if (menuItem.hiddenChildren) {
          return renderMenuItem(menuItem)
        } else {
          return renderSubmenu(menuItem)
        }
      })
    }
    const rlt = renderMenu(menuData)
    return () => <>{rlt}</>
  },
})
