import "./header.css";
import CV from '../../assets/cv.pdf'
export default function Button(props){
if(props.name=="normal Download")
    return <button type="button"  style={
     {
       backgroundColor:"transparent",
       color:"#4db5ff"
     }
    } className="Dow" ><a href={CV} download className="Dow">Download CV</a></button>
 
else   if(props.name=="primary")
 {
  return <button type="button"  style={
    {
      backgroundColor:"#4db5ff",
      color:"black",
    }
   } className="Let" ><a href={props.hr} className="Let">{props.text}</a></button>
 }
 else if(props.name=="normal")
 {
  return <button type="button"  style={
    {
      backgroundColor:"#4db5ff",
      color:"black",
    }
   } className="Dow" ><a href={props.hr} className="Dow">{props.text}</a></button>
 }

    
}

export {Button};

