import './mission.scss';
import { Link } from 'react-router-dom';


const Mission = () => {
    return (
        <div className="mission">
            <div className="title">
                <h3 className='title-txt'>Our Mission</h3>
            </div>
            <div className="flex1">
                <div className="leftm"></div>
                <div className="rightm">
                    <div className="content">
                        <p className="head">Street hawkers</p>
                        <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac vel suspendisse aliquam eros ullamcorper praesent aliquet egestas imperdiet. Euismod gravida mauris, nunc tellus vestibulum. Lacinia morbi rhoncus viverra aliquet senectus nascetur accumsan. Feugiat et purus, sit lacus, phasellus cras pulvinar elementum congue.</p>
                        <div className="btn">
                            <Link to="donation"><button className='one'>MAKE A DONATION</button></Link>
                            <Link to="/request-aid"><button className='two'>REQUEST AID</button></Link>
                        </div>
                    </div>
                   
                </div>
            </div>
            <div className="flex2">
                <div className="leftm">
                <div className="content">
                        <p className="head">Widow(er)s</p>
                        <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac vel suspendisse aliquam eros ullamcorper praesent aliquet egestas imperdiet. Euismod gravida mauris, nunc tellus vestibulum. Lacinia morbi rhoncus viverra aliquet senectus nascetur accumsan. Feugiat et purus, sit lacus, phasellus cras pulvinar elementum congue.</p>
                        <div className="btn">
                            <Link to="donation"><button className='one'>MAKE A DONATION</button></Link>
                            <Link to="/request-aid"><button className='two'>REQUEST AID</button></Link>
                        </div>
                    </div>
                </div>
                <div className="rightm"></div>
            </div>
        </div>
    )
}

export default Mission