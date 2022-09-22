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
  const localeStore = useLocale()
  const locale = computed(() => (localeStore.getLocale.toLowerCase() === 'zh-cn' ? zhCn : en))
</script>
