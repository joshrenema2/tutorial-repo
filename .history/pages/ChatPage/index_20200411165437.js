import React, {useState} from "react";
import "./chatpage.css";
import Chat from "../../comps/Chat";
import CustomButton from "../../comps/CustomButton";
import Header from "../../comps/Header";
import Input from "../../comps/Input";

function ChangeWelcome(){
    document.querySelector(".welcome").innerText = "start with sendin g a msg"
}

const ChatPage = () => <div>
    <div className="welcome">
        <Header fontSize={24} text="Welcome to my app" />
    </div>
    <div className="chats" onClick={ChangeWelcome()}>
        <Chat />
    </div>
<div className="controls">
    <Input />
</div>
</div>

ChatPage.defaultProps = {

}

export default ChatPage;