import { useState } from 'react';
import './addJob.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import baseUrl from '../../../../config';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

const config = {
    headers: {
       "Authorization": `Bearer ${localStorage.SIXELEVEN_TOKEN}`
       }
}

const AddJob = () => {
    const [title, setTitle] = useState("");
    const [eType, setEType] = useState("");
    const [wType, setWType] = useState("");
    const [location, setLocation] = useState("");
    const [desc, setDesc] = useState("");
    const [req, setReq] = useState("");
    const [day, setDay] = useState("");
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    const datax = {
        title,
        employeeType: eType,
        workType: wType,
        location: location,
        jobDescription: desc,
        jobRequirement: req,
        jobActivities: day,
    }

    const addEvent = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const {data} = await axios.post(`${baseUrl}/admin/job/add-job`, datax, config)
            console.log(data)
            toast.success(data?.message)
            setLoading(false)
            history.push("/dashboard/career")
        } catch (error) {
            console.log(error?.response?.data?.message)
            toast.error(error?.response?.data?.message)
            setLoading(false)
        }
    }

    return (
        <div className="add-event">
             <Link to="/dashboard/career" style={{textDecoration: "none"}}><p className="back"><i className="fas fa-arrow-left"></i>back</p></Link>

             <form onSubmit={addEvent}>
                 <div className="top">
                     <p className="title">New Role</p>
                     <div className="btns">
                         <p className="preview">Preview</p>
                         <button type='submit'>{loading ? "POSTING.." : "POST"}</button>
                     </div>
                 </div>
                 <div className="input sp">
                     <label>Role Title<span>*</span></label><br />
                     <input required value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="e.g accounts manager" />
                 </div>
                 <div className="input">
                     <label>Employee Type<span>*</span></label><br />
                     <select required onChange={e => setEType(e.target.value)} className='file' type="file">
                        <option selected disabled>Select</option>
                        <option value="full time">Full Time</option>
                        <option value="part time">Part Time</option>
                     </select>
                 </div>
                 <div className="input">
                     <label>Work Type<span>*</span></label><br />
                     <select required onChange={e => setWType(e.target.value)} className='file' type="file">
                        <option selected disabled>Select</option>
                        <option value="onsite">Onsite</option>
                        <option value="Remote">Remote</option>
                     </select>
                 </div>
                 <div className="input">
                     <label>Location<span>*</span></label><br />
                     <select required onChange={e => setLocation(e.target.value)} className='file' type="file">
                        <option selected disabled>Select</option>
                        <option value="Lagos">Lagos</option>
                        <option value="Ogun">Ogun</option>
                        <option value="Abuja">Abuja</option>
                     </select>
                 </div>
                 <div className="input">
                     <label>Role Description<span>*</span></label><br />
                     <textarea required value={desc} onChange={e => setDesc(e.target.value)} name="" id="" cols="30" rows="8" placeholder='role description'></textarea>
                 </div>
                 <div className="input">
                     <label>Requirements<span>*</span></label><br />
                     <textarea required value={req} onChange={e => setReq(e.target.value)} name="" id="" cols="30" rows="8" placeholder='job role requirements include'></textarea>
                 </div>
                 <div className="input">
                     <label>Day-to-day activities<span>*</span></label><br />
                     <textarea required value={day} onChange={e => setDay(e.target.value)} name="" id="" cols="30" rows="8" placeholder='typical day-to-day activities would include'></textarea>
                 </div>
                 
             </form>
        </div>
    )
}

export default AddJob;