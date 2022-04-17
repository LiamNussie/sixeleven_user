import { useState } from 'react';
import './addEvent.scss';
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

const AddEvent = () => {
    const [title, setTitle] = useState("");
    const [banner, setBanner] = useState("");
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    const datax = {
        name: title,
        image: banner,
        description: desc,
        budget: amount,
        eventDate: date
    }

    const addEvent = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const {data} = await axios.post(`${baseUrl}/admin/event/add-event`, datax, config)
            console.log(data)
            toast.success(data?.message)
            setLoading(false)
            history.push("/dashboard/events")
        } catch (error) {
            console.log(error?.response?.data?.message)
            toast.error(error?.response?.data?.message)
            setLoading(false)
        }
    }

    return (
        <div className="add-event">
             <Link to="/dashboard/events" style={{textDecoration: "none"}}><p className="back"><i className="fas fa-arrow-left"></i>back</p></Link>

             <form onSubmit={addEvent}>
                 <div className="top">
                     <p className="title">New Event</p>
                     <div className="btns">
                         {/* <p className="preview">Preview</p> */}
                         <button type='submit'>{loading ? "POSTING.." : "POST"}</button>
                     </div>
                 </div>
                 <div className="input sp">
                     <label>Event Title<span>*</span></label><br />
                     <input required value={title} onChange={e => setTitle(e.target.value)} type="text" />
                 </div>
                 <div className="input">
                     <label>Event Banner Image<span>*</span></label><br />
                     <input required value={banner} onChange={e => setBanner(e.target.value)} className='file' type="file" />
                 </div>
                 <div className="input">
                     <label>About Event<span>*</span></label><br />
                     <textarea required value={desc} onChange={e => setDesc(e.target.value)} name="" id="" cols="30" rows="8"></textarea>
                 </div>
                 <div className="input">
                     <label>Amount Budgeted</label><br />
                     <input value={amount} onChange={e => setAmount(e.target.value)} type="tel" />
                 </div>
                 <div className="input">
                     <label>Date</label><br />
                     <input value={date} onChange={e => setDate(e.target.value)} type="date" />
                 </div>
             </form>
        </div>
    )
}

export default AddEvent;