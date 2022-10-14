<script lang="ts" setup>
import HelloWorld from './HelloWorld.vue';
import { VnContainer } from '@/index';
</script>

<template>
  <HelloWorld />
  <VnContainer />
</template>

<style lang="less">
body {
  font-family: "Inter", ui-sans-serif, system-ui, -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
  background-color: #050505;
  color: #bbb;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
