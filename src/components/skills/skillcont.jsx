import "./skills.css";
import Lottie from 'react-lottie';

import sk from './sk.json'
export default function Askill(props){
    const defaultOptions1={
        loop:true,
        autoplay:true,
        animationData:sk,
        
        rendererSettings:{
            preserveAspectRatio: "xMidYMid slice",
        },
    }
    return (<div  style={{
display:"flex",
justifyContent:"center",
alignItems:"center",



    }} >
        <div className="skillanime">
        <Lottie  
        options={defaultOptions1}
        
        style={{transform:"scale(0.6)",
    margin:"0px 0px",
    padding:"0px 0px",
    display:"flex",
    justifyContent:"center",
    }}
        height={100}
       width={100}/>
       </div>
       <h3>{props.skillname}</h3>
      
       </div>
     );
}
