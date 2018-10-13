
import React, { Component } from "react";
import Button from "./Button";
class Message extends Component {
    render() {
        console.log(this);
        return (
            <div>
                <p className="tilte">message</p>w
                <Button color={this.props.color}>Delete</Button>
            </div>
        );
    }
}
export default Message;