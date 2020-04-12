import React, {useState} from "react";
import "./chatpage.css";
import Chat from "../../comps/Chat";
import CustomButton from "../../comps/CustomButton";
import Header from "../../comps/Header";
import Input from "../../comps/Input";

var welcome_state = "welcome to my app"
function ChangeWelcome(){
    welcome_state = "start with sending a msg";
    document.querySelector(".welcome").innerText = welcome_state;
}

const ChatPage = () => <div>
    <div className="welcome">
        <Header fontSize={24} text="welcome to my app" />
    </div>
    <div className="chats" onClick={ChangeWelcome}>
        <Chat />
    </div>
<div className="controls">
    <Input />
</div>
</div>

ChatPage.defaultProps = {

}

export default ChatPage;