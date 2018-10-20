import React, { Component } from "react";
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {actions as authActions,getLoggedUser} from '../../redux/modules/auth';
import "./style.css";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:'jack',
            password:'123456',
            redirectToReferrer:false
         };
    }
    componentWillReceiveProps(nextProps){
        const isLoggedIn=!this.props.user.userId && nextProps.user.userId;
        if(isLoggedIn){
            this.setState({
                redirectToReferrer:true
            });
        }
    }
    handleChange=(e)=>{
        if(e.target.name==='username'){
            this.setState({
                username:e.target.value
            });
        }else if(e.target.name==='password'){
            this.setState({
                password:e.target.value
            });
        }
    }
    handleSubmit=(e)=>{
       // e.stopPropagation();//冒泡
        e.preventDefault();//默认
        console.log(this);
        const username=this.state.username;
        const password=this.state.password;
        if (username.length === 0 || password.length === 0) {
            alert("用户名或密码不能为空！");
            return;
        }

        this.props.login(username,password);
    }
    render() {
        let {username,password,redirectToReferrer}=this.state;
        const {from}={from:{pathname:"/posts"}};
        if(redirectToReferrer){
            return <Redirect to={from} />;
        }
        
        return (
           <form className="login" onSubmit={this.handleSubmit}>
               <div>
                   <label>
                       用户名:
                       <input name="username" type="text" value={username} onChange={this.handleChange} />
                   </label>
               </div>
               <div>
                   <label>
                       密码:
                       <input name="password" type="text" value={password} onChange={this.handleChange} />
                   </label>
               </div>
               <input type="submit" value="登录" />
           </form> 
        );
    }
}
const mapStateToProps=(state,props)=>{
    return {
        user:getLoggedUser(state)
    }
};
const mapDispatchToProps=dispatch=>{
    return {
        ...bindActionCreators(authActions,dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);