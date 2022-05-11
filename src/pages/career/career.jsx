import WebHeader from '../../components/webHeader/webHeader';
import './career.scss';
import One from './one.svg';
import Two from './two.svg';
import { useQuery } from 'react-query';
import Three from './three.svg';
import Four from './four.svg';
import { getAllPostedJobs } from '../../services/career';
import Footer from '../../components/footer/footer';
import { Link } from 'react-router-dom';

const Career = () => {

    const {data, isLoading, error} = useQuery("get all jobs posted", getAllPostedJobs)
    if(isLoading) {
        console.log('posted jobs is loading')
    }else if(data) {
        console.log('posted jobs', data)
    } else {
        console.log(error)
    }

    return (
        <div className="careerp">
            <WebHeader />
            <div className="herox">
                <div className="leftx shift">
                    <div className="content">
                        <h3 className="bold">Join our team <br /> at <span style={{color: "#03A1C6"}}>Sixeleven</span></h3>
                        <p className="para">Set yourself apart in your career and make a difference by working with us</p>
                    </div>
                </div>
                <div className="rightx">
                    <div className="rimg">.</div>
                </div>
            </div>
            <div className="value">
                <div className="title">
                    <h3 className='title-txtx'>Our Value Culture</h3>
                </div>
                <div className="boxes">
                    <div className="bax">
                        <img src={One} alt="icon" />
                        <p className="top"><strong>Organization Structure</strong></p>
                        <p className="parae">Our foundation is strongly led by an experienced leader with years of experience from different 
industries. Our values are our strengths and we have an enabling environment for people to grow and 
help others grow.</p>
                    </div>
                    <div className="bax">
                        <img src={Two} alt="icon" />
                        <p className="top"><strong>Fast Growing Environment</strong></p>
                        <p className="parae">We appreciate our little beginnings but do not lose focus on our goals. We celebrate every win as 
journey along and this keep us growing in a speed of light.
</p>
                    </div>
                    <div className="bax">
                        <img src={Three} alt="icon" />
                        <p className="top"><strong>Dedication & Reward</strong></p>
                        <p className="parae">We are determined to succeed at everything we do. There is a reward for a job well done and review for 
those with shortcomings</p>
                    </div>
                    <div className="bax">
                        <img src={Four} alt="icon" />
                        <p className="top"><strong>Opportunity to impact lives</strong></p>
                        <p className="parae">What is the essence of living if not to make real impact? When you join us, you are not only working for 
money but also impacting lives of millions directly or indirectly</p>
                    </div>
                </div>
            </div>

            <div className="jobs">
                <div className="title">
                    <h3 className='title-txtx'>Open Positions</h3>
                </div>
                <div className="list">
                {!isLoading &&
                    data?.data?.result.filter(el => el.status === "Open").map(({status, _id: id, title, employeeType, workType, jobDescription}, index) => {
                        return (
                            <div className="listing" key={index}>
                                <p className="jtitle">{title} <span>{employeeType}/{workType}</span></p>
                                <p className="info">{jobDescription}</p>
                                <Link style={{textDecoration: "none"}} to={{pathname: "/view-posting", id: id}}><p className="view">View details</p></Link>
                            </div>
                        )
                    })
                }
                   
                </div>
            </div>
            <div className="bannerx">
                <div className="mega">
                    
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Career;