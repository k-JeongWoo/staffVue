<template>
  <div id="app" class="wrap">
    <router-view name="asid"></router-view>
    <router-view name="default" :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'app',
  mounted () {
    window.addEventListener('unload', this.unLoadEvent)
  },
  methods: {
    unLoadEvent: function handler (event) {
      // if (window.performance.navigation.type !== 1) {
      //   axios.post(`/api/v1/api/auth/loginout`).then(res => { console.log(res) }).catch(function (error) { console.log(error) })
      // } else {
      //   console.log(456)
      // }
      if (event.keyCode === 116 || (event.ctrlKey === true && event.keyCode === 82)) {
        console.log(1)
      } else {
        axios.post(`/api/v1/api/auth/loginout`).then(res => { console.log(res) }).catch(function (error) { console.log(error) })
      }
      event.preventDefault() // If you prevent default behavior in Mozilla Firefox prompt will always be shown
      // Chrome requires returnValue to be set
      event.returnValue = ''
    }
  }
}
</script>

<style>
@import './assets/ko/css/common.css';
@import './assets/ko/css/contents.css';
@import './assets/ko/css/reset.css';
</style>
