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
                <p className="parabout"><strong>SixEleven Empowerment Foundation (SEEF)</strong> is founded to support street hawkers to go back to school 
and empower widow(er)s to maintain good standard of living.</p>
                <div className="about-img"></div>
                <p className="parabout">Our vision is to foster an unstoppable generation through education of young children and support to 
the aged population.
</p>
            </div>
            <div className="about-us">
                <div className="title">
                    <h3 style={{fontSize: "20px"}} className='title-txt'>Our Core Values</h3>
                </div>
                <p className="parabout">Our values are premised on the acronyms SEE; selflessness, exemplary and empowerment <br /><br />
Selflessness: we are not only concerned about the needs of others but also taking steps to fulfilling those
needs <br /><br />
Exemplary: we lead by example. show the way, lead the way and support throughout on the way. <br /><br />
Empowerment: teaching others how to catch fish is better than giving out the fish. At SEEF, we support 
the education of hawkers and empowers the widow(er)s.</p>
            </div>
            <div className="about-us">
                <div className="title">
                    <h3 style={{fontSize: "20px"}} className='title-txt'>How do we achieve this?</h3>
                </div>
                <p className="parabout">We are determined to foster the growth and development of unstoppable generation in Nigeria and 
Africa at large. This we intend to achieve through five pillars: SIFAR. <br /><br /> 1. Street-to-street campaign: Our prospective beneficiaries are right there on the street, in traffic 
jams, at car parks, etc. We will go to them directly and show them why it is necessary to be
educated. <br /><br />
2. Integrity: We stand on strong morals, principle and undivided truthfulness in the way we go 
about supporting others. We receive feedbacks, take the message and continually improve on 
ourselves. <br /><br />
3. Funding: our projects, sponsorship and empowerment shall be funded through the 
contributions of the lead volunteer, donations from individuals and organizations.
4. Accountability: we are accountable for the seed funds, donations and the people we empower <br /><br />
5. Referrals: We trust that one good deed will trigger referral for more applicants, volunteers and 
donors. We will also maximise the benefits of social medial in reaching out to our prospective 
beneficiarie</p>
            </div>
            <div className="about-us">
                <div className="title">
                    <h3 style={{fontSize: "20px"}} className='title-txt'>Our Location</h3>
                </div>
                <p className="parabout">You can find us at: <br /><br />
7, Prince Ibrahim Odofin Street,<br />
Idado Peaceville Estate,<br />
Igbo-Efon Bus-Stop,<br />
Lekki, Lagos<br />
Nigeria</p>
                <div className="about-map"></div>
            </div>
            <Involved />
            <Footer />
        </div>
    )
}

export default About;