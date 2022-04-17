import Footer from '../../components/footer/footer';
import WebHeader from '../../components/webHeader/webHeader';
import Involved from '../home/involved/involved';
import Soon from '../home/soon/soon';
import './events.scss';

const Event = () => {
    return (
        <div className="event">
            <WebHeader />
            <div className="heroa">
                <div className="cont">
                    <p className="topt">Events & Activities</p>
                </div>
            </div>
            <Soon />
            <Involved />
            <Footer />
        </div>
    )
}

export default Event;