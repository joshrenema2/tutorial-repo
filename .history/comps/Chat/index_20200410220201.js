import React from "react";
import "./chat.css"
import Header from "../Header";

const avatarImg = require("./avatar.png");

const Chat = ({msg, }) => <div className="chat_card">
    <div className="chat_user">
        <img src={avatarImg} />
        <Header text="username" fontSize="100%" />
    </div>
    <div className="chat_msg">
        {msg}
    </div>
</div>;

Chat.defaultProps = {
    msg:"please type something"
}

export default Chat;