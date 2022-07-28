<template>
  <div
    >{{ a }}{{ b }}-------
    <ElButton @click="onClick">dianc</ElButton>
  </div>
  <router-view />
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue'
  const a = reactive([])
  const b = ref(1)
  const router = useRouter()
  function onClick() {
    router.push('/')
  }
</script>

<style scoped lang="scss"></style>
