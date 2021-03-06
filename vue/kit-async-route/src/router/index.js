import Vue from 'vue/dist/vue.esm.js'
import Router from 'vue-router'
Vue.use(Router)

import Layout from "@/views/layout/index.vue"
import order from "@/views/order/index.vue"

var constantRouterMap = [
  // {
  //   path: '',
  //   component: Layout,
  //   redirect: 'order',
  //   children: [{
  //     path: 'order',
  //     component: order,
  //     meta: { title: '订单', icon: 'dashboard' }
  //   }]
  // },
]
// var constantRouterMap=[]

// export const constantRouterMap = [
//   {
//     path: '',
//     component: Layout,
//     redirect: 'dashboard',
//     children: [{
//       path: 'dashboard',
//       component: _import('dashboard/index'),
//       meta: { title: '首页', icon: 'dashboard'}
//     }]
//   },

//   {
//     path: '/example',
//     component: Layout,
//     redirect: '/example/table',
//     name: 'Example',
//     meta: { title: '案例', icon: 'example' },
//     children: [
//       {
//         path: 'table',
//         name: 'Table',
//       component: _import('table/index'),

//         meta: { title: '表格', icon: 'table' }
//       },
//       {
//         path: 'tree',
//         name: 'Tree',
//       component: _import('tree/index'),

//         meta: { title: '树形菜单', icon: 'tree' }
//       }
//     ]
//   },

//   {
//     path: '/form',
//     component: Layout,
//     children: [
//       {
//         path: 'index',
//         name: 'Form',
//       component: _import('form/index'),
//         meta: { title: '表单', icon: 'form' }
//       }
//     ]
//   },

//   { path: '*', redirect: '/404', hidden: true }
// ]

let constantRoute = new Router({
  routes: constantRouterMap
})

export default constantRoute
