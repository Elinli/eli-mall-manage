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
  import { useApp } from '/@/store/app'
  import Render from './components/Render'
  import { staticMenu } from './config'
  import { AppRouteModule } from '/@/router/constant'
  import { useRouter } from 'vue-router'

  let menuData = ref<Array<AppRouteModule>>([])
  menuData.value = staticMenu as Array<AppRouteModule>

  const appStore = useApp()
  const isCollapse = computed(() => appStore.getIsCollapse)

  const router = useRouter()
  const currentActiveRoute = computed(() => {
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
