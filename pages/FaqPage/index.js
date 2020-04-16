import { useEffect } from "react";
import CustomButton from "../../comps/CustomButton";
import Header from "../../comps/Header";
import { GiStarStruck } from 'react-icons/gi';
import "./faq.css"

const Faq = () => {

    useEffect(() => {
        setTimeout(() => {
            document.querySelector("#faqpage").style.right = 0;
        }, 100)
    }, []);

    return <div id="faqpage">
        <CustomButton text="click meeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" />
        <Header text="which is..." fontSize="16pt" /><GiStarStruck />
        <Header text="where is..." fontSize="16pt" /><GiStarStruck />
        <Header text="who is..." fontSize="16pt" /><GiStarStruck />
        <Header text="what is..." fontSize="16pt" /><GiStarStruck />
        <Header text="how is..." fontSize="16pt" /><GiStarStruck />
    </div>
}

export default Faq;