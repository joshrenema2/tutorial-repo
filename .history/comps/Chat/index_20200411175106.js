import React from "react";
import "./chat.css"
import Header from "../Header";

const avatarImg = require("./avatar.png");

const Chat = ({ msg, name, img, backgroundColor }) => <div
    style={{backgroundColor:backgroundColor}}
    className="chat_card">
    <div className="chat_user">
        <img src={img} />
        <Header text={name} fontSize="100%" />
    </div>
    <div className="chat_msg">
        {msg}
    </div>
</div>;

Chat.defaultProps = {
    msg: "please type something",
    img: avatarImg,
    backgroundColor: "#EEE",
    name:"avatar"
}

export default Chat;