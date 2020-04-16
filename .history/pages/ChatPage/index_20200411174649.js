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
    const [msg, setMsg] = useState("pls type smthng");
    const [resp, setResp] = useState("pls respond");

    return <div>
        <div className="welcome">
            <Header fontSize={16} text={welcome} />
        </div>
        <div className="chats" onClick={() => {
            setWelcome("start by sending a msg");
        }}>
            <Chat msg={msg} />
            <p/>
            <Chat img={"https://www.pinclipart.com/picdir/middle/49-490443_avatar-icon-tlcharger-avatar-icon-clipart.png"}backgroundColor="#FAB" name="josh" msg={resp} />
        </div>
        <div className="controls">
            <Input onClick={(val) => {
                setMsg(val);
                if (val === "hi") {
                    setResp("i love pi")
                }
            }} />
        </div>
    </div>
}

ChatPage.defaultProps = {

}

export default ChatPage;