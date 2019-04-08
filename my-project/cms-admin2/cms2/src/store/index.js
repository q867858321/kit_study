import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import permission from './modules/permission'
import user from './modules/user'
import getters from './getters'
import page from './modules/page'
Vue.config.devtools = process.env.NODE_ENV === 'development';
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    app,
    page,
    permission,
    user
  },
  getters
});

export default store

