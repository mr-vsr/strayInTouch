import React from 'react';
import { Link } from 'react-router-dom';
import { loginTypeButtonNgo, loginTypeButtonUser } from "../../assets/index.js";
import { HeroImage } from '../../assets';

function LoginType() {
    return (
        <div className='type-of-login-container'>
            <div className='type-of-login-heading-container'>
                <h1 className='type-of-login-heading'>StrayInTouch</h1>
            </div>
            <div className='type-of-login-container-top'>
                <img src={HeroImage} alt="Hero" className='type-of-login-image' />
            </div>
            <div className='type-of-login-container-bottom'>
                <h1 className='type-of-login-bottom-heading'>Make a difference by joining us in this journey</h1>
                <h2 className='type-of-login-type-text'>Login Type</h2>
                <div className='type-of-login-buttons-container'>
                    <Link to="/user-login" className="type-of-login-button">User</Link>
                    <Link to="/ngo-login" className="type-of-login-button">NGO</Link>
                    <Link to="/admin-login" className="type-of-login-button">Admin</Link>
                </div>
            </div>
        </div>
    )
}

export default LoginType