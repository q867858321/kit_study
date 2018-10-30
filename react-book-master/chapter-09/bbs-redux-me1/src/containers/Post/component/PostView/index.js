import React,{Component} from "react";
import "./style.css";
import like from "../../../../images/like.png";
class PostView extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const {byId,user}=this.props;
        return (
            <div className="postView">
                <div>
                    <h2>{byId.title}</h2>
                    <div className="mark">
                        <span className="author">{user.username}</span>
                        <span>.</span>
                        <span>{byId.updateAt}</span>
                    </div>
                    <div className="content">
                        latter
                    </div>
                </div>
                <div className="vote">
                    <span>
                        <img alt="vote" src={like} />
                    </span>
                    <span>{byId.vote}</span>
                </div>
            </div>
        );
    }
}

export default PostView;