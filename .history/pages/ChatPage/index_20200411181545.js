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
    const [color, setColor] = useState("#9fcd6a")

    return <div>
        <div className="welcome">
            <Header fontSize={16} text={welcome} />
        </div>
        <div className="chats" onClick={() => {
            setWelcome("start by sending a msg");
        }}>
            <Chat msg={msg} />
            <p />
            <Chat img={"https://www.pngrepo.com/download/42220/loading.png"} backgroundColor="#FAB" name="josh" msg={resp} />
        </div>
        <div className="controls">
            <Input onClick={(val) => {
                setMsg(val);
                var new_resp = CheckResponse(val);
                setResp(new_resp);
                // if (val === "hi") {
                //     setResp("i love pi")
                // }
            }} />
        </div>
        <div className="custom_button">
            <CustomButton onClick={() =>{
                setColor();
                setText();
                onClick()
            }}text={} color={}
            //setText setColor
            />
        </div>
    </div>
}

function CheckResponse(inp) {
    switch (inp.toLowerCase) {
        case "hi":
            return "i love pi";
        case "how are you":
            return "greaaaaaaaaaaaaat :)";

        default:
            return "idk what ur saying";

    }
}

ChatPage.defaultProps = {

}

export default ChatPage;