import Vue from 'vue'

import ElementUI from 'element-ui'
//自定义ui
import './styles/element-variables.scss'
import './assets/ali_icon/iconfont.css';
// import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import filters from './utils/filters.js'
import directive from './utils/directive.js'

//给vue绑定全局属性、方法(不可修改)
import base from './utils/base.js';
Vue.prototype.$base = base;

// set ElementUI lang to EN
Vue.use(ElementUI, {
  locale,
  size: 'small'
})

Vue.config.productionTip = false

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
