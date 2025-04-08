import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../auth/firebase-config";
import { Link, useNavigate } from 'react-router-dom';
import { styledLink } from '../../assets';
import { motion } from 'framer-motion';
import '../../App.css';

function AdminSignup() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const signup = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                if (user) {
                    navigate("/admin-dashboard")
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
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
                    Admin Signup
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
                            name={username}
                            type='text'
                            className='username'
                            placeholder='Username'
                            onChange={(event) => setUsername(event.target.value)}
                            value={username}
                            required
                        />
                    </motion.div>
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <input
                            name={email}
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
                            name={password}
                            type='password'
                            className='password'
                            placeholder='Password'
                            onChange={(event) => setPassword(event.target.value)}
                            value={password}
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
                        Create Account
                    </motion.button>
                </motion.form>
                <motion.p
                    className='login-text'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    Already have an account?
                    <Link to="/admin-login" style={styledLink}>Login</Link>
                </motion.p>
            </motion.div>
        </motion.div>
    )
}

export default AdminSignup 