import { useState } from "react";
import { Link } from "react-router-dom";
import "./customModal.scss";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import baseUrl from "../../config";
import { userActionTypes } from "../../redux/constants/userActionTypes";

const CustomModal = ({setShowModal}) => {

    const [login, setLogin] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const history = useHistory();

    const datax = {
        email,
        password,
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)

        try {
            const {data} = await axios.post(`${baseUrl}/user/login`, datax)
            console.log(data, data.token)
            localStorage.setItem("SIXELEVEN_TOKEN", data.token);
            localStorage.setItem("SIXELEVEN_ID", data?.userInfo?._id);
            dispatch({ type: userActionTypes.SIGNIN_SUCCESS, payload: data.userInfo });
            setLoading(false)
            window.location.href ="/user/dashboard"
            // history.push('/user/dashboard')
        } catch (error) {
            console.log(error?.response?.data?.message)
            setLoading(false)
            toast.error(error?.response?.data?.message)
        }
    }
    

    return (
        <div className="customm">
            <div className="wrapperm">
                <div className="modalm">
                    <div className="topm">
                         {/* <i className="fas-fa-times"></i> */}
                         {login ? <p onClick={() => setLogin(false)} className="backx"><i className="fas fa-arrow-left"></i>Back</p> : <p onClick={() => setShowModal(false)} className="close">close</p>}
                    </div>
                    <div className="bottomm">
                        <p className="title">{login ? "Applicant Log in" : "Request aid"}</p>
                        {!login && <p className="para">Select whether this is your first time applying or you’re a returning applicant</p>}
                        {login ?
                          <form onSubmit={handleSubmit}>
                              <div className="input">
                                <label>Email</label><br />
                                <input onChange={e => setEmail(e.target.value)} placeholder='enter email' type="email" />
                              </div>
                              <div className="input">
                                <label>Password</label><br />
                                <input onChange={e => setPassword(e.target.value)} placeholder='enter password' type={showPassword ? "text" : "password"} />
                                {showPassword ? <i onClick={() => setShowPassword(false)} className="fas fa-eye"></i> : <i onClick={() => setShowPassword(true)} className="fas fa-eye-slash"></i>}
                                <Link to="/reset" style={{textDecoration: "none"}}><div className="forgot"><p>Forgot password?</p></div></Link>
                              </div>
                              <button type="submit" className="xx">{loading ? "LOGGING IN.." : "LOG IN"}</button>
                          </form>
                        : <div className="btns">
                            <Link to="/request-aid"><button className="ix">New applicant <i className="fas fa-arrow-right"></i></button></Link>
                            <button onClick={() => setLogin(true)} className="ox">Returning applicant Log in <i className="fas fa-arrow-right"></i></button>
                        </div>}
                    </div>
                  
                </div>
            </div>
        </div>
    )
}

export default CustomModal;