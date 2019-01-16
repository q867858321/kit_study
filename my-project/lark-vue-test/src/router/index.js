import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Demo1 from '@/components/demo1'
import Father from '@/components/Father'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/demo1',
      name: 'demo1',
      component: Demo1
    },
    {
      path:'/father',
      name:'father',
      component:Father
    }
  ]
})
