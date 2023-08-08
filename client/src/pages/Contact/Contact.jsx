import { Link } from "react-router-dom"
import { HiMapPin, HiPhone, HiEnvelope } from "react-icons/hi2";
import curiosity2 from '../../assets/curiosity-children-animate.svg'
import cherry from '../../assets/happy-earth-animate2.svg'

import './Contact.scss'
import { useState } from "react";


const Contact = () => {
    const [isChecked, setIsChecked] = useState(false)

    const submitStyle = {
        cursor: isChecked ? 'pointer' : 'default',
        opacity: isChecked ? '1' : '0',
        filter: 'drop-shadow(4px 4px 12px #92e3ae)',
    }

    const checkStyle = {
        filter: 'drop-shadow(4px 4px 12px #92e3ae)',
    }

    const checked = (e) => {
        setIsChecked(e.target.checked)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        isChecked ? alert('good') : alert('nope')
    }

    return (
        <div className="contact">
            <img src={cherry} alt="nature" className="nature" />
            <div className="left">
                <h2>Drop us a Message/ Feedback:</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="fname" className="fname" placeholder="First Name" />
                    <input type="text" name="lname" className="lname" placeholder="Last Name" />
                    <input type="email" name="gmail" placeholder="E-Mail" />
                    <input type="number" name="phone" placeholder="Phone Number" />
                    <textarea name="feed" cols="30" rows="10" placeholder="Enter a Message/ Feedback" />
                    <div className="tnc">
                        <input type="checkbox" checked={isChecked} onChange={checked} style={isChecked ? checkStyle : null} name="tnc" className="check" />
                        <span>Check to indicate that you agree to the <Link to={'/extras/tnc'}>Terms of Service</Link> and <Link to={'/extras/policy'}>Privacy Policy</Link>.</span>
                    </div>
                    <button type="submit" disabled={!isChecked} style={submitStyle}>Submit</button>
                </form>
            </div>
            <div className="right">
                <h2>Contact us:</h2>
                <span>We&apos;re open for any suggestions or any kind of collaboration.</span>
                <div className="content">
                    <HiMapPin className="content-icon" /><b>Address:</b><span style={{ textAlign: 'center' }}>6027 Marquis Avenue, Lake Augusta, Arkansas, 83608</span>
                    <HiPhone className="content-icon" /><b>Phone Number:</b><span>(555) 805-284-4324</span>
                    <HiEnvelope className="content-icon" /><b>Email:</b><span>info@earthwander.com</span>
                </div>
            </div>
            <img src={curiosity2} alt="child" className="child" />
        </div>
    )
}

export default Contact