import { getAllByTestId, getByDisplayValue } from '@testing-library/react'
import './education.css'
import SubTag from './subtags'

export default function EduCard(props){

function get(ele){
    return <SubTag sub={ele}/>
}

  

return <div className='eduCard'>
<h2>{props.title}</h2>
<h3>{props.subtitle}</h3>
<small style={{display:"block"}}>{props.bullet[0]}</small>
<small style={{display:"block"}}>{props.bullet[1]}</small>
<small style={{display:"block"}}>{props.bullet[2]}</small>
<div className="tags">{props.subject.map(get)}</div>


</div>



}