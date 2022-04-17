import './hero.scss';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="hero">
            <div className="left">
                <div className="content">
                    <h3 className="bold">Humanitarian services for child street hawkers and <br /> widow(er)s</h3>
                    <p className="para">Fostering an unstoppable generation</p>
                    <div className="btn">
                        <Link to="/get-involved"><button className='one'>GET INVOLVED</button></Link>
                        <Link to="/request-aid"><button className='two'>REQUEST AID</button></Link>
                    </div>
                </div>
            </div>
            <div className="right"></div>
        </div>
    )
}

export default Hero;