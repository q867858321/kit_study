import React, { Component } from "react";
import {Route} from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Header from '../../components/Header/index';
import connectRoute from "../../utils/connectRoute";
import asyncComponent from "../../utils/AsyncComponent";
import {actions as authActions, getLoggedUser } from "../../redux/modules/auth";

import PostList from '../PostList/index';
const AsyncPostList=connectRoute(asyncComponent(()=>import("../PostList/index")));
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          };
    }
    handleLogout=()=>{
        this.props.logout();
    }
    render() {
        console.log(this);
        const {match,location,user}=this.props;
        const username=user&&user.username?user.username:"";
        return (
            <div>
                <Header username={username} onLogout={this.handleLogout} location={location} />
                <PostList />
                {/* <Route path={match.url} exact render={props=><AsyncPostList {...props} />} /> */}
            </div>
        );
    }
}
const mapStateToProps=(state,props)=>{
    return {
        user:getLoggedUser(state)
    }
};
const mapDispatchToProps=dispatch=>{
    return {
        ...bindActionCreators(authActions,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);