// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import $ from 'jquery'
import './plugs/jquery.ztree.all.min'
import './plugs/slimscroll.min'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import '../static/css/common.css'
import Cookies from 'js-cookie'
import App from './App'
import "babel-polyfill";
import store from './store/index'
import router from './router/index'//路由配置文
import { getRand } from './untils/random'
import { createSign } from './untils/sign'
import * as fetch from './api/user'
import axios from 'axios'
import qs from 'qs'

Vue.use(ElementUI);
router.beforeEach((to, from, next) => {
  let user = localStorage.getItem('sessionKey');
  let perms = store.state.perms;
  let username = Cookies('username');
  let sessionId = Cookies('JSESSIONID');
  let ssoLogout = Cookies('sso_logout');
  if (ssoLogout == 'true' && to.path != '/login') {
    next('/login');
    localStorage.clear();
  }else if (username != null && sessionId != null) {
    // fetch.ssoLogin({
    //   username: username,
    //   sessionId: sessionId
    // }).then(res => {
    //   if (res.result=='login') {
    //     localStorage.setItem('sessionKey', res.sessionKey);
    //     localStorage.setItem('userName', username);
    //     store.dispatch('setRouters').then(() => {
    //       router.addRoutes(store.state.addRouters);
    //       next() // hack方法 确保addRoutes已完成
    //     })
    //   }
    // })
    store.dispatch('setRouters').then(() => {
      router.addRoutes(store.state.addRouters);
      next() // hack方法 确保addRoutes已完成
    })
  } else {
    if (user == null && to.path != '/login') {
      next('/login');
    } else {
      if (to.path == '/login') {
        next();
      } else {
        if (perms) {
          next();
        } else {
          store.dispatch('setRouters').then(() => {
            router.addRoutes(store.state.addRouters);
            next({ ...to}); // hack方法 确保addRoutes已完成
          })
        }
      }
    }
  }
});
Vue.directive('require', {
  update: function (el) {
    if (el.value.length > 0) {
      el.style.borderColor = '#d8e0e4';
    } else {
      el.style.borderColor = 'red';
    }
  }
});
const isDebug_mode = process.env.NODE_ENV !== 'production';
Vue.config.debug = isDebug_mode;
Vue.config.devtools = isDebug_mode;
Vue.config.productionTip = isDebug_mode;

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
