import './header.scss';
import Logo from '../../../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Bars from './bars.svg';


const Header = () => {
    
    const [showModal, setShowModal] = useState(false);

    const logout = () => {
        localStorage.removeItem("SIXELEVEN_TOKEN")
        localStorage.removeItem("SIXELEVEN_ID")
        window.location.href = "/"
    }

    return (
        <div className="header">
            <img className="logo" src={Logo} alt="sixeleven_logo" />
            <ul className="middle">
                <li>APPLICANT'S PROFILE</li>
            </ul>
            <div style={{ alignItems: "center", gap: "1.5rem"}} className="rightx">
                <Link to="/request-aid"><button>REQUEST AID</button></Link>
                <p onClick={logout} style={{color: "crimson", fontWeight: "600"}}>LOG OUT</p>
               
            </div>
            <img className='bars' src={Bars} alt="bars" />
        </div>
    )
}

export default Header