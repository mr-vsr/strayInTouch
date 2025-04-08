import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../auth/firebase-config";
import { Link, useNavigate } from 'react-router-dom';
import { styledLink } from '../../assets';
import { collection, addDoc } from "firebase/firestore";
import { useDispatch } from 'react-redux';
import { Login } from "../../store/authSlice";

function NgoSignup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [ngoInfo, setNgoInfo] = useState({
    NgoName: "",
    email: "",
    password: ""
  })

  let name, value;
  const data = (e) => {
    name = e.target.name;
    value = e.target.value;
    setNgoInfo({ ...ngoInfo, [name]: value });
  }
  const pushNgoData = async () => {
    try {
      const requiredFields = ["NgoName", "email", "password"];
      const missingFields = requiredFields.filter(field => !ngoInfo[field]);
      if (missingFields.length === 0) {
        const ngoRef = await addDoc(collection(db, "NgoInfo"), ngoInfo);
        if (ngoRef.id) {
          setNgoInfo({
            NgoName: "",
            email: "",
            password: ""
          })
        }
      } else {
        alert("Fill all the fields!");
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  const signup = () => {
    createUserWithEmailAndPassword(auth, ngoInfo.email, ngoInfo.password)
      .then((userCredential) => {
        const user = userCredential.user;
        pushNgoData();
        if (user) {
          dispatch(Login({
            userData: user,
            isLoggedIn: true
          }));
          navigate("/ngo-homepage");
        }
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
        <h2 className='signup-heading'>Ngo SignUp</h2>
        <form onSubmit={(event) => event.preventDefault()} className='signup-form-container'>
          <input
            name="NgoName"
            type='text'
            className='username'
            placeholder='NGO Name'
            onChange={data}
            value={ngoInfo.NgoName}
            required
          />
          <input
            name="email"
            type='email'
            className='email'
            placeholder='E-mail'
            onChange={data}
            value={ngoInfo.email}
            required
          />
          <input
            name="password"
            type='password'
            className='password'
            placeholder='Password'
            onChange={data}
            value={ngoInfo.password}
            required
          />
          <button type='submit' className='signup-button'
            onClick={signup}>SignUp</button>
        </form>
        <p className='login-text'>Already have an account? <Link to="/ngo-login" style={styledLink}>Login</Link></p>
      </div>
    </div>
  )
}

export default NgoSignup