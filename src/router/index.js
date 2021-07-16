import Vue from 'vue'
import Router from 'vue-router'
import main from '@/router/main'
import auth from '@/router/auth'
import inquiry from '@/router/inquiry'

Vue.use(Router)
console.log(process.env)
const routes = [
  ...main,
  ...auth,
  ...inquiry
]

export default new Router({
  routes: routes,
  mode: 'history',
  base: process.env.BASE_URL
})
