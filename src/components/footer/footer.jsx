import './footer.scss';
import Logo from '../../assets/logo.png';
import Fb from './fb.svg';
import In from './in.svg';
import Ln from './ln.svg';
import Tw from './tw.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <div className="flexy">
                <div className="leftf">
                    <img className='logo' src={Logo} alt="sixelevenlogo" />
                    <p className="story"><strong>SixEleven Empowerment Foundation (SEEF)</strong> is founded to support street hawkers to go back to school 
and empower widow(er)s to maintain good standard of living.
Our vision is to foster an unstoppable generation through education of young children and support to 
the aged population.</p>
                    <div className="icons">
                        <a href="http://" target="_blank" rel="noopener noreferrer"><img src={Fb} alt="fb" /></a>
                        <a href="http://instagram.com/611efoundation" target="_blank" rel="noopener noreferrer"><img src={In} alt="in" /></a>
                        <a href="http://" target="_blank" rel="noopener noreferrer"><img src={Ln} alt="ln" /></a>
                        <a href="http://twitter.com/611efoundation" target="_blank" rel="noopener noreferrer"><img src={Tw} alt="tw" /></a>
                    </div>
                </div>
                <div className="rightf">
                    <ul className="links">
                        <li className='lab'>Company</li>
                        <Link style={{textDecoration: "none", color: "#414042"}} to="/about"><li>About Us</li></Link>
                        <Link style={{textDecoration: "none", color: "#414042"}} to="/events"><li>Events</li></Link>
                        <Link style={{textDecoration: "none", color: "#414042"}} to="/get-involved"><li>Get Involved</li></Link>
                        <Link style={{textDecoration: "none", color: "#414042"}} to="/contact"><li>Contact Us</li></Link>
                    </ul>
                    <ul className="links">
                        <li className='lab'>Quick Links</li>
                        <Link style={{textDecoration: "none", color: "#414042"}} to="/career"><li>Careers</li></Link>
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