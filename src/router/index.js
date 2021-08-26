import Vue from 'vue'
import Router from 'vue-router'
import main from '@/router/main'
import auth from '@/router/auth'
import member from '@/router/member'
import hospital from '@/router/hospital'

Vue.use(Router)

const routes = [
  ...main,
  ...auth,
  ...member,
  ...hospital
]

export default new Router({
  routes: routes,
  mode: 'history',
  base: process.env.BASE_URL
})
