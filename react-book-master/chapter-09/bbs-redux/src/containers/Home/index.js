import React, { Component } from "react";
import { Route } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Header from "../../components/Header";
import asyncComponent from "../../utils/AsyncComponent";
import { actions as authActions, getLoggedUser } from "../../redux/modules/auth";
import connectRoute from "../../utils/connectRoute";

const AsyncPost = connectRoute(asyncComponent(() => import("../Post")));
const AsyncPostList = connectRoute(asyncComponent(() => import("../PostList")));

class Home extends Component {
  constructor(props) {
    super(props);
    window.addEventListener("beforeunload", this.handleBeforeUnload); //当关闭浏览器时，把用户信息保存到session中
    // this.handleBeforeUnload();
    const { userId, username } = this.props.user;
    if (!userId || !username) {
      this.restoreLoginInfo();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.handleBeforeUnload);
  }

   //props更新，不需要重新渲染
  shouldComponentUpdate=(nextProps, nextState)=> {
    return this.props.match!==nextProps.match;
  }
  restoreLoginInfo = () => {
    const userId = localStorage.getItem("userId");
    const username = localStorage.getItem("username");
    if (userId && username) {
      this.props.setLoginInfo(userId, username);
    }
  };

  handleBeforeUnload = () => {
    const { userId, username } = this.props.user;
    if (userId && username) {
      localStorage.setItem("userId", userId);
      localStorage.setItem("username", username);
    }
  };

  handleLogout = () => {
    this.props.logout();
  };

  render() {
    const { match, location, user } = this.props;
    const username = user && user.username ? user.username : "";
    return (
      <div>
        <Header
          username={username}
          onLogout={this.handleLogout}
          location={location}
        />
        <Route
          path={match.url}
          exact
          render={props => <AsyncPostList {...props} />}
        />
        <Route
          path={`${match.url}/:id`}
          render={props => <AsyncPost {...props} />}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {  //主要是把state中的数据绑定到props下
  return {
    user: getLoggedUser(state)    //也可以 user:state.auth，但最好用方法调用；
  };
};

const mapDispatchToProps = dispatch => {
  //return返回的是一个对象，一个键值对；下文中如果不带...则为方法调用。
  return {
    ...bindActionCreators(authActions, dispatch)
  };
};
//先执行 mapStateToProps,再执行mapDispatchToProps,最后在将返回的props绑定到UI组件
//export default 将容器组件抛出去
export default connect(mapStateToProps, mapDispatchToProps)(Home);

//containers中 写不可重复利用的布局、事件；
//components中，可以重复利用的样式布局，算是纯行数，通过props显示
