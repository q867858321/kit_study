import React, { Component } from "react";
import PropTypes from 'prop-types';
import Message from "./Message";
class MessageList extends Component {
    getChildContext() {
        return { color: "purple" };
    }
    render() {
        const color = "purple";
        return (
            <div>
                <Message color={color} />
            </div>

        )
    }
}

MessageList.childContextTypes = {
    color: PropTypes.string
};
export default MessageList;