
import React from 'react';
import './App.css';


import { useEffect } from 'react';
import { useState } from 'react';
import Header from './components/header/header'; 
import Footer from './components/footer/footer';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Education from './components/education/education';
import Testimonial  from './components/testimonials/testimonial';
import Nav from './components/nav/nav';
import Project from './components/project/project';
import Skills from './components/skills/skills';
function App() {
  






<p style={{display:"none"}}>
  Edit<code>src/App.js</code> and save to reload with Github Actions.
</p>



  return (
<React.Fragment>

<Header/>
<Nav/>
<About/>
<Education/>
<Skills/>
<Project/>
<Testimonial/>
<Contact/>
<br/>
<br/><br/><br/><br/><br/><br/><br/>
</React.Fragment>



  );
}

export default App;
