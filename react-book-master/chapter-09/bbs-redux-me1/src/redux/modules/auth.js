import url from '../../utils/url';
import {post} from '../../utils/request';
const initialState={
    userId:null,
    username:null
}
export const types={
    LOGIN:'AUTH/LOGIN',  //登录
    LOGOUT:'AUTH/LOGOUT' //注销
};

export const actions={
    //异步登录
    login:(username,password)=>{
        return dispatch=>{
            const params={username,password};
            // return ajax(url.login(),params).then(data=>{
            //     console.log(data);
            //     if(!data.error){
            //         dispatch(actions.setLoginInfo(data.userId,username))
            //     }else{
                    
            //     }
            // })
            return post(url.login(),params).then(data=>{
                if(!data.error){
                    dispatch(actions.setLoginInfo(data.userId,username))
                }else{
                    
                }
            })
        }
    },
    logout:()=>({
        type:types.LOGOUT
    }),
    setLoginInfo:(userId,username)=>({
        type:types.LOGIN,
        userId:userId,
        username:username
    })
};

const auth=(state=initialState,action)=>{
    switch(action.type){
        case types.LOGIN:
            return {...state,userId:action.userId,username:action.username};
        case types.LOGOUT:
            return {...state,userId:null,username:null};
        default:
            return state;
    }
}
export default auth;

export const getLoggedUser=(state)=> state.auth;
