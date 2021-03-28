import {createStore} from 'vuex'

export default createStore({
    state: {
        name:"a",
        token:'1111111111111111111111111111'
    },
    mutations: {
        "changeName":function(state:any,val:string){
            state.name=val
          }
    },
    actions: {
    },

})