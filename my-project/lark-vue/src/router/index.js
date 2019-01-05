import Vue from 'vue'
import Router from 'vue-router'
import pHome from '@/page/Home'
import pDetail from '@/page/Detail'
import pAbout from '@/page/About'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: pHome
    },
    {
      path: '/detail',
      name: "detail",
      component: pDetail
    },
    {
      path: "/about",
      name: "abour",
      component: pAbout
    },
  ]
})
