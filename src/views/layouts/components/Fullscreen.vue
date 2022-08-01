<template>
  <el-button @click="toggleFullscreen" class="fullscreen icon-button" text>
    <eli-svg-icon :name="!isFullscreen ? 'full-screen' : 'off-screen'" width="20px" height="20px" />
  </el-button>
</template>
<script lang="ts" setup>
  import { useFullscreen } from '@vueuse/core'
  const { toggle: toggleFullscreen, isFullscreen } = useFullscreen()
</script>
