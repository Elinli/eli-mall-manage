<template>
  <el-button class="search icon-button" text @click="onClickSearch">
    <eli-svg-icon name="search" width="20px" height="20px" />
  </el-button>
</template>
<script lang="ts" setup>
  import { encrypt, decrypt } from 'crypto-js/aes'
  function onClickSearch() {
    console.log('search', encrypt, decrypt)
  }
</script>
