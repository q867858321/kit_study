import React,{Component} from "react";
class PostView extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="postView">
                <div>
                    <h2>My Bottle</h2>
                    <div className="mark">
                        <span className="author">tom</span>
                        <span>.</span>
                        <span>2018-10-26 14:00</span>
                    </div>
                    <div className="content">
                        latter
                    </div>
                </div>
                <div className="vote">
                    <span>
                        <img alt="vote" src="" />
                    </span>
                    <span>0</span>
                </div>
            </div>
        );
    }
}

export default PostView;