import React from 'react'
import './Home.css'
import { NavLink } from "react-router-dom";
import foto from '../assets/foto.png'

const Home = () => {
  return (
<div className='Home'>


<div className='Iam'>
  <h1>HI I'm <br/> Rubens Galarraga <br/> Web Developer </h1>
  <p className='subtitulo'>Frontend Developer / Javascript / React / Node js </p>
 
    <NavLink to="/contact" className='contactme'> Contact me </NavLink>
  
  
</div>

<div >
 <img className='fotoperfil' src={foto} alt=''/>

</div>



</div>



    
  )
}

export default Home