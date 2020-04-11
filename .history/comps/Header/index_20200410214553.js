//use the same comp to change the fontSize
//change the text color of header
//change the onMouseOver

import React from "react";
import "./header.css";

const Header = ({text, fontSize, color, cursor}) => <div
style={{color:color, fontSize:fontSize, cursor:cursor}}
className="header_box"
// onMouseOver={onMouseOver}
>
    <h1
     className="header_box_text">Header</h1>
</div>

// function MouseOver(){
//     alert("mouse is over");
// }

Header.defaultProps = {
    fontSize:12,
    text="Header",
    // color:"#fff",
    // // onMouseOver:MouseOver,
    // cursor:"pointer",
}

export default Header;