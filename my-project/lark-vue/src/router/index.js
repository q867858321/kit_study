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
      component: pHome,
      meta:{
        title:"首页"
      }
    },
    {
      path: '/detail',
      name: "detail",
      component: pDetail,
      meta:{
        title:"详情"
      }
    },
    {
      path: "/about",
      name: "abour",
      component: pAbout,
      meta:{
        title:"关于我们"
      }
    },
  ]
})
