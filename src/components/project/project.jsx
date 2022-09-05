import "./project.css";
import { useState } from "react";
import info from "./projectInfos";
import ProjectCard from "./projectcard";
import img from "../../assets/bgimage.jpeg"

export default function Project(){

 
   
  
  
  function getCard(information){
    return  <ProjectCard   id= {information.id}
    orientation={information.orientation} 
    anime={information.anime}
    type={information.type}
    video={information.video}
    title={information.title}
     content={information.content}
     git={information.git}
     />
  }


       
    


    return  <section id="project" style={{backgroundImage:"url("+img+")"}}>
      <div className="head">
  <h1 className="heading">Projects</h1></div>
 


{info.map(getCard)}


 
 <ProjectCard   id="odd"
 orientation="center" 
 anime="center"

  
  />


    </section>    
}