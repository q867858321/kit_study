import Vue from 'vue'
import ElementUI from 'element-ui'
//自定义ui
import './styles/element-variables.scss'
import './assets/ali_icon/iconfont.css';
// import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import './permission' // permission control

import filters from './utils/filters.js'
import directive from './utils/directive.js'

//给vue绑定全局属性、方法(不可修改)
import base from './utils/base.js';
Vue.prototype.$base = base;

// set ElementUI lang to EN
Vue.use(ElementUI, {
  size: 'mini'
})

Vue.config.productionTip = false

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

import "@/libs/KitUI/index.js";// 利用混入方式导入自定义UI库

import "@/libs2/KitUI/index.js";// 利用导入组件的方式导入自定义UI库

// 全局注册过滤器
Object.keys(filters).forEach((fncName) => {
  Vue.filter(fncName, filters[fncName])
})
// 全局注册自定义指令
Object.keys(directive).forEach((fncName) => {
  Vue.directive(fncName, directive[fncName])
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
