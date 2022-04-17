import './addStaff.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import baseUrl from '../../../../config';
import { useRef } from 'react';

const config = {
    headers: {
       "Authorization": `Bearer ${localStorage.SIXELEVEN_TOKEN}`
       }
}

const AddStaff = () => {
    const [name, setName] = useState("");
    const [jTitle, setJTitle] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [filex, setFilex] = useState("");
    const [loading, setLoading] = useState(false)

    const form = useRef(null);

    const datax = {
        "name": name,
        "email": email,
        "jobTitle": jTitle,
        "phoneNo": phone,
        "resume": "temp.png"
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.post(`${baseUrl}/admin/staff/add-staff`, datax, config)
            console.log(res?.data)
            toast.success(res?.data?.messgae)
            setLoading(false);
            setName("")
            setJTitle("")
            setEmail("")
            setPhone("")
            setFilex("")
        } catch(error) {
            console.log(error?.response?.data?.messgae)
            toast.error(error?.response?.data?.message)
            setLoading(false);

        }
    }

    return (
        <div className="addStaff">
            <form ref={form} onSubmit={handleSubmit}>
               <div className="top">
               <Link to="/dashboard/staff" style={{textDecoration: "none"}}><p className="back"><i className="fas fa-arrow-left"></i>back</p></Link>
                    <p className="titles">Add Staff</p>
                    <p className="para">Input new staff’s details in the form below</p>
               </div>

                <div className="input">
                    <label>Name<span>*</span></label><br />
                    <input required type="text" value={name} onChange={e => setName(e.target.value)} placeholder='Full Name' />
                </div>
                <div className="input">
                    <label>Job Title<span>*</span></label><br />
                    <input required type="text" value={jTitle} onChange={e => setJTitle(e.target.value)} placeholder='Job Title' />
                </div>
                <div className="input">
                    <label>Email<span>*</span></label><br />
                    <input required type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder='Email Address' />
                </div>
                <div className="input">
                    <label>Phone Number<span>*</span></label><br />
                    <input minLength={11} maxLength={11} value={phone} required onChange={e => setPhone(e.target.value)} type="tel" placeholder='Phone Number' />
                </div>
                {/* <div className="input">
                    <label>Attachment</label><br />
                    <input type="file" value={filex} onChange={e => setFilex(e.target.files[0])} placeholder='' />
                </div> */}

                <button type='submit'>{loading ? "ADDING..." : "SUBMIT"}</button>
            </form>
        </div>
    )
}

export default AddStaff;