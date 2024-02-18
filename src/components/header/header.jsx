import React from 'react';
import { Link } from 'react-router-dom'
import { logoLinkStyle, navbarButtonStyle } from "../../assets/index"

function header() {
  return (
    <div className='navbar-container'>
      <div className='logo-container'>
        <h2 className='logo-name-container'><Link to="/" style={logoLinkStyle}>StrayInTouch</Link></h2>
        </div>
        <div className='navbar-buttons-container'>
          <ul>
            <li className='navbar-button'><a href='#hero'>Home</a></li>
          <li className='navbar-button'><a href='#about'>About us</a></li>
            <li className='navbar-button'><a href=''>What we do</a></li>
            <li className='navbar-button'><a href=''>Contact</a></li>
          </ul>
      </div>
      <div className='button-container-navbar'>
        <Link to="/login" style={navbarButtonStyle}> Login</Link>
        <button className='navbar-donate-button'>Donate</button>
      </div>
      </div>
  )
}

export default header