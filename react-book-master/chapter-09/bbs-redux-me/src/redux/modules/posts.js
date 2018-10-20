import url from "../../utils/url";
import {get} from "../../utils/request";

export const actions={
    fetchAllPosts:()=>{
        return (dispatch,getState)=>{
            console.log(url.getPostList());
            return get(url.getPostList()).then(data=>{
                if(!data.error){
                    console.log(data);
                }
            })
        }
    }
}

const convertPostsToPlain = posts =>{
    let postsById={};
    let postsIds=[];
    let authorsById={};
    posts.forEach(item=>{
      postsById[item.id]={...item,author:item.author.id};
      postsIds.push(item.id);
      if(!authorsById[item.author.id]){
          authorsById[item.author.id]=item.auth
      }  
    });
    return {
        
    }
}
