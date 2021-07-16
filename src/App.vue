<template>
  <div id="app" class="wrap">
    <router-view name="header"></router-view>
    <router-view name="leftMenu"></router-view>
    <router-view name="default"></router-view>
    <router-view name="footer"></router-view>
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
@import './assets/ko/css/ie9.css';
</style>
