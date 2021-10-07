<template>
  <div id="app" class="wrap">
    <router-view name="asid"></router-view>
    <router-view name="default" :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import './assets/ko/css/common.css';
@import './assets/ko/css/contents.css';
@import './assets/ko/css/reset.css';
</style>
