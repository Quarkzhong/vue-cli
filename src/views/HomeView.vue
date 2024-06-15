<template>
  <div :style="{ fontSize: `${px2rem(88)}px` }" class="home__container">
    test
  </div>
</template>
<script setup>
import { ref, inject } from 'vue'
const px2rem = inject('px2rem')
</script>
<style lang="less" scoped>
.home {
  &__container {
    height: 100%;
    width: 100%;
    position: relative;
  }
}
</style>