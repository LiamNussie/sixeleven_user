import { useState } from 'react';
import WebHeader from '../../../components/webHeader/webHeader';
import './reset2.scss';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import baseUrl from '../../../config';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const config = {
    headers: {
       "Authorization": `Bearer ${localStorage.SIXELEVEN_TOKEN}`
       }
}

const Reset2 = (props) => {

    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const history = useHistory();

    const resetToken = props.location.search;
    console.log(props)

  

    const datax = {
        "newPassword": password,
        "confirmNewPassword": cPassword,
        "token": resetToken.substring(7)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)

        try {
            const res = await axios.post(`${baseUrl}/user/verify-code`, datax)
            console.log(res.data)
            toast.success(res?.data?.message)
            setLoading(false)
            window.location.reload()
        } catch(error) {
            console.log(error?.response?.data)
            toast.error(error?.response?.data)
            setLoading(false)
        }
    }

    return (
        <div className="login">
            <WebHeader />
            <div className="main">
                <h1>Reset your password</h1>
                <p className="para">Enter your email address, and we will send you a code to reset your password</p>

                <form onSubmit={handleSubmit}>
                    <div className="input">
                        <label>New Password</label><br />
                        <input onChange={e => setPassword(e.target.value)} type="email" placeholder='Name@work.com' />
                    </div>
                    <div className="input">
                        <label>Confirm New Password</label><br />
                        <input onChange={e => setCPassword(e.target.value)} type="email" placeholder='Name@work.com' />
                    </div>
                    <button type='submit'>{loading ? "CONFIRMING..." : "CONFIRM EMAIL"}</button>
                </form>
                <br /><br />
                <Link to="/" style={{textDecoration: "none"}}><p className="back"><i className="fas fa-arrow-left"></i>back to log in</p></Link>
            </div>
            
        </div>
    )
}

export default Reset2;