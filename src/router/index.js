import Vue from 'vue'
import Router from 'vue-router'
import main from '@/router/main'
import auth from '@/router/auth'
import member from '@/router/member'
import hospital from '@/router/hospital'
import mypage from '@/router/mypage'

Vue.use(Router)

const routes = [
  ...main,
  ...auth,
  ...member,
  ...hospital,
  ...mypage
]

export default new Router({
  routes: routes,
  mode: 'history',
  base: process.env.BASE_URL
})
