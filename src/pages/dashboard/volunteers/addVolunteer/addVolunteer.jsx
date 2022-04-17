import './addVolunteer.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import baseUrl from '../../../../config';
import { useRef } from 'react';
import states from '../../../../utils/states';

const config = {
    headers: {
       "Authorization": `Bearer ${localStorage.SIXELEVEN_TOKEN}`
       }
}

const AddVolunteer = () => {
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

    const form = useRef(null);

    const datax = {
        "name": name,
        "email": email,
        "phoneNo": phone,
        "gender": gender,
        "dateOfBirth": dob,
        "stateOfResidence": state,
        "motivation": motivation,
        "occupationStatus": occupation,
        "project": project
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.post(`${baseUrl}/admin/volunteer/add-volunteer`, datax, config)
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
        <div className="addVolunteer">
            <form ref={form} onSubmit={handleSubmit}>
               <div className="top">
               <Link to="/dashboard/volunteers" style={{textDecoration: "none"}}><p className="back"><i className="fas fa-arrow-left"></i>back</p></Link>
                    <p className="titles">Add Volunteer</p>
                    <p className="para">Input new volunteer’s details in the form below</p>
               </div>

                <div className="input">
                    <label>Name<span>*</span></label><br />
                    <input required type="text" value={name} onChange={e => setName(e.target.value)} placeholder='Full Name' />
                </div>
                <div className="input">
                    <label>Job Title<span>*</span></label><br />
                    <input required type="text" value={gender} onChange={e => setGender(e.target.value)} placeholder='Job Title' />
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
                    <textarea type="file" value={motivation} onChange={e => setMotivation(e.target.value)} cols="30" rows="7" />
                </div>

                <button type='submit'>{loading ? "ADDING..." : "SUBMIT"}</button>
            </form>
        </div>
    )
}

export default AddVolunteer;