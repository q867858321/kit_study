import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PostsView from "./components/PostsView";
import PostEditor from "../Post/components/PostEditor";
import { getLoggedUser } from "../../redux/modules/auth";
import { actions as postActions } from "../../redux/modules/posts";
import { actions as uiActions, isAddDialogOpen } from "../../redux/modules/ui";
import { getPostListWithAuthors } from "../../redux/modules";
import "./style.css";

class PostList extends Component {
  componentDidMount() {
    // this.props.fetchAllPosts();  // 获取帖子列表
  }

  // 保存帖子
  handleSave = data => {
    this.props.createPost(data.title, data.content);
  };

  // 取消新建帖子
  handleCancel = () => {
    this.props.closeAddDialog();  //绑定在props下的方法，要用主件内的方法调用生效
  };

  // 新建帖子
  handleNewPost = () => {
    this.props.openAddDialog();
  };
  getList = () => {
    this.props.fetchAllPosts();
  }
  render() {

    const { posts, user, isAddDialogOpen } = this.props; //提前把该主件用的到绑定在state、props下的数据列出来，方法调用

    console.log("postList.this", this);
    return (
      <div className="postList">
        <div>

          <h2>话题列表</h2>
          <button onClick={this.getList}>重新获取列表</button>

          {user.userId ? (
            <button onClick={this.handleNewPost}>发帖</button>
          ) : null}
        </div>
        {isAddDialogOpen ? (
          <PostEditor onSave={this.handleSave} onCancel={this.handleCancel} />
        ) : null}
        <PostsView posts={posts} />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  console.log("state", state);
  return {
    user: getLoggedUser(state),
    posts: getPostListWithAuthors(state),
    isAddDialogOpen: isAddDialogOpen(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log("dispatch");
  console.log(dispatch);
  return {
    ...bindActionCreators(postActions, dispatch),
    ...bindActionCreators(uiActions, dispatch)
  };
};
//mapStateToProps获取数据并把数据，mapDispatchToProps主要绑定方法；
//换句话说，组件通过mapStateToProps获取数据，通过mapStateToProps获取与数据打交道的方法
export default connect(mapStateToProps, mapDispatchToProps)(PostList);
