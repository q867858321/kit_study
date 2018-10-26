import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import './style.css';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         };
    }
    render() {
        let {username,onLogout,location}=this.props;
        console.log("username",username);
        return (
            <div className="header">
                <div className="nav">
                    <span className="left-link">
                        <Link to='/'>首页</Link>
                    </span>
                    {username&&username.length>0?(
                        <span className="user">
                            当前用户：{username}
                            <button onClick={onLogout}>注销</button>
                        </span>
                    ):(
                        <span className="right-link">
                            <Link to={{pathname:"/login",state:{from:location} }}>登录</Link>
                        </span>
                    )}
                </div>
            </div>
        );
    }
}

export default Header;