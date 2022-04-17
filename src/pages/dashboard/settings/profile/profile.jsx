import './profile.scss';
import { useState } from 'react';
import axios from 'axios';
import baseUrl from '../../../../config';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const config = {
    headers: {
       "Authorization": `Bearer ${localStorage.SIXELEVEN_TOKEN}`
       }
}


const Profile = () => {
    const currentUser = useSelector(({userData}) => userData.currentUser)
    const {name, image, jobTitle, role, staffID, email, dateJoined, _id: id} = currentUser
    const [loading, setLoading] = useState(false)

    const [imagex, setImagex] = useState("");
    const [namex, setNamex] = useState(name);
    const [jobTitlex, setJobTitlex] = useState(jobTitle);
    const [rolex, setRolex] = useState(role);
    const [staffIdx, setStaffIdx] = useState(staffID);
    const [emailx, setEmailx] = useState(email);
    const [memberSincex, setMemberSincex] = useState(dateJoined);

    const data ={
        "name": namex,
        "email": emailx,
        "role":  rolex,
        "jobTitle": jobTitlex,
        "staffID": staffIdx,
        "memberSince": memberSincex,
    }

    const update = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const res = await axios.put(`${baseUrl}/admin/staff/update/${id}`, data, config)
            console.log(res)
            toast.success(res?.data?.message)
            setLoading(false)
        } catch (error) {
            console.log(error?.response?.data?.message)
            toast.error(error?.response?.data?.message)
            setLoading(false)
        }
    }
    return (
        <div className="profile">
            <p className="titlep">Profile Image</p>
            <div className="prof-img">
                <div className="img" style={{backgroundImage: `url(${image})`}}>
                    <div className="overlay"></div>
                    <i className="fas fa-edit"></i>
                    <input onChange={e => setImagex(e.target.files[0])} type="file" />
                </div>
                {imagex && <button>Save</button>}
            </div>
            <form onSubmit={update}>
                <div className="input">
                    <label>Name</label><br />
                    <input onChange={e => setNamex(e.target.value)} value={namex} type="text" />
                </div>
                <div className="input">
                    <label>Job Title</label><br />
                    <input onChange={e => setJobTitlex(e.target.value)} value={jobTitlex} type="text" />
                </div>
                <div className="input">
                    <label>Role</label><br />
                    <input onChange={e => setRolex(e.target.value)} type="text" value={rolex} />
                </div>
                <div className="input">
                    <label>Staff ID</label><br />
                    <input type="text" value={staffIdx} />
                </div>
                <div className="input">
                    <label>Email Address</label><br />
                    <input type="text" value={emailx} />
                </div>
                <div className="input">
                    <label>Member since</label><br />
                    <input type="text" value={dateJoined} />
                </div>

                <div className="btns">
                    {/* <button className='cancel'>CANCEL</button> */}
                    <button type='submit'>{loading ? "UPDATING.." : "UPDATE CHANGES"}</button>
                </div>
            </form>
        </div>
    )
}

export default Profile;