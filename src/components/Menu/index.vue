<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
    :router="true"
  >
    <Render :menuData="menuData" />
  </el-menu>
</template>

<script lang="ts" setup>
  import { useApp } from '/@/store/app'
  import Render from './components/Render'
  import { staticMenu } from './config'
  import { AppRouteModule } from '/@/router/constant'
  let menuData = ref<Array<AppRouteModule>>([])
  menuData.value = staticMenu as Array<AppRouteModule>
  const appStore = useApp()
  console.log(appStore)

  const isCollapse = computed(() => appStore.getIsCollapse)
  const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  const handleClose = (key: string, keyPath: string[]) => {
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
