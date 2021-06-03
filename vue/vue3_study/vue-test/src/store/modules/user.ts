import {createStore} from 'vuex'

export default createStore({
    state: {
        name:1,
        token:'1111111111111111111111111111'
    },
    getters:{
        token:function(state){
            return state.token
        }
    },
    mutations: {
        "changeName":function(state:any){
            console.log(11)
            state.name++
          }
    },
    actions: {
    },

})