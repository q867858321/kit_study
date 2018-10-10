import React, { Component } from 'react';


// import Home from './components/Home';



import News from './components/News';

class App extends Component {

  //render 模板   jsx
  render() {
    return (
      <div className="App">
         你好react  根组件
        <hr />

         <News />
      </div>
    );
  }
}

export default App;
