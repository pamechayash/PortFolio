import "./contact.css";
import{ AiOutlineMail} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import ContactBox from './contactMeans'
import { useState } from "react";
import Axios from "axios";


export default function Contact(){
const [email, setEmail] = useState("");
const [suggestion ,setSuggestion]=useState();
function handleChange(event){
var value = event.target.value;
var inputname=event.target.name;
if(inputname=="email")
{
    setEmail(value);
}
 if(inputname==="suggestion")
{
    setSuggestion(value);
}
}
 function handleClick(){
     Axios.post("https://yashpamechaportfolio.herokuapp.com/advice",{email:email ,suggestion:suggestion});
    alert("Thanks for your words");
     // axios.post("http://localhost:9000/advice",values)
}

return  <section id="contact">

<div className="contactCont">
 <h1 style={{color:"white"}}>Contact</h1>
<div className="contactMeans">
<div className="email">
<ContactBox icon={AiOutlineMail} type="Mail" link="mailto:yj69771@gmail.com" info="Yj69771@gmail.com"/>
</div>
<div className="whatsapp">
<ContactBox icon={BsWhatsapp} type="Message" info="+91 7869265789" link="https://api.whatsapp.com/send?phone=7869265789"/>
</div>
</div>
<div className="contactForm" >
    <h3>Advice please</h3>
<input type="email" name="email" onChange={handleChange} id="email" value={email} placeholder="Enter your email" />
<textarea placeholder="Please Write Suggestions" onChange={handleChange}  value={suggestion} name="suggestion" id="suggestion"/>
<h5>advice will be stored for future improvements</h5>
<button type="submit" onClick={handleClick}><h3>Send Suggestion</h3></button>
</div>





</div>



</section>

}