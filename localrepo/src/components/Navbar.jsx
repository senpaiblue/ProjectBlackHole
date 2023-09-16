import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import logo from '../assets/logo.png'

function Navbar() {
  return (
   <Nav>
    <Link src={logo} alt='logo'>Reflect</Link>
    <ul>
      <li>
        <Link to="/Product">
        Product
        </Link> 
      </li> 
       <li>
        <Link to="/Pricing">
        Pricing
        </Link> 
      </li> 
       <li>
        <Link to="/Company">
        Company
        </Link> 
      </li>  
      <li>
        <Link to="/Blog">
        Blog
        </Link> 
      </li> 
       <li>
        <Link to="/changelog">
        Changelog
        </Link> 
      </li>
    </ul>

   </Nav>
  )
}

export default Navbar
