<template>
  <div class="topbar-nav">
    <div class="icon left" @click="onClickTransition('pre')"> <i-ep-arrow-left-bold /></div>
    <div
      :class="['scroll-wrapper', appStore.getIsCollapse ? 'width-max' : 'width-min']"
      ref="scrollRef"
    >
      <div class="scroll-content">
        <div
          class="scroll-item"
          v-for="(item, index) in navbar"
          :key="item.path"
          @click="onClickBarItem(item, index)"
        >
          <div
            :class="{ 'item-box': true, 'is-active': item.path === router.currentRoute.value.path }"
          >
            {{ t(item.meta.title) }}
            <div class="icon close" @click.stop="onClickClose(item, index)"><i-ep-close /></div>
          </div>
        </div>
      </div>
    </div>

    <div class="icon right" @click="onClickTransition('next')"> <i-ep-arrow-right-bold /> </div>
  </div>
</template>
<script setup lang="ts">
  import BScroll from '@better-scroll/core'
  import { useApp } from '../../store/modules/app'
  import { useConfigI18n } from '/@/hooks/useI18n'
  const { t } = useConfigI18n()
  const router = useRouter()
  const appStore = useApp()
  const route = useRoute()
  const scrollRef: any = ref(null)
  let bs: any = ref()
  const reg = /\((.+?)\)/g
  onMounted(() => {
    bs.value = new BScroll(scrollRef.value, {
      scrollX: true,
      probeType: 3,
      bounce: false,
      useTransition: false,
    })
    const initFocusItem = navbar.value.find((item: any) => item.path === route.path)
    const initFocusIndex = navbar.value.findIndex((item: any) => item.path === route.path)
    onClickBarItem(initFocusItem, initFocusIndex)
  })

  function onClickClose(item: any, index: number) {
    if (navbar.value.length === 1) return
    const preItem = navbar.value.filter(
      (navitem, navIndex) => navitem.path !== item.path && navIndex === index - 1,
    )
    setTimeout(() => {
      appStore.setNavbar(item, 'delete')
      if (item.path !== route.path) {
        return
      } else router.push({ path: preItem[0].path })
    }, 0)
  }

  function onClickBarItem(item: any, index: number) {
    const els = document.getElementsByClassName('scroll-item')
    const firstChild = scrollRef.value.firstChild
    const compStyles = window.getComputedStyle(firstChild)
    const regRlt = compStyles.getPropertyValue('transform').match(reg)
    if (regRlt) {
      const rltSlt = regRlt[0].split(',')
      const translateX = Number(rltSlt[rltSlt.length - 4])

      if (index === 0 && translateX !== 0) {
        bs.value.scrollTo(0, 0, 300, undefined, {})
      } else {
        const sliceRltPre = Array.from(els).slice(0, index)
        const totalWidthPre = sliceRltPre.reduce((pre, cur: any) => {
          return pre + cur.offsetWidth
        }, 0)
        const sliceRltNext = Array.from(els).slice(0, index + 1)
        const totalWidthNext = sliceRltNext.reduce((pre, cur: any) => {
          return pre + cur.offsetWidth
        }, 0)
        if (Math.abs(translateX) > totalWidthPre) {
          bs.value.scrollTo(0 - totalWidthPre + 30, 0, 100, undefined, {})
        } else if (Math.abs(translateX) + scrollRef.value.clientWidth < totalWidthNext) {
          bs.value.scrollTo(
            scrollRef.value.clientWidth - totalWidthNext - 30,
            0,
            100,
            undefined,
            {},
          )
        }
      }
    } else {
      const sliceRltNext = Array.from(els).slice(0, index + 1)
      const totalWidthNext = sliceRltNext.reduce((pre, cur: any) => {
        return pre + cur.offsetWidth
      }, 0)
      if (scrollRef.value.clientWidth < totalWidthNext) {
        bs.value.scrollTo(scrollRef.value.clientWidth - totalWidthNext - 30, 0, 100, undefined, {})
      }
    }
    router.push({ path: item.path })
  }

  function onClickTransition(type: string) {
    const firstChild = scrollRef.value.firstChild
    const compStyles = window.getComputedStyle(firstChild)
    const regRlt = compStyles.getPropertyValue('transform').match(reg)
    const els = document.getElementsByClassName('scroll-item')
    const totalWidth = Array.from(els).reduce((pre, cur: any) => {
      return pre + cur.offsetWidth
    }, 0)
    let scrollTo = 0
    if (regRlt) {
      const rltSlt = regRlt[0].split(',')
      const translateX = Number(rltSlt[rltSlt.length - 4])
      if (type === 'pre') {
        if (translateX === 0) return
        console.log('pre', translateX)
        const scrollWidth = translateX + scrollRef.value.clientWidth - 30
        scrollTo = scrollWidth >= 0 ? 0 : scrollWidth
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
      scrollTo = 0 - scrollRef.value.clientWidth + 30
    }
    bs.value.scrollTo(scrollTo, 0, 300, undefined, {})
  }

  const navbar = computed(() => {
    return appStore.getNavbar
  })

  watch(
    () => route.path,
    () => {
      bs.value.refresh()
      const firstChild = scrollRef.value.firstChild
      const compStyles = window.getComputedStyle(firstChild)
      const regRlt = compStyles.getPropertyValue('transform').match(reg)
      let translateX = 0
      if (regRlt) {
        const rltSlt = regRlt[0].split(',')
        translateX = Number(rltSlt[rltSlt.length - 4])
      }
      const els = document.getElementsByClassName('scroll-item')
      const findIndex = navbar.value.findIndex((item) => item.path === route.path)
      const sliceRlt = Array.from(els).slice(0, findIndex)
      const sliceRltNext = Array.from(els).slice(0, findIndex + 1)
      const totalWidth = Array.from(sliceRlt).reduce((pre, cur: any) => {
        return pre + cur.offsetWidth
      }, 0)
      const totalWidthNext = Array.from(sliceRltNext).reduce((pre, cur: any) => {
        return pre + cur.offsetWidth
      }, 0)
      if (
        translateX !== 0 &&
        Math.abs(translateX) < totalWidth &&
        totalWidthNext < scrollRef.value.clientWidth
      ) {
        return
      } else if (totalWidthNext < scrollRef.value.clientWidth && translateX === 0) {
        return
      } else if (totalWidthNext > scrollRef.value.clientWidth) {
        bs.value.scrollTo(
          0 - totalWidthNext + scrollRef.value.clientWidth - 30,
          0,
          300,
          undefined,
          {},
        )
        return
      }
      bs.value.scrollTo(0 - totalWidth + 30, 0, 300, undefined, {})
    },
  )
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
      // margin: 0 16px;

      white-space: nowrap;
      overflow: hidden;
      &.width-max {
        width: calc(100vw - 134px);
      }
      &.width-min {
        width: calc(100vw - 290px);
      }
      .scroll-content {
        display: inline-block;
        padding-right: 127px;
        .scroll-item {
          font-size: 14px;
          display: inline-block;
          padding: 0;
          .item-box {
            cursor: pointer;
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
            &.is-active {
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
