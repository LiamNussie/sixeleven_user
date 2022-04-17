import { useState } from 'react';
import WebHeader from '../../components/webHeader/webHeader';
import './login.scss';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import baseUrl from '../../config';
import { useHistory } from 'react-router-dom';
import { userActionTypes } from '../../redux/constants/userActionTypes';
import { toast } from 'react-toastify';

const config = {
    headers: {
       "Authorization": `Bearer ${localStorage.SIXELEVEN_TOKEN}`
       }
}

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const history = useHistory();

    const datax = {
        email,
        password
    }

//     const signin = (formData, history) => 
//    async(dispatch) => {
//      try {
//         const { data } = await axios.post(`${baseUrl}/auth/admin/login`, formData);
//         console.log(data, data.token)
//         localStorage.setItem("WEHAUL_ADMIN_TOKEN", data.token);
//         dispatch({ type: userActionTypes.SIGNIN_SUCCESS, payload: data });
//         window.location.reload();
//      } catch (error) {
//         console.log(error?.response?.data?.message)
//         toast.error(error?.response?.data?.message, {
//            position: toast.POSITION.TOP_CENTER
//         })
//      }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)

        try {
            const {data} = await axios.post(`${baseUrl}/admin/login`, datax)
            console.log(data, data.token)
            localStorage.setItem("SIXELEVEN_TOKEN", data.token);
            localStorage.setItem("SIXELEVEN_ID", data?.data?._id);
            dispatch({ type: userActionTypes.SIGNIN_SUCCESS, payload: data.data });
            setLoading(false)
            window.location.href = "/admin"
            // history.push('/dashboard')
        } catch (error) {
            console.log(error?.response?.data?.message)
            setLoading(false)
            toast.error(error?.response?.data?.message)
        }
    }


    const [showPassword, setShowPasword] = useState(false)
    return (
        <div className="login">
            <WebHeader />
            <div className="main">
                <h1>Welcome!</h1>
                <p className="para">Log in to your portal account</p>

                <form onSubmit={handleSubmit}>
                    <div className="input">
                        <label>Email</label><br />
                        <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder='Name@work.com' />
                    </div>
                    <div className="input">
                        <label>Password</label><br />
                        <input value={password} onChange={e => setPassword(e.target.value)} type={showPassword ? "text" : "password"} placeholder='Password' />
                        {showPassword ? <i className="fas fa-eye" onClick={() => setShowPasword(false)}></i> : <i className="fas fa-eye-slash" onClick={() => setShowPasword(true)}></i>}
                    </div>
                    <button type='submit'>{loading ? "LOGGING IN..." : "LOG IN"}</button>
                </form>
            </div>
            
        </div>
    )
}

export default Login;