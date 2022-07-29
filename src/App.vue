<script lang="ts" setup>
  const router = useRouter()
  console.log(router)
  const r: ViteEnv = {} as unknown as ViteEnv
  console.log('sdfsdf', r)
  const onClick1 = () => {
    router.push({
      path: '/category',
    })
  }
  const onClick2 = () => {
    router.push({
      path: '/charts/echarts/pie',
    })
  }
  const onClick3 = () => {
    router.push({
      path: '/charts/echarts',
    })
  }
  const onClick4 = () => {
    router.push({
      path: '/charts/baiduMap',
    })
  }
  const onClick5 = () => {
    router.push({
      path: '/system/account',
    })
  }
  const onClick6 = () => {
    router.push({
      path: '/system/process',
    })
  }
</script>

<template>
  <el-button @click="onClick1">点击</el-button>
  <el-button @click="onClick2">点击</el-button>
  <el-button @click="onClick3">点击</el-button>
  <el-button @click="onClick4">点击</el-button>
  <el-button @click="onClick5">点击</el-button>
  <el-button @click="onClick6">点击</el-button>
  <router-view />
</template>

<style scoped>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }

  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
</style>
