<template>
  <el-dialog
    v-model="dialogVisible"
    width="800px"
    destroy-on-close
    center
    custom-class="lock-dialog"
    :fullscreen="true"
  >
    <template #header="{ titleId, titleClass }">
      <div class="my-header">
        <h4 :id="titleId" :class="titleClass"
          ><span v-for="item in 4" :key="item" class="lock-key"><i-ep-key /></span> ==={{
            title
          }}=== <span v-for="item in 4" :key="item" class="lock-key"><i-ep-key /></span
        ></h4>
      </div>
    </template>
    <div class="lock-content">
      <div class="left content-item">
        <span class="time">{{ hours }}</span>
      </div>
      <div class="divide">:</div>
      <div class="right content-item">
        <span class="time">{{ minutes }}</span>
      </div>
    </div>
    <template #footer>
      <span class="dialog-footer">
        {{ dayjs(new Date()).format('YYYY/MM/DD') }} &nbsp; &nbsp;星期{{ weeks[date.get('day')] }}
        <el-button text @click="onClickClose">close</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
  import dayjs from 'dayjs'
  import { useApp } from '/@/store/app'
  const weeks = ref({
    1: '一',
    2: '二',
    3: '三',
    4: '四',
    5: '五',
    6: '六',
    7: '天',
  })
  const date = dayjs()
  const hours = computed(() => {
    return date.get('h')
  })
  const minutes = computed(() => {
    return date.get('m')
  })

  const props = defineProps({
    title: {
      type: String,
      default: () => '屏幕已锁定',
    },
  })
  const { title } = toRefs(props)
  const appStore = useApp()
  const dialogVisible = computed({
    set: (value) => {
      appStore.setLockScreen(value)
    },
    get: () => {
      return appStore.getLockScreen
    },
  })
  const emits = defineEmits(['dialog-callback'])
  console.log(emits)
  function onClickClose() {
    emits('dialog-callback')
  }
</script>
<style lang="scss">
  .el-dialog.lock-dialog {
    background-color: black;
    border-radius: none;
    display: flex;
    flex-direction: column;
    .el-dialog__header {
      .el-dialog__title {
        color: var(--el-fill-color-extra-light);
        @include justifyCenter;
        .lock-key {
          font-size: 14px;
          font-weight: 700;
          @include alignCenter;
        }
      }
      .el-dialog__headerbtn {
        display: none;
      }
    }
    .el-dialog__body {
      flex-grow: 1;
      @include alignCenter;
      .lock-content {
        display: flex;
        flex-grow: 1;
        @include justifyCenter;
        .divide {
          color: var(--el-color-info-light-3);
          height: 300px;
          @include flexCenter;
          font-size: 126px;
        }
        .content-item {
          width: 300px;
          height: 300px;
          background-color: var(--el-color-info-dark-2);
          opacity: 0.3;
          border-radius: 20px;
          color: var(--el-color-info-light-3);
          font-size: 28px;
          @include flexCenter;
          &.left {
            margin-right: 40px;
          }
          &.right {
            margin-left: 40px;
          }
          .time {
            transform: scale(1.5);
            font-size: 126px;
            color: var(--el-color-info-light-9);
          }
        }
      }
    }
    .el-dialog__footer {
      padding: 0;
      .dialog-footer {
        color: #f7f5ef;
      }
    }
  }
</style>
