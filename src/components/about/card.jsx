import "./about.css";
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {GiSkills } from "react-icons/gi";
import {VscFolderLibrary} from 'react-icons/vsc';
export default function Card(props){
function getCard(){
    if(props.name==="Time invested") 
    return <FaAward/>
if(props.name==="Skills") 

return <GiSkills/>
 if(props.name==="Projects") 
return <VscFolderLibrary/>
}


    return (
<div className="card">
  {getCard()}
  {props.name}
  
  <small style={ {color: "rgba(255,255,255,0.4)"}}>{props.desc}</small>    
     
    
</div>



    )



}