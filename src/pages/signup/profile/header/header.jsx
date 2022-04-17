import './header.scss';
import Logo from '../../../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const Header = () => {
    
    const [showModal, setShowModal] = useState(false);

    const logout = () => {
        localStorage.removeItem("SIXELEVEN_USER_TOKEN")
        localStorage.removeItem("SIXELEVEN_USER_ID")
        window.location.href = "/home"
    }

    return (
        <div className="header">
            <img className="logo" src={Logo} alt="sixeleven_logo" />
            <ul className="middle">
                <li>APPLICANT'S PROFILE</li>
            </ul>
            <div style={{display: "flex", alignItems: "center", gap: "1.5rem"}} className="right">
                <Link to="/request-aid"><button>REQUEST AID</button></Link>
                <p onClick={logout} style={{color: "crimson", fontWeight: "600"}}>LOG OUT</p>
            </div>
        </div>
    )
}

export default Header