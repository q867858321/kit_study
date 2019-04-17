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
    },
    fetchPost:(id)=>{
        return (dispatch,getState)=>{
            console.log(url.getPostById(id));
            return get(url.getPostById(id)).then(data=>{
                if(!data.error){
                    console.log("数据1",data);
                    dispatch(fetchPostsSuccess(data[0]));
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

//获取单个帖子成功
const fetchPostsSuccess=(data)=>({
    type:types.FETCH_POST,
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
const byId=(state=initialState.byId,action)=>{
    switch(action.type){
        case types.FETCH_POST:
            return Object.assign({},state,action.data);
        default:
            return state;
    }
}



const reducer=combineReducers({
     allIds,
     byId
});
export default reducer;

//selectors
export const getPostIds=state=>state.posts.allIds;
export const getPostId=state=>state.posts.byId;