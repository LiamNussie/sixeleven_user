import './invite.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import baseUrl from '../../../../config';
import { useQuery } from 'react-query';
import { getAllStaff } from '../../../../services/staff';
import { toast } from 'react-toastify';

const Invite = () => {
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [obj, setObj] = useState("");
    const [role, setRole] = useState("");

    const config = {
        headers: {
           "Authorization": `Bearer ${localStorage.SIXELEVEN_TOKEN}`
           }
    }

    const {data, isLoading, error} = useQuery("get all staff", getAllStaff)
    if(isLoading) {
        console.log('staff is loading')
    }else if(data) {
        console.log('staff', data)
    } else {
        console.log(error)
    }

    useEffect(() => {
        console.log("please work", obj)
    },[obj])

    const datax = {
        email: obj.email,
        id: obj._id,
        role
    }

    

    const sendInvite = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const res = await axios.post(`${baseUrl}/admin/invite-staff`, datax, config)
            console.log(res?.data)
            toast.success(res?.data?.message)
            setLoading(false)
        } catch (error) {
            console.log(error?.response?.data?.message)
            toast.error(error?.response?.data?.message)
            setLoading(false)
        }
        
    }
    return (
        <div className="invite">
            <Link to="/dashboard/staff" style={{textDecoration: "none"}}><p className="back"><i className="fas fa-arrow-left"></i>back</p></Link>
            <div className="boxy">
                <p>{name} {id}</p>
                <form onSubmit={sendInvite}>
                    <div className="input">
                        <label>Select staff to invite</label>
                        <select onChange={e => {
                            let d = e.target.value
                            console.log("checking d", d)
                            setObj(JSON.parse(d))
                        }}>
                            <option selected disabled>Select Staff</option>
                            {!isLoading && 
                                data?.data?.result.map((i, index) => {
                                    return (
                                        <option key={i.index} value={JSON.stringify(i)}>{i.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="input">
                        <label>Select staff role</label>
                        <select onChange={e => setRole(e.target.value)}>
                            <option selected disabled>Select Role</option>
                            <option value="admin">Admin</option>
                            <option value="rookie">Rookie</option>
                        </select>
                    </div>
                    <div className="btn">
                        <button type='submit'><i className="fas fa-paper-plane"></i>{loading ? "SENDING..." : "SEND INVITE"}</button>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default Invite;