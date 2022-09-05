import "./nav.css";
import { useState } from "react";
import { AiOutlineHome ,AiOutlineUser} from 'react-icons/ai';
import { BiBook,BiMessageSquareDetail} from 'react-icons/bi';
import {MdOutlineCastForEducation} from 'react-icons/md';
import { GiSkills} from 'react-icons/gi'
import { RiServiceLine} from 'react-icons/ri';
export default function Nav(){
const [active,setActive]= useState("#header");
    return <div className="nav">
<a href="#header"  onClick={()=>
    setActive("#header")} className={active=="#header" && "active" }><AiOutlineHome/></a>
<a href="#about" onClick={()=>
    setActive("#about")} className={active=="#about" && "active"}><AiOutlineUser/></a>
<a href="#education" onClick={()=>
    setActive("#edu")} className={active=="#edu" && "active"}><MdOutlineCastForEducation/></a>
<a href="#skills" onClick={()=>
    setActive("#skl")} className={active=="#skl" && "active"}><GiSkills/></a>
<a href="#contact" onClick={()=>
    setActive("#con")} className={active=="#con" && "active"}><BiMessageSquareDetail/></a>

    </div>
}