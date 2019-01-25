import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import pHome from '@/page/Home'
import pLife from '@/page/Life'
import pDetail from '@/page/Detail'
import pAbout from '@/page/About'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      redirect:'life'
    },
    {
      path: '/life',
      name: 'life',
      component: pLife,
      children:[
        {path:'life',name:'life',component:pLife}
      ]
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
