import React from 'react'
import "./Navbar.css"
import Image from "../Assets/Logo New.png";

import Eventmedia from "../Assets/Teaser.mp4"

import { Link } from 'react-router-dom';
import Body from './Body'
const Navbar = () => {

  return (
    
     <div className='nav'>
      
      <ul id='actions'>
        <img id='logo' src={Image}></img>
        <ul id='buttons' >
          <li><Link to="/">Home</Link></li>
          <li><Link to="Contact">Contacts Us</Link></li>
          <li><Link to="Registrations"> Registrations</Link></li>
        </ul> 
      
      </ul>
     
    </div>
  
  )
}

export default Navbar
