import React, { Component } from "react";
import PropTypes from 'prop-types';

import Message from "./Message";

import "./MessageList.less";
class MessageList extends Component {
    getChildContext() {
        return { color: "purple" };
    }
    render() {
        const color = "purple";
        return (
            <div className="m_messageList">
                <p className="tilte">message</p>
                <Message color={color} />
            </div>

        )
    }
}

MessageList.childContextTypes = {
    color: PropTypes.string
};
export default MessageList;