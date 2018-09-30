import React, { Component } from 'react';
import Headers from './Headers';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      username:"kit",
      i:1
    }
  }
  checkUserName=()=>{
    this.setState({
      username:this.state.i+"",
    });
  }
  render() {
    return (
      <div className="App" onClick={this.checkUserName}>
        username
        <Headers username={this.state.username} />
      </div>
    );
  }
}

export default App;
