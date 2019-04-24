import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//引入axios
import axios from 'axios'
Vue.prototype.$http = axios;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.config.productionTip = false


//封装提示
Vue.prototype.$elementMessage = function (msg,t) {
  this.$message({
    message: msg,
    type: t,
    duration: 3 * 1000
  })
}
/*
使用提示
this.$message({
  message: '恭喜你，这是一条成功消息',
  type: 'success'
*/

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')