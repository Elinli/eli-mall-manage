<template>
  <div class="item-content">
    <eli-svg-icon :name="item.icon" />
    <span :class="['menu-title', item.icon ? 'mglt16' : '']"> {{ item.title }}</span>
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps({
    item: {
      type: Object,
      default: () => ({}),
    },
  })
  const { item } = toRaw(props)
</script>

<style lang="scss">
  .item-content {
    .menu-title {
      margin-left: -16px;
      &.mglt16 {
        margin-left: 16px;
      }
    }
  }
</style>
