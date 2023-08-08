import { useState } from "react";
import { Link } from "react-router-dom";
import { useGoogleLogin } from '@react-oauth/google';

import { GiHadesSymbol } from "react-icons/gi";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
// import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


import "./Register.scss";

const Register = () => {
    const [isChecked, setIsChecked] = useState(false)

    const checkStyle = {
        filter: 'drop-shadow(2px 2px 12px #92e2ae)',
    }
    const checked = (e) => {
        setIsChecked(e.target.checked)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission and user registration logic here
    };

    const handleGoogleLogin = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
        onError: () => console.log('Login Failed')
    })

    return (
        <div className="register">
            <div className="container">
                <div className="left">
                    <h2>Create an Account</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="name">
                            <input type="text" name="fname" placeholder="First Name" />
                            <input type="text" name="lname" placeholder="Last Name" />
                        </div>
                        <div className="userinfo">
                            <input type="text" name="username" placeholder="Username" className="username" />
                            <input type="email" name="email" placeholder="E-Mail" />
                        </div>
                        <div className="gender-group">
                            <input type="radio" name="gender" value="male" />
                            <label htmlFor="male">Male</label>
                            <input type="radio" name="gender" value="female" />
                            <label htmlFor="female">Female</label>
                        </div>
                        <div className="password-group">
                            <input type="password" name="password" placeholder="Password" />
                            <input type="password" name="confirmPassword" placeholder="Confirm Password" />
                        </div>
                        <div className="tnc">
                            <input type="checkbox" name="tnc" className="check" checked={isChecked} onChange={checked} style={isChecked ? checkStyle : null} />
                            <span>
                                By signing up you&apos;ll be agreeing to our{" "}
                                <Link to={"/extras/tnc"}>Terms of Service</Link> and{" "}
                                <Link to={"/extras/policy"}>Privacy Policy</Link>
                            </span>
                        </div>
                        <button type="submit">Register</button>

                        <span className='or'>or</span>

                        <div className="google">
                            <button className='google-button' onClick={handleGoogleLogin}>
                                <FcGoogle className='google-icon' />Google
                            </button>
                        </div>
                    </form>
                </div>
                <div className="right">
                    <p>
                        <GiHadesSymbol className="logo" />
                        <div className="desc">
                            Unlock <span>EarthWander🌍</span>&apos;s full potential. Get personalized travel recommendations, save favorites, and create a sustainable future with every journey. <span>Sign up now!</span>
                        </div>
                        <div className="socials">
                            <h2>Connect with us!</h2>
                            <div className="icons">
                                <a href="https://www.facebook.com"><FaFacebookF className='social-link' /></a>
                                <a href="https://www.instagram.com"><FaInstagram className='social-link' /></a>
                                <a href="https://www.linkedin.com"><FaLinkedinIn className='social-link' /></a>
                                <a href="https://www.twitter.com"><FaTwitter className='social-link' /></a>
                            </div>
                        </div>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
