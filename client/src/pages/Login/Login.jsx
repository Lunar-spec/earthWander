import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
// import { storeUser } from '../../components/Helpers';
import { GiHadesSymbol } from 'react-icons/gi'

import './Login.scss'

const initialUser = { identifier: "", password: "" };

const Login = () => {

    const [user, setUser] = useState(initialUser)
    const [viewPwd, setViewPwd] = useState('password')

    const handleViewPwd = () => {
        viewPwd === 'password' ?
            setViewPwd('text') : setViewPwd('password')
    }

    const validatePwd = (password) => {
        const regexPwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

        if (password === '') {
            alert('Enter Password')
            return false
        }
        else {
            if (password.match(regexPwd)) {
                return true
            }
            return alert('Enter a valid password')
        }
    }

    const validateEmail = (email) => {
        const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (email === '') {
            alert('Enter Email')
            return false
        }
        else {
            if (email.match(regexEmail)) {
                return true
            }
            return alert('Enter a valid Email')
        }
    }

    const handleChange = ({ target }) => {
        setUser((currentUser) => ({
            ...currentUser,
            [target.name]: target.value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        validateEmail(user.identifier) && validatePwd(user.password)
            &&
            //     const url = 'axios url'
            //     try {
            //         if(user.identifier && user.password) {
            //             const {data} = await axios.post(url, user)

            //             if (data.jwt) {
            //                 setUser(initialUser);
            //                 navigate('/');
            // window.location.reload(true);
            //                 alert('Logged in')
            //             }
            //         }
            //     } catch (error) {
            //         alert(error)
            //     }
            null

    }

    const handleGoogleLogin = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
        onError: () => alert('Login Failed')
    })

    return (
        <div className='login'>
            <div className="container">
                <div className="left">
                    <GiHadesSymbol className="logo" />
                    <h2 className='heading'>Welcome back to <span className="title">EarthWander🌍</span>, Let&apos;s continue with the Adventures!</h2>
                    <div className="socials">
                        <h2>Connect with us!</h2>
                        <div className="icons">
                            <a href="https://www.facebook.com"><FaFacebookF className='social-link' /></a>
                            <a href="https://www.instagram.com"><FaInstagram className='social-link' /></a>
                            <a href="https://www.linkedin.com"><FaLinkedinIn className='social-link' /></a>
                            <a href="https://www.twitter.com"><FaTwitter className='social-link' /></a>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <form onSubmit={handleSubmit}>
                        <input type="text" onChange={handleChange} placeholder='Username' name='identifier' value={user.identifier} />
                        <div className="password">
                            {viewPwd === 'text' ? <FaEye className='icon' onClick={handleViewPwd} /> : <FaEyeSlash className='icon' onClick={handleViewPwd} />}
                            <input type={viewPwd} onChange={handleChange} placeholder='Password' name='password' value={user.password} />
                        </div>
                        <button type="submit">
                            Login
                        </button>
                        <span>Don&apos;t have an Account yet?<Link to={'/register'} className='register'>Register</Link></span>

                        <span className='or'>or</span>

                        <div className="google">
                            <button className='google-button' onClick={handleGoogleLogin}>
                                <FcGoogle className='google-icon' />Google
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login