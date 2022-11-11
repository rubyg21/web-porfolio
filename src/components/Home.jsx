import React from 'react'
import './Home.css'
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
<div className='Home'>


<div className='Iam'>
  <h1>HI I'm <br/> Rubens Galarraga <br/> Web Developer </h1>
  <p className='subtitulo'>Frontend Developer / Javascript / React</p>
 
    <NavLink to="/contact" className='contactme'> Contact me </NavLink>
  
  
</div>

<div className='Iam'>
  <h1>HI I'm <br/> Rubens Galarraga <br/> Web Developer </h1>

</div>



</div>



    
  )
}

export default Home