import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
//如果导入是某文件下的index.js是可以省略的
//导出的容器组件也可以由任意一个名词
//export default connect(mapStateToProps, mapDispatchToProps)(App);
import App from "./containers/App";


const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
