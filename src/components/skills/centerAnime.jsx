import './skills.css'
import data3 from'./data3.json'
import Lottie from 'react-lottie'

export default function CenterAnimation(){

    const defaultOptions={
        loop:true,
        autoplay:true,
        animationData:data3,
        
        rendererSettings:{
            preserveAspectRatio: "xMidYMid slice",
        },
      }
      return  <Lottie 
      options={defaultOptions}
     
      style={{transform:"scale(0.8)",
  margin:"0px 0px",
  padding:"0px 0px",
  }}
      height={500}
     width={400}/>
     

}





