import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Cate from '@/components/Cate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'hello'
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
        {path:"cate",name:'cate',component:Cate}
      ]
    },
   
  ]
})
