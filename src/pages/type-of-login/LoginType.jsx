import React from 'react'
import { Link } from 'react-router-dom'
import { navbarButtonStyle } from "../../assets/index"

function LoginType() {
    return (
        <div><h1>Login Type</h1>
            <Link to="/user-login" style={navbarButtonStyle}> User-Login</Link>
            <Link to="/ngo-login" style={navbarButtonStyle}> Ngo-Login</Link>
        </div>
    )
}

export default LoginType