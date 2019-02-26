import React, { Component } from 'react';


// import Home from './components/Home';


import List from './components/List';


import Todolist from './components/Todolist';


class App extends Component {

  //render 模板   jsx
  render() {
    return (
      <div className="App">
         你好react-根组件
         <hr />
         {/* <Home /> */}
         <List />

         <hr />

         <Todolist />
         

      </div>
    );
  }
}

export default App;
