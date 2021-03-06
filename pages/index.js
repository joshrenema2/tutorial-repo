import Link from "next/link";
import Router from "next/router";
import {FaAndroid} from 'react-icons/fa';
import {IoLogoOctocat} from 'react-icons/io';
import "./index.css"

import {data, ChangeData} from "./data.js";

console.log("doesn't reload, loads only once", data);

function ClickIndex(){
    ChangeData({
        lastaction:"went to chat",
        numClicks: 0
    })
    document.querySelector(".main_app").style.left = "-100%";
    setTimeout(function(){
        Router.push("/ChatPage");
    }, 1000)
}

const Index = () => <div className="main_app">

    

    <div onClick={ClickIndex}>Index :)<FaAndroid /><IoLogoOctocat/></div> 

    <p/>

    <Link href="/ContactPage">Contact Me</Link>

    <p/>

    <Link href="/ChatPage">ChatPage</Link>

    <p/>

    <Link href="/AboutPage">About</Link>

    <p/>

    <Link href="/FaqPage">FAQ</Link>

    </div>

export default Index;