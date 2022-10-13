<template>
  <div class="app-container">
    <el-config-provider :locale="locale">
      <router-view />
    </el-config-provider>
  </div>
</template>

<script lang="ts" setup>
  import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
  import en from 'element-plus/dist/locale/en.mjs'
  import { useLocale } from './store/modules/locale'
  import { useLoadRoutes } from '/@/store/modules/loadRoutes'
  import { useApp } from '/@/store/modules/app'

  const localeStore = useLocale()
  const locale = computed(() => (localeStore.getLocale.toLowerCase() === 'zh-cn' ? zhCn : en))

  const loadRoutesStore = useLoadRoutes()
  const appStore = useApp()
  onMounted(() => {
    window.addEventListener('beforeunload', function () {
      loadRoutesStore.setisDynamicAddedRoute(true)
      console.log('before unload', loadRoutesStore, appStore)
      this.localStorage.setItem('key', JSON.stringify(appStore))
    })
  })
</script>

<style lang="scss"></style>
