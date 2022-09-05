import "./education.css";
import { useTransition,animated } from "react";
import { point1, point2,subjects1,subjects2 } from "./points";
import EduCard from "./educard";
export default function Education(){
  
 
    return  <section id="education">
        <h1>EDUCATION</h1>
        <div className="maincontainer">
        <EduCard title="Persuing Bachelors in Computer Science and Engineering"
        subtitle="JECRC University , Jaipur 2020-24"
        bullet={point1}
        subject={subjects1}
        />
        
        <EduCard title="Class 11-12th in Science and Mathematics"
        subtitle="Mandsaur International School , Mandsaur"
        bullet={point2}
        subject={subjects2}
        />
    </div>
        
 </section>
}