import Footer from '../../components/footer/footer';
import WebHeader from '../../components/webHeader/webHeader';
import './contact.scss';
import Fb from './fb.svg';
import In from './in.svg';
import Ln from './ln.svg';
import Tw from './tw.svg';

const Contact = () => {
    return (
        <div className="contact">
            <WebHeader />
            <div className="banner">
                <p className="txt">Contact Us</p>
            </div>
            <div className="bottom">
                <div className="left">
                    <p className="titlec">Get in touch with us</p>
                    <p className="it">Sixeleven Foundation</p>
                    <p className="address">No 3, Eleven street, Kahan Road, Lagos</p>
                    <p className="phones">0812345678, 0708976543</p>
                    <p className="socials">Socials</p>
                    <div className="icons">
                        <img src={Fb} alt="fb" />
                        <img src={In} alt="in" />
                        <img src={Ln} alt="ln" />
                        <img src={Tw} alt="tw" />
                    </div>
                </div>
                <div className="right">
                    <form>
                        <div className="input">
                            <label>Name</label><br />
                            <input type="text" placeholder='' />
                        </div>
                        <div className="input">
                            <label>Email Address</label><br />
                            <input type="text" placeholder='' />
                        </div>
                        <div className="input">
                            <label>Phone Number</label><br />
                            <input type="text" placeholder='' />
                        </div>
                        <div className="input">
                            <label>Message</label><br />
                            <textarea placeholder='' name="" id="" cols="30" rows="7"></textarea>
                        </div>
                        <button>SUBMIT</button>
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