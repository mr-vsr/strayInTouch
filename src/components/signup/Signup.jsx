import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../auth/firebase-congif";
import { Link } from 'react-router-dom';
import { styledLink } from '../../assets';


function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password,username);
  }

  const signup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }

  return (
    <div className='container'>
      <div className='signup-container'>
        <h2 className='signup-heading'>SignUp</h2>
        <form onSubmit={handleSubmit} className='signup-form-container'>
          <input name={username} type='text' className='username' placeholder='Name' onChange={(event) => setUsername(event.target.value)} />
          <input name={email} type='email' className='email' placeholder='E-mail' onChange={(event) => setEmail(event.target.value)} />
          <input name={password} type='password' className='password' placeholder='Password' onChange={(event) => setPassword(event.target.value)} />
          <button type='submit' className='signup-button'
          onClick={signup}>SignUp</button>
        </form>
        <p className='login-text'>Already have an account? <Link to="/login" style={styledLink}>Login</Link></p>
        {/* <button className='login-button-signup'>Login</button> */}
      </div>
    </div>
  )
}
export default Signup