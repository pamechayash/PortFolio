import "./skills.css";
import data from './charts.json';
import CenterAnimation from "./centerAnime";

import Askill from "./skillcont";
import sk from './sk.json'
import Lottie from 'react-lottie';
import bg from './skillbg.json'
import { useState , useEffect } from "react";
import EndAnime from "./endAnimation";
export default function Skills(){

const [OffsetY,setTrigger]=useState(0);
const [widthinc,setInc]=useState(false);

function handleScroll(){
setTrigger(window.pageYOffset);
OffsetY<2200 ?setInc(true):setInc(false);



}



useEffect(() => {
 window.addEventListener("scroll",handleScroll);



  return () => {
    window.removeEventListener("scroll",handleScroll);
  }
}, [OffsetY])





      
const defaultOptions={
autoplay: true,
loop:true,
animationData: bg,
rendererSettings:{
  preserveAspectRatio: "xMidYMid slice",
},

}






    return<section id="skills"  style={{
   width: (widthinc?"0":"100vw"),
   }}>
     <div className="head">
  <h1 className="heading">Skills</h1>
<div className="underline"
style={{
  width:"150px"
  }}
>
 
</div>
</div>
  
  <div className="cont1">
  
      <div className="skillLeft">
<Askill skillname="C lang"/>
<Askill skillname="C++ lang"/>
<Askill skillname="Python"/>
<Askill skillname="Oops"/>
<Askill skillname="Flutter(basic)"/>

<Askill skillname="MachineLearning"/>
<Askill skillname="DSA"/>
</div>
     <div className="skillcenter">
         
   <CenterAnimation/>
   

   </div>
   <div className="skillRight">
<Askill skillname="javaScript"/>

<Askill skillname="Node.js"/>
<Askill skillname="Express.js"/>
<Askill skillname="SQL"/>
<Askill skillname="APIs"/>
<Askill skillname="MongoDB"/>
<Askill skillname="React.js"/>
</div>
   
     </div>
     {/* <div style={{margin:"0px auto",
    padding:"0px",
    height:"300px",
 position: "relative",
top:"-20px",
    transition:"0.5s",

    }}> */}
    <div className="endanime" style={{
    
    }}>
    <EndAnime />
    </div>
       </section> 
       
}