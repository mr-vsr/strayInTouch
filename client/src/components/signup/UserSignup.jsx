import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../auth/firebase-config";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { styledLink } from '../../assets';
import { motion } from 'framer-motion';
import ErrorDialog from '../ErrorDialog';
import { useDispatch } from 'react-redux';
import { Login as LogIn } from "../../store/authSlice";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const signup = () => {
    if (!name || !email || !password || !phone) {
      setError({ code: 'auth/missing-credentials' });
      return;
    }

    if (password.length < 6) {
      setError({ code: 'auth/weak-password' });
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          dispatch(LogIn({
            userData: user,
            isLoggedIn: true
          }));
          const fromDonations = location.state?.from === 'donations';
          if (fromDonations) {
            navigate('/donations');
          } else {
            navigate('/user-homepage');
          }
        }
      })
      .catch((error) => {
        setError(error);
      });
  }

  return (
    <motion.div
      className='container'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className='signup-container'
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <motion.h2
          className='signup-heading'
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          User Signup
        </motion.h2>
        <motion.form
          onSubmit={handleSubmit}
          className='signup-form-container'
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <input
              type='text'
              className='name'
              placeholder='Full Name'
              onChange={(event) => setName(event.target.value)}
              value={name}
              required
            />
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <input
              type='email'
              className='email'
              placeholder='E-mail'
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              required
            />
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <input
              type='password'
              className='password'
              placeholder='Password'
              onChange={(event) => setPassword(event.target.value)}
              value={password}
              required
            />
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <input
              type='tel'
              className='phone'
              placeholder='Phone Number'
              onChange={(event) => setPhone(event.target.value)}
              value={phone}
              required
            />
          </motion.div>
          <motion.button
            type='submit'
            className='signup-button'
            onClick={signup}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign Up
          </motion.button>
        </motion.form>
        <motion.p
          className='login-text'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          Already have an account?
          <Link to="/user-login" style={styledLink}>Login</Link>
        </motion.p>
      </motion.div>
      {error && <ErrorDialog error={error} onClose={() => setError(null)} />}
    </motion.div>
  )
}

export default Signup