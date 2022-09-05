import "./testimonial.css";
import mlschool from '../../assets/mlschool.png'
export default function Testimonial(){
    return  <section id="testimonials">
   <h1>Achievements</h1>
<div className="achieved">
<h3>** Got Selected for Amazon MI School and Learning ML and DS And completed 1 Month training by Amazon ML engineers<br/><br/></h3>
<img src={mlschool} style={{
    width:"350px",
    height:"450px",
    borderRadius:"10%"
}} />
<h3><br/><br/>** Got selected as a lead for my university for D2C now known as Unstop.com<br/><br/></h3>
<h3>** HEAD BOY of School for two years</h3>
</div>

    </section>
}