import { useState } from 'react';
import { Link  } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
// import { storeUser } from '../../components/Helpers';
import { GiHadesSymbol } from 'react-icons/gi'

import './Login.scss'

const initialUser = { identifier: "", password: "" };

const Login = () => {

    const [user, setUser] = useState(initialUser)

    // const url = import.meta.env.VITE_GOOGLE_API
    // console.log(url)

    const handleChange = ({ target }) => {
        setUser((currentUser) => ({
            ...currentUser,
            [target.name]: target.value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    //     const url = 'axios url'
    //     try {
    //         if(user.identifier && user.password) {
    //             const {data} = await axios.post(url, user)

    //             if (data.jwt) {
    //                 setUser(initialUser);
    //                 navigate('/');
    //                 // window.location.reload(true);
    //                 alert('Logged in')
    //             }
    //         }
    //     } catch (error) {
    //         alert(error)
    //     }

    }

    const handleGoogleLogin = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
        onError: () => console.log('Login Failed')
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
                        <input type="password" onChange={handleChange} placeholder='Password' name='password' value={user.password} />
                        <button type="submit">
                            Login
                        </button>
                        <span>Don&apos;t have an Account yet?<Link to={'/register'}>Register</Link></span>

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