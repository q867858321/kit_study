const pages = {
  namespaced: true,
  state: {
    pageInfo: [ // 获取下来的数据 视图展示的数据
    ],
    pageChooseTemementData: { // 临时选中暂时储存位置
      data: '',
      index: '',
      type: ''
    },
    submitPageInfo: {}
  },
  getters: {

  },
  mutations: {
    addPageInfo(state, data) {
      state.pageInfo = data;
    },
    updatePageInfo(state, data) { //头部追加数据
      state.pageInfo.unshift(data);
      // let temData=state.pageInfo.map(function(item,index){
      //     let num=item.orderNum+1;
      //     return Object.assign(item,{orderNum:num})
      // });
      // temData.unshift(data);
      // state.pageInfo=temData;
    },
    chooseTemement(state, data) {

      state.pageChooseTemementData.data = data.item;
      state.pageChooseTemementData.index = data.index;
      state.pageChooseTemementData.type = data.type;
    }
  },
  actions: {

  }
}
export default pages
