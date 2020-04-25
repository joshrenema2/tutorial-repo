import { useEffect, useState } from "react";
import CustomButton from "../../comps/CustomButton";
import Header from "../../comps/Header";
import { FaHeart } from 'react-icons/fa';
import "./contact.css";

import { data, ChangeData } from "../data";

console.log(data);


const headers_arr = [
   "thanks for contacting me",
   "bye",
   "let me know if you have further questions",
   // {
   //    text:"dada",
   //    img:"http://placekitten.com/200/300",
   // },
]

var index = 0;

const Contact = () => {
   console.log("contact page", data)
   var text = "";
   switch (data.lastaction) {
      case "":
         text = "please chat with me first";
         break;
      default:
         text = "thanks for chatting!";
         break;
   }

   if (data.numClicks > 0 && data.numClicks < 10){
      text += " chat more with me";      
   }else if(data.numClicks >= 10 && data.numClicks < 20){
      text += " you are a chatterbot";      
   }
   
   if (data.lastaction === "") {
      text = "please go to chat first before contacting me"
   }
   //step 1 - create the state variable and the function to update it, and put a default
   const [header_text, setHeader] = useState("contact me!");
   // const [img_url, setImg] = useState("");
   const [pageright, setRight] = useState("-100%");
   const [pageleft, setLeft] = useState("-100%");

   useEffect(() => {
      //what to do when its lifecycle starts/ just created
      setTimeout(() => {
         setRight(0);
      }, 50)
   }, []);

   useEffect(() => {
      //what to do when state in the page update
      setLeft(20);
      setTimeout(() => {
         setLeft(0);
      }, 500);
   }, [header_text]);

   //step 2 - connect the state variable to the ui
   return <div id="contactpage" style={{ right: pageright, left: pageleft }}>
      <Header text={header_text} fontSize="16pt" />

      {/* <img src={img_url} /> */}
      {text}
      {data.lastaction !== "" ? <CustomButton text="email" color="#73B47D" onClick={() => {
         //step 3 - connect the state function to an interaction or figure out when you wnat to update the interface
         setHeader(headers_arr[index]);
         // setImg(header_arr[index].img) ;
         index++;
         if (index > headers_arr.length - 1) {
            index = 0
         }
      }} /> : null}
      <FaHeart />
   </div>
}

export default Contact;