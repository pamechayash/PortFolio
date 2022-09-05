import "./header.css";

import { Pcomp } from "./particle";
import Button from "./buttons"
import Wobble from 'react-reveal/Wobble';
import {SocialIcon} from 'react-social-icons';
import { useEffect, useState } from "react";
import Spin from 'react-reveal/Spin';
export default function Header(){

var [offsetY,setOffsetY]=useState(0);

var [classN,setclassN]=useState({

list:"list",
maincont:"maincont",
});

function handlechange(){
    setOffsetY(window.pageYOffset);

 if(offsetY>190){
 setclassN({
maincont:"maincontUp",
list:"listUp",
sidelinks:"sidelinksUP"
});
 }
 else{
    setclassN({
maincont:"maincont",
list:"list",
sidelinks:"sidelinks"
}); 
 }
 
}

useEffect(() => {
 window.addEventListener("scroll",handlechange);

  return () => {
    window.removeEventListener("scroll",handlechange)
  }
}, [offsetY])




const iconStyle ={ height: 35,
     width: 35 ,
     marginTop: 7,

};


    return (
     
<header id="header" >
<Pcomp/>


<h4 style={{color:"white",position:"relative"}}>Hello,i'm</h4>
<Wobble>
<h1 style={{margin:"10px",
color:"#4db5ff"
}

} >Yash Pamecha</h1>


<small style={ {color: "rgba(255,255,255,0.4)"}}>Full stack Web Developer | Doing Machine Learning  <br/>proficient in Problem Solving | Flutter Developer</small>
<div className="btnspace">
<Button name="normal Download"

/> 
<Button 
  name= "primary"
  hr="#contact"
  text="Let's Talk"
  /> 


</div>
</Wobble>

<div className={classN.maincont} >
<div className={classN.sidelinks}>
    <div className={classN.list}>
    <Spin>
        <SocialIcon url="https://github.com/pamechayash" network="github" style={iconStyle} className="icon" bgColor="#4db5ff"/>
       <SocialIcon url="https://www.linkedin.com/in/yash-pamecha-a89232204/"  bgColor="#4db5ff" className="icon" style={iconStyle} />
        <SocialIcon url="https://twitter.com"  bgColor="#4db5ff" className="icon" style={iconStyle} />
        </Spin>
        </div>
     
</div>


   <div className="sc">
     <a href="#contact" >Scroll Down</a>
  </div>
  
 


   </div>


</header>


    )
}