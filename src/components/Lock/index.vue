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
        <h4 :id="titleId" :class="titleClass">{{ title }} </h4>
      </div>
    </template>
    <div class="lock-content">
      <div class="left content-item">
        <span class="time">{{ hours }}</span>
      </div>
      <div class="divide">:</div>
      <div class="right content-item">
        <span class="time">{{ minutes }}</span>
        <div class="second">{{ seconds }}</div>
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
  import { useApp } from '../../store/modules/app'
  const weeks = ref({
    1: '一',
    2: '二',
    3: '三',
    4: '四',
    5: '五',
    6: '六',
    0: '天',
  })

  const date = dayjs()
  const hours = ref<string | number>()
  const minutes = ref<string | number>()
  const seconds = ref<string | number>()
  const timer = ref<NodeJS.Timer>()
  timer.value = setInterval(() => {
    const h = dayjs().get('h')
    const m = dayjs().get('m')
    const s = dayjs().get('s')
    hours.value = h > 9 ? h : '0' + h
    minutes.value = m > 9 ? m : '0' + m
    seconds.value = s > 9 ? s : '0' + s
  }, 1000)
  const props = defineProps({
    title: {
      type: String,
      default: () => '',
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
          animation: animationHidden 1s infinite;
          /*Safari 和 Chrome:*/
          -webkit-animation: animationHidden 1s infinite;
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
          position: relative;
          &.left {
            margin-right: 40px;
          }
          &.right {
            margin-left: 40px;
          }
          .time {
            transform: scale(1.5);
            font-size: 126px;
            color: $white;
          }
          .second {
            position: absolute;
            right: 0px;
            top: 50%;
            transform: translate(-50%, -50%);
            color: $white;
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
  @keyframes animationHidden {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
</style>
