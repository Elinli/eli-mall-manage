<template>
  <div class="common-layout">
    <el-container class="container-style">
      <el-header><Header /></el-header>
      <el-container>
        <el-aside
          :width="!appStore.getIsCollapse ? '200px' : '64px'"
          :class="{
            'animation-open': !appStore.getIsCollapse,
            'animation-close': appStore.getIsCollapse,
          }"
        >
          <Menu />
        </el-aside>
        <el-container>
          <el-main>
            <div class="page-topnav" v-if="true">
              <TopBarNav />
              <!-- <Breadcrumbs /> -->
            </div>
            <div class="page-content">
              <h1 v-for="item in 2" :key="item">
                {{ item }}
              </h1>
              Main{{ a }}{{ b }}
              <el-table mb-1 :data="[]" />
              <el-pagination :total="100" />
              <router-view />
            </div>
          </el-main>
          <el-footer>
            Copyright © 2013-2022 Eli eli.hero.com All Rights Reserved. 备案号：川ICP备15874534号-1
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
  import Header from './Header.vue'
  import TopBarNav from './TopBarNav.vue'
  // import Breadcrumbs from './Breadcrumbs.vue'
  import Menu from '/@/components/Menu/index.vue'
  import { useApp } from '/@/store/app'
  const appStore = useApp()
  console.log(appStore)
  const a = ref(1)
  const b = reactive([])
</script>

<style scoped lang="scss">
  .common-layout {
    flex-grow: 1;
    .el-container.container-style {
      height: 100vh;
      .el-header {
        height: $p48;
        padding: 0 16px 0 20px;
        box-shadow: 0px 2px 5px 1px $gray;
      }
      .el-container {
        .el-aside {
          @include yScroll;
          height: calc(100vh - 48px);
          overflow-x: hidden;
          box-shadow: 2px 5px 5px 1px $gray;
          &.animation-open {
            animation: animationOpen 0.3s 1;
            /*Safari 和 Chrome:*/
            -webkit-animation: animationOpen 0.3s 1;
          }
          &.animation-close {
            animation: animationClose 0.3s 1;
            /*Safari 和 Chrome:*/
            -webkit-animation: animationClose 0.3s 1;
          }
        }
        .el-container {
          width: 100%;
          @include yScroll;
          height: calc(100vh - 48px);
          overflow-x: hidden;
          .el-footer {
            font-size: 12px;
            color: $darkgray;
            height: $p32;
            @include flexCenter;
          }
          .el-main {
            padding: 0;
            .page-topnav {
              overflow-y: hidden;
              box-sizing: border-box;
              // border-bottom: 1px solid $gray;
              display: flex;

              flex-direction: column;
            }
            .page-content {
              padding: 16px 16px 8px 16px;
              @include yScroll;
              height: calc(100vh - 156px);
              flex-grow: 1;
            }
          }
        }
      }
    }
  }
  @keyframes animationOpen {
    from {
      width: 64px;
    }
    to {
      width: 200px;
    }
  }

  /*Safari 和 Chrome:*/
  @-webkit-keyframes animationOpen {
    from {
      width: 64px;
    }
    to {
      width: 200px;
    }
  }
  @keyframes animationClose {
    from {
      width: 200px;
    }
    to {
      width: 64px;
    }
  }

  /*Safari 和 Chrome:*/
  @-webkit-keyframes animationClose {
    from {
      width: 200px;
    }
    to {
      width: 64px;
    }
  }
</style>
