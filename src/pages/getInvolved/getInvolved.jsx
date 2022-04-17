import Footer from '../../components/footer/footer';
import WebHeader from '../../components/webHeader/webHeader';
import './getInvolved.scss';
import Sec from './sec/sec';
import { Link } from 'react-router-dom';

const GetInvolved = () => {
    return (
        <div className="get-involved">
            <WebHeader />
            <div className="herox">
                <div className="leftx">
                    <div className="content">
                        <h3 className="bold">Get Involved</h3>
                        <p className="para">Support and care for the less priviledged through education and other means of empowerment</p>
                        <div className="btn">
                            <Link to="/donation"><button className='one'>DONATE</button></Link>
                            <Link to="/volunteer"><button className='two'>VOLUNTEER</button></Link>
                        </div>
                    </div>
                </div>
                <div className="rightx">
                    <div className="rimg">.</div>
                </div>
            </div>
            <Sec />
            <div className="banner">
                <div className="bcont"></div>
            </div>
            <Footer />
        </div>
    )
}

export default GetInvolved;