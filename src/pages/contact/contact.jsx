import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
import Footer from '../../components/footer/footer';
import WebHeader from '../../components/webHeader/webHeader';
import baseUrl from '../../config';
import './contact.scss';
import Fb from './fb.svg';
import In from './in.svg';
import Ln from './ln.svg';
import Tw from './tw.svg';

const Contact = () => {
    const [name, setName] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState("");


    const data = {
        name,
        phoneNo,
        email,
        message,
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
    
        try {
            const res = await axios.post(`${baseUrl}/user/contact`, data)
            console.log(res.data)
            toast.success(res?.data?.message)
            setLoading(false)
            window.location.reload()
        } catch(error) {
            console.log(error?.response?.data)
            toast.error(error?.response?.data)
            setLoading(false)
        }
      };

    return (
        <div className="contact">
            <WebHeader />
            <div className="banner">
                <p className="txt">Contact Us</p>
            </div>
            <div className="bottom">
                <div className="left">
                    <p className="titlec">Get in touch with us</p>
                    <p className="it"><strong>SixEleven Empowerment Foundation (SEEF)</strong></p>
                    <p className="address">7, Prince Ibrahim Odofin Street, <br />
Idado Peaceville Estate, Igbo-Efon Bus-Stop, Lekki, <br />
Lagos, Nigeria</p>
                    <p className="phones">0812345678, 0708976543</p>
                    <p className="phones">Email: sixefoundation@gmail.com; info@sixefoundation.org</p>
                    <p className="socials">Socials</p>
                    <div className="icons">
                    <a href="http://" target="_blank" rel="noopener noreferrer"><img src={Fb} alt="fb" /></a>
                        <a href="http://instagram.com/611efoundation" target="_blank" rel="noopener noreferrer"><img src={In} alt="in" /></a>
                        <a href="http://" target="_blank" rel="noopener noreferrer"><img src={Ln} alt="ln" /></a>
                        <a href="http://twitter.com/611efoundation" target="_blank" rel="noopener noreferrer"><img src={Tw} alt="tw" /></a>
                    </div>
                </div>
                <div className="right">
                    <form onSubmit={handleSubmit}>
                        <div className="input">
                            <label>Name</label><br />
                            <input onChange={e => setName(e.target.value)} type="text" placeholder='' />
                        </div>
                        <div className="input">
                            <label>Email Address</label><br />
                            <input onChange={e => setEmail(e.target.value)} type="text" placeholder='' />
                        </div>
                        <div className="input">
                            <label>Phone Number</label><br />
                            <input minLength={11} maxLength={11} onChange={e => setPhoneNo(e.target.value)} type="text" placeholder='' />
                        </div>
                        <div className="input">
                            <label>Message</label><br />
                            <textarea onChange={e => setMessage(e.target.value)} placeholder='' name="" id="" cols="30" rows="7"></textarea>
                        </div>
                        <button type='submit'>{loading ? "SENDING..." : "SEND MESSAGE"}</button>
                    </form>
                </div>
            </div>
            <div className="nxt">
                <div className="about-usx">
                    <div className="title">
                        <h3 style={{fontSize: "20px"}} className='title-txt'>Our Location</h3>
                    </div>
                    <div className="about-map"></div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;