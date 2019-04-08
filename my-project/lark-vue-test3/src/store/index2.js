import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state={
    showFooter:true,        //this.$store.state.showFooter
    changableNum:0
}
const getters={     //主要是来监听state 跟computed 相识
    isShow(state){
        return state.showFooter
    },
    getChagedNum(){
        return state.changableNum
    }
}
const mutations={
    show(state){    //this.$store.commit('show')
        state.showFooter=true;
    },
    hide(state){
        state.showFooter=false;
    },
    newNum(state,sum=1){    //this.$store.commit('newNum',6)
        state.changableNum+=sum;
    }
}
const store = new Vuex.Store({
    state,
    getters,
    mutations
});
 
export default store;