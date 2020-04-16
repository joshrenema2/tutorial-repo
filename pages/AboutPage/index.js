import {useEffect} from "react";
import Header from "../../comps/Header";
import { IoLogoOctocat } from 'react-icons/io';
import "./about.css";

const About = () => {

   useEffect(() => {
      setTimeout(() => {
          document.querySelector("#aboutpage").style.left = 0;
      }, 100)
  }, []);

   return <div id="aboutpage">
      <Header text="About Us" fontSize="16pt" />
      <div>hello we are a very good company and we are about us :)</div>
      <IoLogoOctocat />

   </div>
}
export default About;