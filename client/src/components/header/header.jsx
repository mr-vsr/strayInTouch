import React from 'react';
import { Link } from 'react-router-dom'
import { logoLinkStyle, navbarButtonStyle } from "../../assets/index";
import { signOut } from '@firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import { Logout } from '../../store/authSlice';
import { auth } from '../../auth/firebase-config';

function Header() {

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const dispatch = useDispatch();

  const logout = async () => {
    try {
      await signOut(auth);
      dispatch(Logout());
    } catch (error) {
      console.log("Error in signing out : ", error);
    }

  }

  return (
    <div className='navbar-container'>
      <div className='logo-container'>
        <h2 className='logo-name-container'><Link to="/" style={logoLinkStyle}>StrayInTouch</Link></h2>
      </div>
      <div className='navbar-buttons-container'>
        <ul>
          <li className='navbar-button'><Link to="/">Home</Link></li>
          <li className='navbar-button'><Link to="/about">About</Link></li>
          <li className='navbar-button'><a href='#what-we-do'>What we do</a></li>
          <li className='navbar-button'><a href='#contact'>Contact</a></li>
        </ul>
      </div>
      <div className='button-container-navbar'>
        {isLoggedIn ? <button className='navbar-logout-button' onClick={logout}>Logout</button> : <Link to="/type-of-login" style={navbarButtonStyle}> Login</Link>}
        <Link to="/donations" className="navbar-donate-button">
          Donate
        </Link>
      </div>
    </div>
  )
}

export default Header