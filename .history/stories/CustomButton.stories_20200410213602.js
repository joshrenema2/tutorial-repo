import React from "react";
import CustomButton from "../comps/CustomButton";
import Header from "../comps/Header"
import Chat from "../comps/Chat"
import Input from "../comps/Input"

export default {
    title: "My comps",
    component: CustomButton,
};

export const MyCustomButton = () => <CustomButton />;

export const MyCustomButtonWithOptions = () => <CustomButton
    color="#ffcf0f"
    text="OK"
    OnClick={OkayClick}
/>
export const MyHeader = () => <Header />;

export const MyInput = () => <Input />;

export const MyInputWithPlaceholder = () => <Input
    placeholder="Custom placeholder"
/>;

export const MyChat = () => <Chat />;

// export const PageWithCustomButtons = () => <div>

//     <Header
//         fontSize={15}
//         // color="#ffcf0f"
//         // onMouseOver={CancelClick}
//         // cursor="progress"
//         />

//     <Header
//         fontSize={15}
//         // color="#9fcd6a"
//         // onMouseOver={OkayClick}
//         // cursor="crosshair"
//         />

//     {/* <Header
//         fontSize={15}
//         color="#ff8a80"
//         // onMouseOver={AnnoyingAlert}
//         cursor="not-allowed"/> */}

//     <CustomButton 
//     color="#ffcf0f"
//     text="OK"
//     OnClick={OkayClick}/>

//     <CustomButton 
//     color="#9fcd6a"
//     text="Submit"/>

//     <CustomButton 
//     color="#ff8a80"
//     text="Cancel"
//     onClick={CancelClick}/>

//     <CustomButton 
//     color="#00c7ff"
//     text="Menu"/>
// </div>

// function CancelClick(){
//     alert("cancel")
// }

function OkayClick(){
    alert("okay")
}

// // function AnnoyingAlert(){
// //     alert("Hi hi hi")
// // }




