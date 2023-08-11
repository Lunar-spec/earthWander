import { useState } from "react";
import { Link } from "react-router-dom";
import { useGoogleLogin } from '@react-oauth/google';

import { GiHadesSymbol } from "react-icons/gi";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaEye, FaEyeSlash } from 'react-icons/fa';
// import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


import "./Register.scss";

const Register = () => {
    const [user, setUser] = useState({
        fname: '',
        lname: '',
        username: '',
        email: '',
        gender: '',
        password: ''
    })
    const [isChecked, setIsChecked] = useState(false)
    const [viewPwd, setViewPwd] = useState('password')


    const checkStyle = {
        filter: 'drop-shadow(2px 2px 12px #92e2ae)',
    }
    const checked = (e) => {
        setIsChecked(e.target.checked)
    }

    const validateEmail = (email) => {
        const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (email.match(regexEmail)) {
            return true
        }
        return alert('Enter valid Email')

    }

    const validatePwd = (password, cnfPassword) => {
        const regexPwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

        if (password === cnfPassword) {
            if (password.match(regexPwd)) {
                return password;
            }
            return alert('Enter a valid Password')
        }
        alert("Make sure your password matches")

    }

    const validateUsername = (username) => {
        const regExUsername = /^[a-z0-9]+$/

        if (username.match(regExUsername)) {
            return true;
        }
        alert('Username should be alphanumeric, lowercase and no symbols')

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.fname === '' || user.lname === '' || user.username === '' || user.gender === '' || user.email === '' || user.password === '') {
            alert('Fill all the fields')
        }
        else {
            validateEmail(user.email) && validatePwd(user.password, document.getElementsByName('cnfPassword')[0].value) && validateUsername(user.username) &&
                console.log(user)
        }
    };

    const handleGoogleLogin = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
        onError: () => alert('Registration Failed')
    })

    const handleChange = ({ target }) => {
        setUser((currentUser) => ({
            ...currentUser,
            [target.name]: target.value
        }))
    }

    const handleViewPwd = () => {
        viewPwd === 'password' ?
            setViewPwd('text') : setViewPwd('password')
    }

    return (
        <div className="register">
            <div className="container">
                <div className="left">
                    <h2>Create an Account</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="name">
                            <input type="text" name="fname" placeholder="First Name" onChange={handleChange} value={user.fname} />
                            <input type="text" name="lname" placeholder="Last Name" onChange={handleChange} value={user.lname} />
                        </div>
                        <div className="userinfo">
                            <input type="text" name="username" placeholder="Username" className="username" onChange={handleChange} value={user.username} />
                            <input type="email" name="email" placeholder="E-Mail" onChange={handleChange} value={user.email} />
                        </div>
                        <div className="gender-group">
                            <input type="radio" name="gender" value="Male" onChange={handleChange} />
                            <label htmlFor="male">Male</label>
                            <input type="radio" name="gender" value="Female" onChange={handleChange} />
                            <label htmlFor="female">Female</label>
                        </div>
                        <div className="password-group">
                            {viewPwd === 'text' ? <FaEye className='icon' onClick={handleViewPwd} /> : <FaEyeSlash className='icon' onClick={handleViewPwd} />}
                            <input type={viewPwd} name="password" placeholder="Password" onChange={handleChange} value={user.password} />
                            <input type={viewPwd} name="cnfPassword" placeholder="Confirm Password" />
                        </div>
                        <div className="tnc">
                            <input type="checkbox" name="tnc" className="check" checked={isChecked} onChange={checked} style={isChecked ? checkStyle : null} />
                            <span>
                                By signing up you&apos;ll be agreeing to our{" "}
                                <Link to={"/extras/tnc"}>Terms of Service</Link> and{" "}
                                <Link to={"/extras/policy"}>Privacy Policy</Link>
                            </span>
                        </div>
                        <button type="submit" style={{ cursor: isChecked ? 'pointer' : 'not-allowed' }} disabled={isChecked ? false : true}>Register</button>

                        <span className='or'>or</span>

                        <div className="google">
                            <button className='google-button' onClick={handleGoogleLogin}>
                                <FcGoogle className='google-icon' />Google
                            </button>
                        </div>
                    </form>
                </div>
                <div className="right">
                    <div>
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;