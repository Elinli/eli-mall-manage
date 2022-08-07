<template>
  <el-sub-menu :index="submenu.path">
    <template #title> <ItemContent :item="submenu" /></template>
    <el-menu-item-group>
      <el-menu-item
        :index="menuItem.path"
        v-for="menuItem in submenu.children"
        :key="menuItem.path"
      >
        <RenderMenu :menuItem="menuItem" />
      </el-menu-item>
    </el-menu-item-group>
  </el-sub-menu>
</template>

<script lang="ts" setup>
  import RenderMenu from './RenderMenu.vue'
  import ItemContent from './ItemContent.vue'
  defineProps({
    submenu: {
      type: Object,
      default: () => ({}),
    },
  })
</script>

<style lang="scss">
  .el-sub-menu {
    &.is-active {
      .el-sub-menu__title {
        color: var(--el-menu-active-color);
        .menu-title {
          color: var(--el-menu-active-color);
        }
      }
    }
    .el-sub-menu__title {
      display: flex;
      vertical-align: middle;
      .item-content {
        flex-grow: 1;
        @include alignCenter;
      }
    }
  }
</style>
