import React from "react";
import Button from "./Button";
let Message =(props)=> {    //function组件只能用于展示，没有state、this，不能用周期函数
    
    return (
        <div>
            <p className="tilte">message</p>w3
            <Button color={props.color}>Delete</Button>
        </div>
    );
}
export default Message;