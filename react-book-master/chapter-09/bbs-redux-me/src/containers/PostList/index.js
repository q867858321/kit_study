import React,{Component} from 'react';
import {Link} from "react-router-dom";
import { bindActionCreators } from 'redux';
import {connect} from "react-redux";

import {actions as postActions} from "../../redux/modules/posts";
import "./style.css";
import  like from "../../images/like.png";

class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:[
                {
                    link:"qq",
                    title:"123",
                    name:"jack",
                    date:"2018-10-18 11:30",
                    number:2
                },
                {
                    link:"qq",
                    title:"123",
                    name:"jack",
                    date:"2018-10-18 11:30",
                    number:2
                }
            ]
         };
    }
    componentDidMount(){
        this.props.fetchAllPosts();
    }
    render() {
        let {data}=this.state;
        console.log(this);
        return (
            <div className="postList">
                <div>
                    <h2>话题列表2</h2>
                </div>
                <ul>
                    {
                        data.map((item,key)=>(
                            <span key={key}>{item.link}</span>
                        ))
                    }
                    <Link to="/">
                        <li className="postItem">
                            <div className="title">123</div>
                            <div>
                                创建人：<span>jack</span>
                            </div>
                            <div>
                                更新时间：<span>2018-10-18 11:30</span>
                            </div>
                            <div className="like">
                                <span>
                                    <img alt="vote" src={like} />
                                </span>
                                <span>2</span>
                            </div>
                        </li>
                    </Link>
                </ul>
            </div>
           
        );
    }
}
const mapStateToProps=(state,props)=>{
    return {}
}
const mapDispatchToProps=dispatch=>{
    return {
        ...bindActionCreators(postActions,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PostList);