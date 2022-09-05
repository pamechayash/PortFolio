import { Scale } from "chart.js";
import './contact.css'
export default function ContactBox(props){
return <div className="contactContainer">
   
    <a href={props.link} className="ContactBox">
   
<props.icon style={{transform:"scale(1.5)"}}/>

Click to Send a {props.type},

</a>

{props.info}
</div>

}