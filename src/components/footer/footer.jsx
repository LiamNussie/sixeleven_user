import './footer.scss';
import Logo from '../../assets/logo.svg';
import Fb from './fb.svg';
import In from './in.svg';
import Ln from './ln.svg';
import Tw from './tw.svg';

const Footer = () => {
    return (
        <div className="footer">
            <div className="flexy">
                <div className="leftf">
                    <img src={Logo} alt="sixelevenlogo" />
                    <p className="story">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor lacus praesent ac vel nunc augue egestas at.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor lacus praesent ac vel nunc augue egestas at. </p>
                    <div className="icons">
                        <img src={Fb} alt="fb" />
                        <img src={In} alt="in" />
                        <img src={Ln} alt="ln" />
                        <img src={Tw} alt="tw" />
                    </div>
                </div>
                <div className="rightf">
                    <ul className="links">
                        <li className='lab'>Company</li>
                        <li>About Us</li>
                        <li>Events</li>
                        <li>Get Involved</li>
                        <li>Contact Us</li>
                    </ul>
                    <ul className="links">
                        <li className='lab'>Quick Links</li>
                        <li>Careers</li>
                        <li>Media</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
            </div>
            <div className="down">
                 <p className="rights">&copy; 2021 Six Eleven Foundation. All Rights Reserved</p>
            </div>
           
        </div>
    )
}

export default Footer;