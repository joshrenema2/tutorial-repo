import React from "react";
import "./chat.css"
import Header from "../Header";

const avatarImg = require("./avatar.png");

const Chat = ({msg }) => <div>
    <div className="chat_user">
        <img src={avatarImg} />
        <Header text="username" />
    </div>
    <div className="chat_msg">
        {msg}
    </div>
</div>;

Chat.defaultProps = {
    msg:"please type something"
}

export default Chat;