import{combineReducers} from "redux";
import url from "../../utils/url";
import {get} from "../../utils/request";

const initialState={
    byId:{},
    allIds:{}
}

//action types
export const types={
    CREATE_POST:"POSTS/CREATE_POST",            //新建帖子
    UPDATE_POST:"POSTS/UPDATE_POST",            //修改帖子
    FETCH_ALL_POSTS:"POST/FETCH_ALL_POSTS",     //获取帖子列表
    FETCH_POST:"POST/FETCH_POST"                //获取帖子详情
}
export const actions={
    fetchAllPosts:()=>{
        return (dispatch,getState)=>{
            console.log(url.getPostList());
            return get(url.getPostList()).then(data=>{
                if(!data.error){
                    console.log("数据",data);
                    dispatch(fetchAllPostsSuccess(data));
                }
            })
        }
    }
};

//获取帖子列表成功
const fetchAllPostsSuccess=(data)=>({
    type:types.FETCH_ALL_POSTS,
    data
})


//reducers
const allIds=(state=initialState.allIds,action)=>{  //只接受2个参数
    switch (action.type){
        case types.FETCH_ALL_POSTS:
        return {...state,data:action.data};
        case types.CREATE_POST:
            return {...state};
        default:
            return state;
    }
}



const reducer=combineReducers({
     allIds,
    // byId
});
export default reducer;

//selectors
export const getPostIds=state=>state.posts.allIds;
