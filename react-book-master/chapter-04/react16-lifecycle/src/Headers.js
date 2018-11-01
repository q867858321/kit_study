import React, { Component } from 'react';

class Headers extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    render() {
       let {username}=this.props;
      return (
        <div>
          {username}
        </div>
      );
    }
  }
  
  export default Headers;