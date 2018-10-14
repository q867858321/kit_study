import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import asyncComponent from "../../utils/AsyncComponent";
import ModalDialog from "../../components/ModalDialog";
import Loading from "../../components/Loading";
import { actions as appActions, getError, getRequestQuantity } from "../../redux/modules/app";
import connectRoute from "../../utils/connectRoute";

const AsyncHome = connectRoute(asyncComponent(() => import("../Home")));
const AsyncLogin = connectRoute(asyncComponent(() => import("../Login")));



class App extends Component {
  //props更新，不需要重新渲染
  shouldComponentUpdate=(nextProps, nextState)=> {
      return false;
  }
  render() {
    const { error, requestQuantity } = this.props;
    const errorDialog = error && (
      <ModalDialog onClose={this.props.removeError}>
        {error.message || error}
      </ModalDialog>
    );
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={AsyncHome} />
            <Route path="/login" component={AsyncLogin} />
            <Route path="/posts" component={AsyncHome} />
          </Switch>
        </Router>
        {errorDialog}
        {requestQuantity > 0 && <Loading />}
      </div>
    );
  }
}

//本组件中，需要从state中获取数据，都是从这里获取
const mapStateToProps = (state, props) => {
  // console.log("state",state);
  return {
    error: getError(state),
    requestQuantity: getRequestQuantity(state)
  };
};

//本组件中，需要从state中获取方法(主要是与数据打交道的方法)，都是从这里获取
const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators(appActions, dispatch)
  };
};
//或者
// const mapDispatchToProps = dispatch => {
//   return bindActionCreators(appActions, dispatch)
//   ;
// };


export default connect(mapStateToProps, mapDispatchToProps)(App);
