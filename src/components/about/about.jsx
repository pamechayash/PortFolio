import "./about.css"
import ImageCont from "./imageContainer";
import Content from "./content";
import { useEffect } from "react";
import Card from "./card";
import {Button} from "../header/buttons";
import { useState } from "react";

export default function About(){
const [offset ,setOffset]=useState(0);
var [condition,setCondi]=useState(1);
function handleScroll(){
setOffset(window.pageYOffset);


}

useEffect(() => {
  (window).addEventListener("scroll",handleScroll);

  return () => {
    window.removeEventListener("scroll",handleScroll);
  }
}, [offset])

return <section id="about">
   
<div className="bigcont">
<div className="heading" >
<small style={ {color: "rgba(255,255,255,0.4)"}}>Get To Know</small>    
<h2 style={{color:"#4db5ff"}}>About Me</h2>

</div>
<div className="Subcont">
<ImageCont/>

<div className="contentSpace">
<div className="cardSpace">
<Card name="Time invested" desc="2.5+ years of practice  in programming(Development + problem Solving) and have a good Experience in solving problems"/>
<Card name="Skills" desc="Frontend + Backend + (DataScience, Machine Learning, FullStackWeb) "/>
<Card name="Projects" desc="projects on Web Development,Data Analytics,Flutter and trying to add ML for future projects"/>

</div>

<Content/>

<a href="#contact"><Button 
  name= "primary"
  hr="#contact"
  text="Let's Talk"
  /> </a>


</div>

</div>
</div>

</section>

}