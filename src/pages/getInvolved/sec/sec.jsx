import './sec.scss';
import { Link } from 'react-router-dom';

const Sec = () => {
    return (
        <div className="sec">
            
            <div className="flex1">
                <div className="leftm"></div>
                <div className="rightm">
                    <div className="content">
                        <p className="headx">MAKE A DONATION</p>
                        <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac vel suspendisse aliquam eros ullamcorper praesent aliquet egestas imperdiet. Euismod gravida mauris, nunc tellus vestibulum. Lacinia morbi rhoncus viverra aliquet senectus nascetur accumsan. Feugiat et purus, sit lacus, phasellus cras pulvinar elementum congue.</p>
                        <div className="btn">
                        <Link to="/donation"><button className='one'>DONATE</button></Link>
                            {/* <button className='two'>REQUEST AID</button> */}
                        </div>
                    </div>
                   
                </div>
            </div>
            <div className="flex2">
                <div className="leftm">
                <div className="content">
                        <p className="headx">BECOME A VOLUNTEER</p>
                        <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac vel suspendisse aliquam eros ullamcorper praesent aliquet egestas imperdiet. Euismod gravida mauris, nunc tellus vestibulum. Lacinia morbi rhoncus viverra aliquet senectus nascetur accumsan. Feugiat et purus, sit lacus, phasellus cras pulvinar elementum congue.</p>
                        <div className="btn">
                            {/* <button className='one'>MAKE A DONATION</button> */}
                            <Link to="/volunteer"><button className='two'>VOLUNTEER</button></Link>
                        </div>
                    </div>
                </div>
                <div className="rightm"></div>
            </div>
        </div>
    )
}

export default Sec;