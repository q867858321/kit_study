export default {
    incCount(state,color){
        state.color=color;
        state.count=state.count+1;
    },
    getArticleList(state,list){
        state.list=list;
    }
}