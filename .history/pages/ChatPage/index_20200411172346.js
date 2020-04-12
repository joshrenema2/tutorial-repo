import React, { useState } from "react";
import "./chatpage.css";
import Chat from "../../comps/Chat";
import CustomButton from "../../comps/CustomButton";
import Header from "../../comps/Header";
import Input from "../../comps/Input";

// var welcome_state = "welcome to my app"
// function ChangeWelcome(){
//     welcome_state = "start with sending a msg";
//     document.querySelector(".welcome").innerText = welcome_state;
// }

const ChatPage = () => {
    const [welcome, setWelcome] = useState("welcome to my app");
    const [msg, setMsg] = useState("");

    return <div>
        <div className="welcome">
            <Header fontSize={16} text={welcome} />
        </div>
        <div className="chats" onClick={() => {
            setWelcome("start by sending a msg");
        }}>
            <Chat />
        </div>
        <div className="controls">
            <Input onClick={(val)=>{
                setMsg(val);
                alert(val);
            }}/>
        </div>
    </div>
}

ChatPage.defaultProps = {

}

export default ChatPage;