import Vue from 'vue';
import Vuex from 'vuex';
// import mutations from './mutations';
Vue.use(Vuex);
// const state={//要设置的全局访问的state对象
//   showFooter: true,
//   changableNum:0,
//   color:"#000",
//   count:0
// };
const user={name:"tom",list:[]};
const article={
  showFooter: true,
  changableNum:0,
  color:"#000",
  count:0
};
const state=Object.assign(user,article);
var mutations={
  incCount(state,color){
    state.color=color;
    state.count=state.count+1;
  },
  
}

var actions= {
  incMutationsCount(context) {    /*因此你可以调用 context.commit 提交一个 mutation*/
    context.commit('incCount');    /*执行 mutations 里面的incCount方法 改变state里面的数据*/
  }
}

const store=new Vuex.Store({state,mutations,actions});

export default store;
