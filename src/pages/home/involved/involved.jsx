import './involved.scss';
import { Link } from 'react-router-dom';

const Involved = () => {
    return (
        <div className="involved">
             <div className="flexi">
                <div className="leftm">
                <div className="content">
                        <p className="head">Get Involved</p>
                        <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus consequat a et sagittis, nisi, nisi. Pretium nunc dui gravida et ac enim nullam neque. Fermentum mollis massa massa lectus dolor faucibus mi. Platea arcu enim, quam libero.</p>
                        <div className="btn">
                            <Link to="/donation"><button className='one'>DONATE</button></Link>
                            <Link to="/volunteer"><button className='two'>VOLUNTEER</button></Link>
                        </div>
                    </div>
                </div>
                <div className="rightm"></div>
            </div>
        </div>
    )
}

export default Involved;