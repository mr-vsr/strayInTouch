import React,{useState, useEffect} from 'react';
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../auth/firebase-congif";
import { Link, useNavigate } from 'react-router-dom';
import { styledLink } from '../../assets';
import { useDispatch } from 'react-redux';
import { Login as LogIn,Logout } from "../../store/authSlice";


function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const login = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                if (user) {
                    dispatch(LogIn({
                        userData: user,
                        isLoggedIn: true
                    }));
                    navigate("/user-page")
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }

    // onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //         dispatch(Login({
    //             userData: user,
    //             isLoggedIn: true
    //         }));
    //         navigate("/ngo-home-page");
    //     } else {
    //         dispatch(Logout())
    //     }
    // });

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(LogIn({
                    userData: user,
                    isLoggedIn: true
                }));
                navigate("/user-page");
            } else {
                dispatch(Logout());
            }
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, [dispatch, navigate]);
    
return (
    <div className='container'>
        <div className='login-container'>
            <h2 className='login-heading'>User Login</h2>
            <form
                onSubmit={handleSubmit}
                className='login-form-container'>
                <input
                    name={email}
                    type='email'
                    className='email'
                    placeholder='E-mail'
                    onChange={(event) => setEmail(event.target.value)} 
                    value={email}
                    required
                    />
                <input
                    name={password}
                    type='password'
                    className='password'
                    placeholder='Password'
                    onChange={(event) => setPassword(event.target.value)} 
                    value={password}
                    required
                    />
                    <button type='submit' className='login-button' onClick={login}>Continue</button>
            </form>
            <p
                className='signup-text'>Don't have an account?
                <Link to="/user-signup" style={styledLink}>Signup
                </Link>
            </p>
        </div>
    </div>
)
}

export default Login