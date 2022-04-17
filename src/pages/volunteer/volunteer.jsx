import './volunteer.scss';
import { Link } from 'react-router-dom';
import WebHeader from '../../components/webHeader/webHeader';
import { useState } from 'react';
import axios from 'axios';
import baseUrl from '../../config';
import states from '../../utils/states';
import { toast } from 'react-toastify';

const Volunteer = () => {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [dob, setDob] = useState("");
    const [state, setState] = useState("");
    const [motivation, setMotivation] = useState("");
    const [occupation, setOccupation] = useState("");
    const [project, setProject] = useState("");
    const [loading, setLoading] = useState(false)

    const datax = {
        name,
        email,
        gender,
        "phoneNo": phone,
        "dateOfBirth": dob,
        "stateOfResidence": state,
        motivation,
        "occupationStatus": occupation,
        "document": "file.png"
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.post(`${baseUrl}/volunteer/apply`, datax)
            console.log(res?.data)
            toast.success(res?.data?.message)
            setLoading(false);
            setName("")
            setGender("")
            setEmail("")
            setPhone("")
            setState("")
            setMotivation("")
            setDob("")
            setProject("")
            setOccupation("")
        } catch(error) {
            console.log(error?.response?.data?.message)
            toast.error(error?.response?.data?.message)
            setLoading(false);
        }
    }
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
      
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
                        <form onSubmit={handleSubmit}>
               {/* <div className="top">
               <Link to="/dashboard/volunteers" style={{textDecoration: "none"}}><p className="back"><i className="fas fa-arrow-left"></i>back</p></Link>
                    <p className="titles">Add Volunteer</p>
                    <p className="para">Input new volunteer’s details in the form below</p>
               </div> */}

                <div className="input">
                    <label>Name<span>*</span></label><br />
                    <input required type="text" value={name} onChange={e => setName(e.target.value)} placeholder='Full Name' />
                </div>
                <div className="input">
                    <label>Gender<span>*</span></label><br />
                    <select required onChange={e => setGender(e.target.value)} placeholder='Job Title'>
                        <option selected disabled>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className="input">
                    <label>Email<span>*</span></label><br />
                    <input required type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder='Email Address' />
                </div>
                <div className="input">
                    <label>Phone Number<span>*</span></label><br />
                    <input minLength={11} maxLength={11} value={phone} required onChange={e => setPhone(e.target.value)} type="tel" placeholder='Phone Number' />
                </div>
                <div className="input">
                    <label>Date of Birth<span>*</span></label><br />
                    <input required type="date" value={dob} onChange={e => setDob(e.target.value)} placeholder='Email Address' />
                </div>
                <div className="input">
                    <label>State of Residence<span>*</span></label><br />
                    <select required onChange={e => setState(e.target.value)}>
                        <option selected disabled>Select State</option>
                        {states.map((i, index) => {
                            return (
                                <option value={i}>{capitalizeFirstLetter(i)}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="input">
                    <label>Occupation Status<span>*</span></label><br />
                    <select required onChange={e => setOccupation(e.target.value)}>
                        <option selected disabled>Select Occupation Status</option>
                        <option value="employed">Employed</option>
                        <option value="unemployed">Unemployed</option>
                    </select>
                </div>
                <div className="input">
                    <label>Motivation to join Sixeleven<span>*</span></label><br />
                    <textarea placeholder='why do you want to join us ?' type="file" value={motivation} onChange={e => setMotivation(e.target.value)} cols="30" rows="7" />
                </div>

                <button type='submit'>{loading ? "ADDING..." : "SUBMIT"}</button>
            </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Volunteer;