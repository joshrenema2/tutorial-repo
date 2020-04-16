import {useEffect} from "react";
import CustomButton from "../../comps/CustomButton";
import Header from "../../comps/Header";
import {FaHeart} from 'react-icons/fa';
import "./contact.css";

const Contact = () => {

   useEffect(() => {
      setTimeout(() => {
          document.querySelector("#contactpage").style.right = 0;
      }, 100)
  }, []);

return <div id="contactpage">
   <FaHeart/>
   <Header text="contact me :p" fontSize="16pt"/>
   <CustomButton text="email"/>
   <FaHeart/>
</div>
}

export default Contact;