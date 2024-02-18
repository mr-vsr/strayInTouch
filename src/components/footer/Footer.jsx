import React,{useState} from 'react';
import { footerButtonStyle,footerSpecialButtonStyle } from '../../assets';
import { Link } from 'react-router-dom';

function Footer() {

  const  [footerEmail, setFooterEmail] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    console.log(footerEmail);
  }
  return (
    <div className='footer-container'>
      <div className='footer-left-part-container'>
      <div className='footer-logo-container'>
      <h2 className='footer-logo-text'>StrayInTouch</h2>
      </div>
      <div className='footer-buttons-container'>
        <ul className='footer-button-inner-container'>
          <li className='footer-button'><Link to="#hero" style={footerSpecialButtonStyle}>Home</Link></li>
          <li className='footer-button'><Link to="#about" style={footerButtonStyle}>About us</Link></li>
          <li className='footer-button'><Link to="#what-we-do" style={footerButtonStyle}>What We Do</Link></li>
          <li className='footer-button'><Link to="#what-we-do" style={footerButtonStyle}>Team</Link></li>
          <li className='footer-button'><Link to="#contacts" style={footerButtonStyle}>Contact</Link></li>
        </ul>
      </div>
      <div className='footer-buttons-container'>
        <ul className='footer-button-inner-container'>
          <li className='footer-button  footer-special-button'>More</li>
          <li className='footer-button'>Projects</li>
          <li className='footer-button'>Events</li>
          <li className='footer-button'>Donate</li>
      </ul>
      </div>
      <div className='footer-social-button-container'>
        <ul className='footer-social-buttons-inner-container'>
          <li className='footer-button footer-special-button'>Connect</li>
          <li className='footer-button'>Facebook</li>
          <li className='footer-button'>Linkedin</li>
          <li className='footer-button'>Twitter</li>
          <li className='footer-button'>Instagram</li>
        </ul>
        </div>
      </div>
      <div className='footer-email-container'>
        <h1>Subscribe to get latest updates</h1>
        <input name={footerEmail} type='email' placeholder='your email' onChange={(e) => setFooterEmail(e.target.value)} className='footer-email-input'></input>
        <button type='submit' onClick={handleClick} className='footer-submit-button'>Subscribe</button>
      </div>
    </div>
  )
}

export default Footer