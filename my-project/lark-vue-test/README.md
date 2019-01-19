
vuex
1.安装
npm install --save vuex
2.建立src/store/index.js

import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store();
 
export default store;