import React, { Component } from 'react';
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import PostView from "./component/PostView/index";


import {actions as postActions} from "../../redux/modules/posts";
class Post extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  };
    // }
    render() {
        return (
            <div className="post">
                <div>321</div>
                <PostView />
            </div>
        );
    }
}

export default Post;

// const mapStateToProps=(state,props)=>{
//     return {
//         user:state.auth,
//         posts:state.posts
//     }
// }
// const mapDispatchToProps=dispatch=>{
//     return {
//         ...bindActionCreators(postActions,dispatch)
//     }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(Post);