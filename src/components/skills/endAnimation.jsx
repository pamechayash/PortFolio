import './skills.css'
import data3 from'./separator.json'
import Lottie from 'react-lottie'

export default function EndAnime(){
    const defaultOptions1={
        loop:true,
        autoplay:true,
        animationData:data3,
        
        rendererSettings:{
            preserveAspectRatio: "xMidYMid slice",
        },
      }
   
      return <Lottie 
      options={defaultOptions1}
     
      style={{transform:"scale(0.6)",
  margin:"0px 0px",
  padding:"0px 0px",
position:"sticky",
top:"2px",
left:"1px"
  }}
      height={500}
     width={200} /> 
     

}





