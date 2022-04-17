import './volunteer.scss';
import { Link } from 'react-router-dom';
import WebHeader from '../../components/webHeader/webHeader';

const Volunteer = () => {
    return (
        <div className="volunteer">
            <WebHeader />
            <div className="cont">
                <Link to="/home" style={{textDecoration: "none"}}><p className="back"><i className="fas fa-arrow-left"></i>Back</p></Link>
                <div className="flexo">
                    <div className="left">
                        <div className="img"></div>
                    </div>
                    <div className="right">
                        <p className="title">Volunteer</p>
                        <p className="para">Thank you for your interest in becoming a volunteer. Please fill in your details in the form below to give us some information about you.</p>
                        <form>    
                            <div className="input">
                                <label>Name <span style={{color: "crimson"}}>*</span></label><br />
                                <input placeholder='full name' type="text" />
                            </div>
                            <div className="input">
                                <label>Gender <span style={{color: "crimson"}}>*</span></label><br />
                                <select>
                                    <option selected disabled>Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <div className="input">
                                <label>D.O.B <span style={{color: "crimson"}}>*</span></label><br />
                                <input type="date" />
                            </div>
                            <div className="input">
                                <label>Phone Number <span style={{color: "crimson"}}>*</span></label><br />
                                <input placeholder='phone' type="tel" />
                            </div>
                            <div className="input">
                                <label>Email <span style={{color: "crimson"}}>*</span></label><br />
                                <input placeholder='email address' type="email" />
                            </div>
                            <div className="input">
                                <label>State of residence <span style={{color: "crimson"}}>*</span></label><br />
                                <select>
                                    <option selected disabled>Select state</option>
                                </select>
                            </div>
                            <div className="input">
                                <label>Occupation Status <span style={{color: "crimson"}}>*</span></label><br />
                                <select>
                                    <option selected disabled>Select</option>
                                    <option value="male">Employed</option>
                                    <option value="female">Unemployed</option>
                                </select>
                            </div>
                            <div className="input">
                                <label>Choose event to volunteer for <span style={{color: "crimson"}}>*</span></label><br />
                                <select>
                                    <option selected disabled>Select event</option>
                                </select>
                            </div>
                            <div className="input">
                                <label>What is your motivation <span style={{color: "crimson"}}>*</span></label><br />
                                <textarea placeholder='why do you want to join us?' cols="30" rows="4"></textarea>
                            </div>
                             <button>SUBMIT</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Volunteer;