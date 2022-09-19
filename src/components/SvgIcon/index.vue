<template>
  <svg aria-hidden="true" class="svg-icon" :width="props.width" :height="props.height">
    <use :xlink:href="symbolId" rel="external nofollow" :fill="props.color" />
  </svg>
</template>

<script setup>
  import { computed } from 'vue'
  const props = defineProps({
    prefix: {
      type: String,
      default: 'icon',
    },
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: 'red',
    },
    width: {
      type: String,
      default: '1.2em',
    },
    height: {
      type: String,
      default: '1.2em',
    },
  })
  const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>
