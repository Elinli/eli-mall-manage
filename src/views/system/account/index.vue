<template>
  <div>account</div>
  <el-button @click="onClick">地磁场错错</el-button>
</template>

<script lang="ts" setup>
  const router = useRouter()
  function onClick() {
    router.push('/system/account_detail/1')
  }
</script>

<style scoped lang="scss"></style>
