import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

const state={
  pageInfo:[   //获取下来的数据 视图展示的数据  
  ],
  pageChooseTemementData:{    //临时选中暂时储存位置
      data:'',
      index:'',
      type:''
  },
  submitPageInfo:{}
}

const mutations= {
  addPageInfo(state,data){
    state.pageInfo=data;
  },
  updatePageInfo(state,data){ //头部追加数据
    state.pageInfo.unshift(data);
    // let temData=state.pageInfo.map(function(item,index){
    //     let num=item.orderNum+1;
    //     return Object.assign(item,{orderNum:num})
    // });
    // temData.unshift(data);
    // state.pageInfo=temData;
  },
  chooseTemement(state,data){

      state.pageChooseTemementData.data=data.item;
      state.pageChooseTemementData.index=data.index;
      state.pageChooseTemementData.type=data.type;
  }
}
const actions={}

const store= new Vuex.Store({
  state,
  mutations,
  actions,
  // modules:{
  //   collection
  // }
})
export default store;
// export default new Vuex.Store({
//   state,
//   mutations,
//   actions
// })
