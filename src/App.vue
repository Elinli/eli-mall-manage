<script lang="ts" setup>
  const router = useRouter()
  console.log(router)
  const r: ViteEnv = {} as unknown as ViteEnv
  console.log('sdfsdf', r)
  const onClick = () => {
    router.push({
      path: '/category',
    })
  }
</script>

<template>
  <el-button @click="onClick">点击</el-button>
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
