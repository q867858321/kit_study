import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Detail from '@/page/Detail'
import About from '@/page/About'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/detail',
      name: "detail",
      component: Detail
    },
    {
      path: "/about",
      name: "abour",
      component: About
    },
  ]
})
