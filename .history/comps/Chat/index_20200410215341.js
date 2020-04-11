import React from "react";
import "./chat.css"
import Header from "../Header";

const avatarImg = require("./default.png");

const Chat = ({}) => <div>
    <img src={avatarImg} />
<Header text="username"/>
</div>;

Chat.defaultProps = {

}

export default Chat;