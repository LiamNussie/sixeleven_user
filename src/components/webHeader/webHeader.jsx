import './webHeader.scss';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import CustomModal from '../customModal/customModal';
import { useState } from 'react';
import Bars from './bars.svg';
import SlideNav from '../slideNav/slideNav';


const WebHeader = () => {
    
    const [showModal, setShowModal] = useState(false);
    const [showNav, setShowNav] = useState(false);

    return (
        <div className="web-header">
            <Link to="/" style={{textDecoration: "none", cursor: "pointer"}}><img className="logo" src={Logo} alt="sixeleven_logo" /></Link>
            <ul className="middle">
                <Link to="/about" style={{textDecoration: "none", cursor: "pointer"}}><li className={window.location.pathname === "/about" ? "active" : null}>ABOUT US</li></Link>
                <Link to="/events" style={{textDecoration: "none", cursor: "pointer"}}><li className={window.location.pathname === "/events" ? "active" : null}>EVENTS</li></Link>
                <Link to="/get-involved" style={{textDecoration: "none", cursor: "pointer"}}><li className={window.location.pathname === "/get-involved" ? "active" : null}>GET INVOLVED</li></Link>
                <Link to="/contact" style={{textDecoration: "none", cursor: "pointer"}}><li className={window.location.pathname === "/contact" ? "active" : null}>CONTACT US</li></Link>
                <Link to="/career" style={{textDecoration: "none", cursor: "pointer"}}><li className={window.location.pathname === "/career" ? "active" : null}>CAREER</li></Link>
            </ul>
            <div className="right">
                <button onClick={() => setShowModal(true)}>LOG IN</button>
                {!showNav && <img onClick={e => setShowNav(true)} src={Bars} alt="bars" />}
            </div>
            {showModal && <CustomModal setShowModal={setShowModal} />}
            {showNav && <SlideNav setShowNav={setShowNav} setShowModal={setShowModal} />}
        </div>
    )
}

export default WebHeader