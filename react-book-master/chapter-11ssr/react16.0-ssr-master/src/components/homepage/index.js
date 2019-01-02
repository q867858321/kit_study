import React from 'react';
import AboutPage from "./AboutPage";
// import {BrowserRouter as Router,Link,Route} from "react-router-dom";
export default class HomePage extends React.Component{
  componentDidMount(){
    console.log('渲染了HomePage')
  }
  render(){
    return (
      <div>
        <h1>Home 123Page</h1>
        
        {/* <Router>
          <Link to={`/about`}>about</Link>
          <Route path="/about" component={AboutPage} />
        </Router> */}
       
      </div> 
    )
      
  }
}
