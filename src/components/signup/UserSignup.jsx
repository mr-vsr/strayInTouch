import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../auth/firebase-congif";
import { Link } from 'react-router-dom';
import { styledLink } from '../../assets';
import { db } from "../../auth/firebase-congif";
import { collection, addDoc } from "firebase/firestore";

function Signup() {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password:""
  });

  let name, value;

  const data = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserInfo({ ...userInfo, [name]: value });
  }

  const pushUserData = async () => {
    try {
      const requiredFields = ["username", "email", "password"];
      const missingFields = requiredFields.filter(field => !userInfo[field])
      if (missingFields.length === 0) {
        const userRef = await addDoc(collection(db, "userInfo"), userInfo);
        if (userRef.id) {
          setUserInfo({
            username: "",
            email: "",
            password: ""
          });
        }
      } else {
        alert("Fill the required fields!");
      }
    } catch (error) {
      
    }
  }

  const signup = () => {
    createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
      .then((userCredential) => {
        const user = userCredential.user;
        pushUserData();
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
        <h2 className='signup-heading'>User SignUp</h2>
        <form
          onSubmit={(e) => e.preventDefault()}
          className='signup-form-container'>
          <input
            name="username"
            type='text'
            className='username'
            placeholder='Name'
            onChange={data}
            required
            value={userInfo.username}
          />
          <input
            name="email"
            type='email'
            className='email'
            placeholder='E-mail'
            onChange={data} 
            required
            value={userInfo.email}
            />
          <input
            name="password"
            type='password'
            className='password'
            placeholder='Password'
            onChange={data}
            required
            value={userInfo.password}
          />
          <button
            type='submit'
            className='signup-button'
            onClick={signup}>SignUp</button>
        </form>
        <p
          className='login-text'>Already have an account?
          <Link to="/user-login" style={styledLink}>Login
          </Link>
        </p>
      </div>
    </div>
  )
}
export default Signup