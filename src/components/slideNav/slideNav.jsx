import './slideNav.scss';
import Times from './times.svg';
import { Link } from 'react-router-dom';

const SlideNav = ({setShowNav, setShowModal}) => {
    
    return (
        <div className="slide-nav">
            <div className="wrapper">
                <div className="slider">
                    <div className="top">
                        <p className="title">Menu</p>
                        <img onClick={() => setShowNav(false)} src={Times} alt="times" />
                    </div>
                    <ul className="links">
                        <Link onClick={() => setShowNav(false)} style={{textDecoration: "none", color: "#012028"}} to="/"><li>Home</li></Link>
                        <Link style={{textDecoration: "none", color: "#012028"}} onClick={() => setShowNav(false)} to="/about"><li>About Us</li></Link>
                        <Link style={{textDecoration: "none", color: "#012028"}} onClick={() => setShowNav(false)} to="/events"><li>Events</li></Link>
                        <Link style={{textDecoration: "none", color: "#012028"}} onClick={() => setShowNav(false)} to="/get-involved"><li>Get Involved</li></Link>
                        <Link style={{textDecoration: "none", color: "#012028"}} onClick={() => setShowNav(false)} to="/career"><li>Careers</li></Link>
                        <Link style={{textDecoration: "none", color: "#012028"}} onClick={() => setShowNav(false)} to="/contact"><li>Contact</li></Link>
                    </ul>
                    <button onClick={() => {setShowNav(false); setShowModal(true)}}>Log In</button>
                </div>
            </div>
        </div>
    )
}

export default SlideNav