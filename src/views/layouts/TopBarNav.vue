<template>
  <div class="topbar-nav">
    <div class="icon left"> <i-ep-arrow-left-bold /></div>
    <div class="bar-box">
      <div class="bar-item" v-for="item in 12" :key="item" @click="onClickBarItem(item)"
        >{{ item }}
        <div class="icon close" @click.stop="onClickClose(item)"><i-ep-close /></div>
      </div>
    </div>

    <div class="icon right"> <i-ep-arrow-right-bold /> </div>
  </div>
</template>
<script setup lang="ts">
  function onClickClose(item: any) {
    console.log('onClickClose', item)
  }
  function onClickBarItem(item: any) {
    console.log('onClickBarItem', item)
  }
</script>
<style lang="scss">
  .topbar-nav {
    height: 40px;
    font-size: 14px;
    padding: 0 8px !important;
    box-sizing: border-box;
    border-bottom: 1px solid $gray;
    @include alignBaseline;
    .icon {
      height: 28px;
      @include alignCenter;
      cursor: pointer;
      color: var(--el-color-info-dark-2);
      &.right,
      &.left {
        &:hover {
          background-color: $gray;
        }
      }
      &.close {
        transform: scale(0.8);
        margin-left: 4px;

        // &:hover {
        //   color: var(--el-color-error);
        // }
      }
    }
    .bar-box {
      flex-grow: 1;
      display: flex;
      padding: 0 8px;
      flex-wrap: nowrap;
      overflow: hidden;
      box-sizing: border-box;
      cursor: pointer;
      .bar-item {
        padding: 0 4px 0 8px;
        height: 28px;
        border: 1px solid $gray;
        box-sizing: border-box;
        border-bottom: none;
        display: flex;
        margin-right: 2px;
        line-height: 28px;
        border-top-left-radius: $r4;
        border-top-right-radius: $r4;
        &:hover {
          border: 1px solid var(--el-color-primary);
          border-bottom: none;
          color: var(--el-color-primary);
        }
      }
    }
  }
</style>
