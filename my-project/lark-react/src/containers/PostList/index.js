import React,{Component} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from "react-redux";

import {actions as postActions} from "../../redux/modules/posts";

import PostsView from "./components/PostsView";
import "./style.css";

class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            // postsList:[
            //     {
            //         link:"qq",
            //         title:"123",
            //         name:"jack",
            //         date:"2018-10-18 11:30",
            //         number:2
            //     },
            //     {
            //         link:"qq",
            //         title:"123",
            //         name:"jack",
            //         date:"2018-10-18 11:30",
            //         number:2
            //     }
            // ]
         };
    }
    formatDate=(data)=>{
        var newDate=[];
        // console.log("data",data);
        data.forEach((item,index) => {
            var n_item={};
            n_item.id=item.id;
            n_item.title=item.title;
            n_item.vote=item.vote;
            n_item.updatedAt=item.updatedAt;
            n_item.author=item.author;
            newDate.push(n_item);
        });
        this.setState({
            postsList:newDate
        });
    }
    componentDidMount(){
        this.props.fetchAllPosts();
    }
    componentWillReceiveProps(nextProps,props){
        this.formatDate(nextProps.posts.allIds.data);
    }
    render() {
        let {postsList}=this.state;
        // let {posts}=this.props;
        console.log("PostList",this);
        return (
            <div className="postList">
                <div>
                    <h2>话题列表3</h2>
                </div>
                <PostsView posts={postsList} />
            </div>
           
        );
    }
}
const mapStateToProps=(state,props)=>{
    return {
        user:state.auth,
        posts:state.posts
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        ...bindActionCreators(postActions,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PostList);