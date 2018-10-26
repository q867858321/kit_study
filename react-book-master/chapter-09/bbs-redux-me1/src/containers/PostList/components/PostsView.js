import React,{Component} from "react";
import {Link} from "react-router-dom";
import PostItem from "./PostItem";
import { post } from "../../../utils/request";
class PostList extends Component {
    render() {
        const {posts}=this.props;
        console.log("postsView23",this);
        console.log("posts",posts);
        return (
            <ul>
                {/* {
                    [1,2,3].map(item=>(
                        <li>{item}</li>
                    ))
                } */}
                <Link to='/' >首页</Link>

                 {posts&&posts.map(item=>(
                    <Link key={item.id} to={`/posts/${item.id}`}>
                        <PostItem post={item} />
                    </Link>
                ))}
                 
            </ul>
        );
    }
}

export default PostList;