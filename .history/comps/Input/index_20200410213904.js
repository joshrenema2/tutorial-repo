import React from "react";
import "./input.css"

const Input = ({placeholder}) => <div className="input_cont">
<input type="text" placeholder={placeholder}/>
</div>;

Input.defaultProps = {
    placeholder: "Type your chat here..."
}

export default Input;