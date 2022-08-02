<template>
  <el-dialog
    v-model="visible"
    title="Fddd"
    width="800px"
    destroy-on-close
    center
    custom-class="lock-dialog"
    :fullscreen="true"
  >
    <span
      >Notice: before dialog gets opened for the first time this node and the one bellow will not be
      rendered</span
    >
    <div>
      <strong>Extra content (Not rendered)</strong>
    </div>
    <template #footer>
      <span class="dialog-footer">
        {{ new Date() }}
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
  import { useApp } from '/@/store/app'
  const appStore = useApp()
  const visible = computed({
    set: (value) => {
      appStore.setLockScreen(value)
    },
    get: () => {
      return appStore.getLockScreen
    },
  })
  const emits = defineEmits(['dialog-callback'])
  console.log(emits)
</script>
<style lang="scss">
  .el-dialog.lock-dialog {
    background-color: black;
    border-radius: none;
    .el-dialog__header {
      display: none;
    }
    .dialog-footer {
      color: #f7f5ef;
    }
  }
</style>
