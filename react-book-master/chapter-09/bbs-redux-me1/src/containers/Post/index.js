import React, { Component } from 'react';
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import PostView from "./component/PostView/index";
import "./style.css";

import {actions as postActions} from "../../redux/modules/posts";
import { getPostId } from '../../redux/modules/posts';
import {getLoggedUser} from '../../redux/modules/auth';
class Post extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  };
    // }
    componentDidMount(){
        let id=this.props.match.params.id;
        this.props.fetchPost(id);
    }
    render() {
        const {byId,user}=this.props;
        return (
            <div className="post">
                <PostView byId={byId} user={user} />
            </div>
        );
    }
}


const mapStateToProps=(state,props)=>{
    console.log("post",state);
    return {
        byId:getPostId(state),
        user:getLoggedUser(state)
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        ...bindActionCreators(postActions,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Post);