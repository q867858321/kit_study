import {createStore} from 'vuex'

import user from './modules/user'

export default createStore({

  //模块导入
  modules:{
    user
  },
  state: {
    tt:1
  },
  mutations: {
      "increaseCount":function(state){
        state.tt++
      }
  },
  actions: {
  },
});