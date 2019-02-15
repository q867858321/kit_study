// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
Vue.use(VueAxios,axios) //全局用axios


//全局引入js变量
import config from '@/api/config.js';
Vue.prototype.config=config;

//引入LogalStorage
import storage from './api/storage';

Vue.config.productionTip = false;  //阻止启动生产消息

//路由验证拦截
router.beforeEach((to,from,next)=>{
  if(to.meta.requireAuth){ //判断该页面是否需要验证
    const token=storage.getExpireStore('token')||'';
    if(token){  //验证时间过期
          //没过期
        if(to.path==='/login'){
          next('/index')
        }else{
          next()
        }
    }else{
      next('/login')  //过期
    }
  }else{
    next();
  }
});
//3天登录则在延迟3天登录
const token=storage.getExpireStore('token')||'';
if(token){
  storage.setExpireStore('token',token);
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // template: '<router-view/>'
  template: '<App/>',
  render: h => h(App)
})
