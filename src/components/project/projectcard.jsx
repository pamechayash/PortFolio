import './project.css';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import GetAnimation from './getAnimation';
export default function ProjectCard(props){



    if(props.orientation==="left"){


    return<div id={props.id} className="projectcard">
     <div className='animation'> <GetAnimation type={props.anime}/></div>
<div className="define">
<h3 className='projhead'>{props.title}<button className='projbtn'><a href={props.video} >{props.type}</a></button>
<button className='projbtn'><a href={props.git} >CODE</a></button>
</h3>
  {props.content}
</div>


 </div>
 
 
}
else if(props.orientation==="right")
{
    return <div id={props.id} className="projectcard" style={{alignContent:"right"}}>
     
        <div className="define">
        <h3 className='projhead'>{props.title}
        <button className='projbtn'>  <a href={props.video} >{props.type}</a>  </button>
        <button className='projbtn'><a href={props.git} >CODE</a></button>
        </h3>
 {props.content}
</div>

<div className='animation' 

><GetAnimation type={props.anime}/></div>

</div>
}
else{

  return <div id={props.id} className="projectcard" style={{alignContent:"right"}}>
     
 

<div className='animation' 

><GetAnimation type={props.anime}/>

</div>


</div>


}
    
}
