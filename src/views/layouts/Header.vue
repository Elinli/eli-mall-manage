<template>
  <div class="header-content">
    <div class="logo">
      <eli-svg-icon name="logo" width="120px" height="28px" />
      &nbsp;
      <eli-svg-icon
        @click="handleClickCollapse"
        name="menu-fold"
        width="20px"
        height="20px"
        v-if="isCollapse"
      />
      <eli-svg-icon
        name="menu-unfold"
        width="20px"
        height="20px"
        color="#f4f4"
        v-if="!isCollapse"
        @click="handleClickCollapse"
      />
    </div>

    <div>
      <el-button ref="buttonRef" v-click-outside="onClickOutside">Click me</el-button>

      <el-popover ref="popoverRef" :virtual-ref="buttonRef" trigger="hover" virtual-triggering>
        <ul class="language-box">
          <li class="language-item is-active">简体中文</li>
          <li class="language-item">English</li>
        </ul>
      </el-popover>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { useApp } from '/@/store/app'
  import { ClickOutside as vClickOutside } from 'element-plus'
  const buttonRef = ref()
  const popoverRef = ref()
  const onClickOutside = () => {
    unref(popoverRef).popperRef?.delayHide?.()
  }
  const appStore = useApp()
  console.log(appStore)

  const isCollapse = computed({
    get: () => {
      return appStore.getIsCollapse
    },
    set: (val) => {
      appStore.setIsCollapse(val)
    },
  })
  function handleClickCollapse() {
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
  }
</style>
