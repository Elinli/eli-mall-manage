import { toRaw } from 'vue'
import { ElMenuItem, ElSubMenu } from 'element-plus'
import SvgIcon from '/@/components/SvgIcon/index.vue'
import { AppRouteModule } from '/@/router/constant'
import { useI18n } from '/@/hooks/useI18n'
export default defineComponent({
  name: 'Render',
  props: {
    menuData: {
      type: Array,
      default: () => [],
    },
  },
  setup(this, props, _ctx) {
    const { t } = useI18n()
    const menuData = toRaw(props).menuData as unknown as AppRouteModule[]
    const renderSubmenu = (menuItem: AppRouteModule | any) => {
      const slots = {
        title: () => {
          return (
            <>
              <SvgIcon name={menuItem.icon || ''} style={{ marginRight: '10px' }} />
              <span>{t(menuItem.meta.title) || ''}</span>
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
    const renderMenuItem = (menuItem: AppRouteModule | any) => {
      return (
        <ElMenuItem index={menuItem.path}>
          <SvgIcon name={menuItem.icon || ''} style={{ marginRight: '10px' }} />
          <span>{t(menuItem.meta.title) || ''}</span>
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
