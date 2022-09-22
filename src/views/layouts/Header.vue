<template>
  <div class="header-content">
    <div class="logo">
      <eli-svg-icon name="logo" width="120px" height="28px" />
      &nbsp;
      <eli-svg-icon
        @click="toggleCollapse"
        :name="isCollapse ? 'menu-fold' : 'menu-unfold'"
        width="20px"
        height="20px"
      />
    </div>

    <div class="operation-area">
      <Search />
      <Fullscreen />
      <Language />
      <UserInfo />
      <span>{{ t('common.searchText') }}</span>
      <span>{{ t('routes.system.charts.googleMap') }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { useApp } from '../../store/modules/app'
  import { Search, Fullscreen, Language, UserInfo } from './components'
  import { useI18n } from '/@/hooks/useI18n'
  const { t } = useI18n()

  const appStore = useApp()

  const isCollapse = computed({
    get: () => {
      return appStore.getIsCollapse
    },
    set: (val: any) => {
      appStore.setIsCollapse(val)
    },
  })

  function toggleCollapse() {
    isCollapse.value = !isCollapse.value
  }
</script>
<style lang="scss">
  .header-content {
    height: 48px;
    @include justifyBetween;
    .logo {
      cursor: pointer;
    }
    .operation-area {
      .el-button {
        color: var(--el-button-text-color);
        border-radius: 0;
        padding: 0 8px;
        height: $p48;
        font-weight: 700;
        margin: 0;

        &:focus {
          background-color: $white;
        }
        &:hover {
          background-color: var(--el-color-primary-light-9);
        }
      }
    }
  }
</style>
