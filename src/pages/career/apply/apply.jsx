import WebHeader from '../../../components/webHeader/webHeader';
import './apply.scss';
import { Link } from 'react-router-dom';

const Apply = () => {

    const applyx = (e) => {
        e.preventDefault()
    }

    return (
        <div className="apply">
            <WebHeader />
            <div className="content">
                <Link to="/career" style={{textDecoration: "none"}}><p className="back"><i className="fas fa-arrow-left"></i>Back to Role</p></Link>
                <div className="sect">
                    <div className="titleo">
                        <h3 className='title-txtxt'>Job Application</h3>
                    </div>
                    <p className="jtitle">Content Manager</p>
                    <p className="para">To apply for this role, fill in your infomation in the form below</p>
                    <form onSubmit={applyx}>
                        <div className="input">
                            <label>Name <span style={{color: "crimson"}}>*</span></label><br />
                            <input type="text" />
                        </div>
                        <div className="input">
                            <label>Phone Number <span style={{color: "crimson"}}>*</span></label><br />
                            <input type="tel" />
                        </div>
                        <div className="input">
                            <label>Email <span style={{color: "crimson"}}>*</span></label><br />
                            <input type="email" />
                        </div>
                        <div className="input">
                            <label>Upload CV <span style={{color: "crimson"}}>*</span></label><br />
                            <input type="file" />
                        </div>
                        <div className="input">
                            <label>Cover Letter <span style={{color: "crimson"}}>*</span></label><br />
                           <textarea placeholder='Tell us why you’re a fit for this role in less than 400 words' name="" id="" cols="30" rows="5"></textarea>
                        </div>
                        <div className="input">
                            <label>Website/Portfolio Link</label><br />
                            <input placeholder='url' type="text" />
                        </div>
                        <button>SUBMIT APPLICATION</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Apply;