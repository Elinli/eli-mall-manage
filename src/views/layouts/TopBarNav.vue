<template>
  <div class="topbar-nav">
    <div class="icon left" @click="onClickTransition('pre')"> <i-ep-arrow-left-bold /></div>
    <div class="scroll-wrapper" ref="scrollRef">
      <div class="scroll-content">
        <div
          class="scroll-item"
          v-for="item in dataSource.list"
          :key="item.key"
          @click="onClickBarItem(item)"
        >
          <div class="item-box">
            {{ item }}
            <div class="icon close" @click.stop="onClickClose(item)"><i-ep-close /></div>
          </div>
        </div>
      </div>
    </div>

    <div class="icon right" @click="onClickTransition('next')"> <i-ep-arrow-right-bold /> </div>
  </div>
</template>
<script setup lang="ts">
  import BScroll from '@better-scroll/core'
  const scrollRef: any = ref(null)
  let bs: any = ref()
  const reg = /\((.+?)\)/g
  onMounted(() => {
    // console.log({ el: scrollRef.value })
    bs.value = new BScroll(scrollRef.value, {
      scrollX: true,
      probeType: 3, // listening scroll event
      bounce: false,
      useTransition: false,
    })
  })
  function onClickClose(item: any) {
    console.log('onClickClose', item)
    dataSource.list = dataSource.list.filter((fltItem) => fltItem.key !== item.key)
    bs.value.refresh()
  }
  function onClickBarItem(item: any) {
    console.log('onClickBarItem', item)
  }

  function onClickTransition(type: string) {
    const firstChild = scrollRef.value.firstChild
    const compStyles = window.getComputedStyle(firstChild)
    const regRlt = compStyles.getPropertyValue('transform').match(reg)
    const items = document.getElementsByClassName('scroll-item')
    const totalWidth = Array.from(items).reduce((pre, cur: any) => {
      return pre + cur.offsetWidth
    }, 0)
    let scrollTo = 0
    if (regRlt) {
      const rltSlt = regRlt[0].split(',')
      const translateX = Number(rltSlt[rltSlt.length - 4])
      if (type === 'pre') {
        if (translateX === 0) return
        scrollTo = translateX + scrollRef.value.clientWidth - 10
      } else {
        if (Math.abs(translateX + (totalWidth - scrollRef.value.clientWidth)) < 10) {
          return
        } else {
          if (Math.abs(translateX) > totalWidth - scrollRef.value.clientWidth) {
            return
          }
          scrollTo = translateX - scrollRef.value.clientWidth + 100
        }
      }
    } else {
      if (type === 'pre') return
      scrollTo = 0 - scrollRef.value.clientWidth + 10
    }
    bs.value.scrollTo(scrollTo, 0, 300, undefined, {})
  }

  const dataSource = reactive<{ list: any[] }>({
    list: [],
  })
  dataSource.list = new Array(12).fill(0).map((item, index) => {
    return {
      key: index + 1 + item,
      value: index + 1 + item,
    }
  })
  console.log(dataSource.list)
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
    .scroll-wrapper {
      position: relative;
      width: 90%;
      white-space: nowrap;
      overflow: hidden;
      .scroll-content {
        display: inline-block;
        padding-right: 127px;
        .scroll-item {
          font-size: 14px;
          display: inline-block;
          padding: 0;
          .item-box {
            @include justifyBetween;
            padding: 0 4px 0 8px;
            height: 28px;
            border: 1px solid $gray;
            box-sizing: border-box;
            border-bottom: none;
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
    }
  }
</style>
