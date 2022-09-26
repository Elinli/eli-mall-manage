<template>
  <el-menu
    :default-active="currentActiveRoute"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    :router="true"
    @select="handleSelect"
  >
    <Render :menuData="menuData" />
  </el-menu>
</template>

<script lang="ts" setup>
  import { useApp } from '../../store/modules/app'
  import Render from './components/Render'
  import { asyncRoutes } from '/@/router/routes/index'
  import { staticMenu } from './config'
  import { AppRouteModule } from '/@/router/constant'
  import { useRouter } from 'vue-router'
  import { getMenus } from '/@/router/menu'
  console.log(staticMenu, asyncRoutes)

  let menuData = ref<Array<AppRouteModule>>([])

  menuData.value = getMenus() as unknown as AppRouteModule[]
  const appStore = useApp()
  const isCollapse = computed(() => appStore.getIsCollapse)

  const router = useRouter()
  const currentActiveRoute = computed(() => {
    console.log(router.currentRoute.value)
    const matched = router.currentRoute.value.matched
    if (matched[0].children.length <= 1) {
      return matched[0].path
    }
    if (router.currentRoute.value.meta.currentActiveMenu) {
      return router.currentRoute.value.meta.currentActiveMenu
    } else {
      return router.currentRoute.value.path
    }
  })

  const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
</script>

<style lang="scss">
  :deep(.el-menu) {
    border: none;
    flex-grow: 1;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    height: 100%;
  }
</style>
