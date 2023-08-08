import { Link } from 'react-router-dom'
import { GiHadesSymbol } from "react-icons/gi";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import './Footer.scss'

const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div className="item">
                    <h1>Services:</h1>
                    <Link to={'/lodging'}><span>Lodging</span></Link>
                    <Link to={'/flights'}><span>Flights</span></Link>
                    <Link to={'/trains'}><span>Trains</span></Link>
                </div>
                <div className="item">
                    <h1>Links:</h1>
                    <Link to={'/extras/faq'}><span>FAQ</span></Link>
                    <Link to={'/register'}><span>Register</span></Link>
                    <Link to={'/history'}><span>Previous Bookings</span></Link>
                    <Link to={'/contact'}><span>Contact Us</span></Link>
                </div>
                <div className="item">
                    <h1>About:</h1>
                    <span>
                        EarthWander - Empowering responsible travelers to explore the world sustainably and ethically, one eco-friendly journey at a time.
                    </span>
                </div>
                <div className="item">
                    <h1>Contact Details:</h1>
                    <span>
                        <ul className="contact-info">
                            <li><span className="info-label">Address:</span>123 Main St., Anytown, CA, 90210</li>
                            <li><span className="info-label">Phone:</span> (555) 123456789</li>
                            <li><span className="info-label">Email:</span> info@earthwander.com</li>
                        </ul>
                    </span>
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <span>
                        <Link to={'/'} className="logo"><GiHadesSymbol className="globe" />EarthWander🌍</Link>
                    </span>
                    <span className="copyright">
                        © Copyright 2023. All Rights Reserved
                    </span>
                </div>
                <div className="right">
                    <div className="socials">
                        <a href="https://www.facebook.com"><FaFacebookF className='social-link' /></a>
                        <a href="https://www.instagram.com"><FaInstagram className='social-link' /></a>
                        <a href="https://www.linkedin.com"><FaLinkedinIn className='social-link' /></a>
                        <a href="https://www.twitter.com"><FaTwitter className='social-link' /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer