import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageChooseTemementData:{    //临时选中暂时储存位置
      data:'',
      index:'',
      type:''
    },
    submitPageInfo:{}
  },
  mutations: {
    chooseTemement(state,data){
      state.pageChooseTemementData.data=data.item;
      state.pageChooseTemementData.index=data.index;
      state.pageChooseTemementData.type=data.type;
    }
  },
  actions: {

  }
})
