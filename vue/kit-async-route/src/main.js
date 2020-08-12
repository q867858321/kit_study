// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import store from './store'
import directive from './utils/directive.js'
import '@/utils/global'//全局
import './promission'//这里进行路由后台获取的模拟
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/index.scss' // global css


Vue.config.productionTip = false
Vue.use(ElementUI)

// 全局注册自定义指令
Object.keys(directive).forEach((fncName) => {
  Vue.directive(fncName, directive[fncName])
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

