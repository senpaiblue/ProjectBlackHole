import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import logo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to="/" src={logo} alt="BlackHole">BlackHole</Link>
      <ul className='navcomp'>
        <li>
          <Link to="/Product">Product</Link>
        </li>
        <li>
          <Link to="/Changelog">Changelog</Link>
        </li>
        <li>
          <Link to="/Pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/Blog">Blog</Link>
        </li>
      </ul>
      <div className='CTA'>
        <Link to="/" className='default'>Login</Link>
        <Link to="/" className='primary'>Start free Trial</Link>
      </div>
    </nav>
  )
}

export default Navbar
