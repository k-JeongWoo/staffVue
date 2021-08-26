// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueCookie from 'vue-cookie'
import AmCharts from 'amcharts3'
import AmSerial from 'amcharts3/amcharts/serial'
import dayjs from 'dayjs'
import axios from 'axios'

Vue.use(AmCharts)
Vue.use(AmSerial)
Vue.use(dayjs)

Vue.use(VueCookie)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.path === '/' || to.path === '/mainhome' || to.path === '/login') {
    next()
  } else {
    axios.get('/api/v1/api/emplystaff/emplystaffInfo')
      .then(function (response) {
        if (response.data.resultCode === 'error') {
          next('/login')
        } else {
          next()
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
