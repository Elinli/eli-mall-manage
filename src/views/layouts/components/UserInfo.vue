<template>
  <el-dropdown @command="handleCommand" trigger="hover">
    <span class="el-dropdown-link">
      <eli-svg-icon name="user" width="20px" height="20px" />
      <el-divider direction="vertical" />
      <span class="user-name">张三封</span>
      <i-ep-arrow-down />
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          :command="item.command"
          v-for="item in commands"
          :key="item.command"
          :divided="item.divided"
        >
          <eli-svg-icon :name="item.icon" width="18px" height="18px" color="#e6e6" />
          <span class="label" style="margin-left: 8px"> {{ item.label }}</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <Dialog @dialog-callback="handleDialogCallback" />
</template>

<script lang="ts" setup>
  import Dialog from '/@/components/Lock/index.vue'
  import { useApp } from '../../../store/modules/app'
  const appStore = useApp()
  const handleCommand = (command: string | number | object) => {
    ElMessage(`click on item ${command}`)
    appStore.setLockScreen(true)
  }

  interface Command {
    command: string
    label: string
    divided: boolean
    icon: string
  }

  const commands = ref<Array<Command>>([
    {
      command: 'quit',
      label: '退出系统',
      divided: false,
      icon: 'quit',
    },
    {
      command: 'lock',
      label: '锁定屏幕',
      divided: true,
      icon: 'lock',
    },
  ])

  function handleDialogCallback() {
    appStore.setLockScreen(false)
  }
</script>
<style lang="scss">
  .el-dropdown {
    margin-left: 8px;
    vertical-align: middle;
    .el-dropdown-link {
      cursor: pointer;
      display: flex;
      align-items: center;
      &:hover {
        color: var(--el-color-primary);
      }
      .user-name {
        padding: 0 8px 0 0;
        vertical-align: middle;
      }
    }
  }
</style>
