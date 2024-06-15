<template>
  <svg aria-hidden="true" class="svg-icon" :width="props.width === '' ? props.size : props.width"
    :height="props.height === '' ? props.size : props.height">
    <use :xlink:href="symbolId" :fill="props.color" />
  </svg>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  prefix: {
    type: String,
    default: 'icon'
  },
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: '#fff'
  },
  size: {
    type: String,
    default: '16px'
  },
  width: {
    type: String,
    default: ''
  },
  height: {
    type: String,
    default: ''
  }
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>