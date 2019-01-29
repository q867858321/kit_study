import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
const pHome=()=>import('@/page/Home');
const pLife=()=>import('@/page/Life');
const pMonery=()=>import('@/page/Monery');
const pLove=()=>import('@/page/Love');
const pAbout=()=>import('@/page/About');
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      redirect:'life',
      component:pHome
    },
    {
      path: '/life',
      name: 'life',
      component: pLife,
      // children:[
      //   {path:'life',name:'life',component:pLife}
      // ]
    },
    {
      path: '/monery',
      name: "monery",
      component: pMonery,
      meta:{
        title:"省钱"
      }
    },
    {
      path: '/love',
      name: "love",
      component: pLove,
      meta:{
        title:"收藏"
      }
    },
    {
      path: "/about",
      name: "about",
      component: pAbout,
      meta:{
        title:"关于我们"
      }
    },
  ]
})
