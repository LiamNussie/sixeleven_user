import Footer from '../../components/footer/footer';
import WebHeader from '../../components/webHeader/webHeader';
import Involved from '../home/involved/involved';
import './about.scss';

const About = () => {
    console.log(window.location.pathname)
    return (
        <div className="about">
            <WebHeader />
            <div className="heroa">
                <div className="cont">
                    <p className="topt">Fostering an unstoppable generation</p>
                    <p className="parat">Support and care for the less priviledged through education and other means of empowerment</p>
                </div>
            </div>
            <div className="about-us">
                <div className="title">
                    <h3 className='title-txt'>About Us</h3>
                </div>
                <p className="parabout">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac vel suspendisse aliquam eros ullamcorper praesent aliquet egestas imperdiet. Euismod gravida mauris, nunc tellus vestibulum. Lacinia morbi rhoncus viverra aliquet senectus nascetur accumsan. Feugiat et purus, sit lacus, phasellus cras pulvinar elementum congue.</p>
                <div className="about-img"></div>
                <p className="parabout">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac vel suspendisse aliquam eros ullamcorper praesent aliquet egestas imperdiet.  Euismod gravida mauris, nunc tellus vestibulum. Lacinia morbi rhoncus viverra aliquet senectus nascetur accumsan. Feugiat et purus, sit lacus, phasellus cras pulvinar elementum congue.-</p>
            </div>
            <div className="about-us">
                <div className="title">
                    <h3 style={{fontSize: "20px"}} className='title-txt'>Our Core Values</h3>
                </div>
                <p className="parabout">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac vel suspendisse aliquam eros ullamcorper praesent aliquet egestas imperdiet. Euismod gravida mauris, nunc tellus vestibulum. Lacinia morbi rhoncus viverra aliquet senectus nascetur accumsan. Feugiat et purus, sit lacus, phasellus cras pulvinar elementum congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac vel suspendisse aliquam eros ullamcorper praesent aliquet egestas imperdiet. Euismod gravida mauris, nunc tellus vestibulum. Lacinia morbi rhoncus viverra aliquet senectus nascetur accumsan. Feugiat et purus, sit lacus, phasellus cras pulvinar elementum congue.</p>
            </div>
            <div className="about-us">
                <div className="title">
                    <h3 style={{fontSize: "20px"}} className='title-txt'>How do we achieve this?</h3>
                </div>
                <p className="parabout">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac vel suspendisse aliquam eros ullamcorper praesent aliquet egestas imperdiet. Euismod gravida mauris, nunc tellus vestibulum. Lacinia morbi rhoncus viverra aliquet senectus nascetur accumsan. Feugiat et purus, sit lacus, phasellus cras pulvinar elementum congue.</p>
            </div>
            <div className="about-us">
                <div className="title">
                    <h3 style={{fontSize: "20px"}} className='title-txt'>Our Location</h3>
                </div>
                <p className="parabout">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac vel suspendisse aliquam eros ullamcorper praesent aliquet egestas imperdiet. Euismod gravida mauris, nunc tellus vestibulum. Lacinia morbi rhoncus viverra aliquet senectus nascetur accumsan. Feugiat et purus, sit lacus, phasellus cras pulvinar elementum congue.</p>
                <div className="about-map"></div>
            </div>
            <Involved />
            <Footer />
        </div>
    )
}

export default About;