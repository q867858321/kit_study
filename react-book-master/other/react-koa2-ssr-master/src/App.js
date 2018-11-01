/**
 * 返回一个基本的App
 */
import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './containers/home';
import {  About ,Topic,Topics } from './containers/component';
import  {ConnectedRouter}  from 'react-router-redux';
import router from './router/route';
import './assets/main.less';
import imageSrc from './assets/img/icon.png';

const configRoute = (router)=>{
  return (
     <div>
      {
          router.map((route,index) =>(
            <Route key= { index + 'route-render'} path={ route.path } exact={route.exact?route.exact: false } component={route.component}  />
          ))
      }
    </div>
  )

} 
// const BasicExample=()=>{
//   return (
//     <div className="app-container" data-aa="2">
//       <p>num:</p>
//       <img src={ imageSrc} />
//       <div>
//       <ul>
//         <li>222</li>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/topics">Topics</Link></li>
//       </ul>
//       <hr/>
//       {
//         configRoute(router)
//       }
//      </div>
//     </div>
//   )
// }
class BasicExample extends Component {
  constructor(props) {
    super(props);
    this.state = {num:1  };
  }
  clickadd=()=>{
    this.setState((preState)=>({
      num:++preState.num
    }));
  }
  render() {
    console.log("apppp",this);
    return (
      <div className="app-container" data-aa="2">
      <p onClick={this.clickadd}>num22:{this.state.num}</p>
      <img src={ imageSrc} />
      <div>
      <ul>
        <li>222</li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>
      <hr/>
      {
        configRoute(router)
      }
     </div>
    </div>
    );
  }
}


export default BasicExample;