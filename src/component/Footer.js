import { FaLinkedin ,FaMobileScreenButton} from "react-icons/fa6";
import {AiOutlineMail} from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer=()=>{
    return(
        <div className="border border-solid bg-pink-200 ">
            <h1 className="font-serif text-center text-xl font-extrabold">🛖 Maa Ki Rasoi</h1>
            <h2 className="font-thin text-base m-2 p-2">By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners @ 🛖 Maa Ki Rasoi. All rights reserved.</h2>
           <h3 className="m-2 text-center font-bold">Social Links</h3>
           <div className="flex">
          <h4 className=" m-2 p-2 text-2xl"><Link to ="https://www.linkedin.com/in/pravendra-singh-821b2b7b/"/><FaLinkedin/></h4>
           <h4 className="m-2 p-2 text-2xl"><FaMobileScreenButton/></h4>
           <a href="✉️-pravendrasingh281@gmail.com"/><h4 className="m-2 p-2 text-2xl"><AiOutlineMail/></h4>
           </div>
           
        </div>
    )
}

export default Footer;