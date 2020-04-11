import React from "react";
import "./chat.css"
import Header from "../Header";

const avatarImg = require("./avatar.png");

const Chat = ({ }) => <div>
    <div className="chat_user">
        <img src={avatarImg} />
        <Header text="username" />
    </div>
</div>;

Chat.defaultProps = {

}

export default Chat;