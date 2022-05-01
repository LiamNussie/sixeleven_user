import { useState } from "react";
import { Link } from "react-router-dom";
import "./customModal2.scss";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import baseUrl from "../../../../config";
// import baseUrl from "../../config";

const Modal2 = ({ setShowModal }) => {
  const [login, setLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const currentUser = useSelector(({ userData }) => userData.currentUser);
  console.log(currentUser);
  const {
    address,
    category,
    dateOfBirth,
    email,
    gender,
    image,
    localGovt,
    name,
    phoneNo,
    refereeName,
    refereeNo,
    refereeRelationship,
    refereeTitle,
    stateOfResidence,
    widowInfo,
    _id: id
  } = currentUser;

  const [loading, setLoading] = useState(false);
  const [reason, setReason] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const datax = {
    address,
    category,
    dateOfBirth,
    email,
    gender,
    image,
    localGovt,
    name,
    phoneNo,
    refereeName,
    refereeNo,
    refereeRelationship,
    refereeTitle,
    stateOfResidence,
    educationLevel: widowInfo?.educationLevel,
    skill: widowInfo?.skill,
    certification: widowInfo?.certification,
    reasonForAid: reason
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
        const res = await axios.post(`${baseUrl}/user/request-aid/${id}`, datax)
        console.log(res.data)
        toast.success(res?.data?.message)
        setLoading(false)
        window.location.reload()
    } catch(error) {
        console.log(error?.response?.data)
        toast.error(error?.response?.data)
        setLoading(false)
    }

    // try {
    //     const {data} = await axios.post(`${baseUrl}/user/login`, datax)
    //     console.log(data, data.token)
    //     localStorage.setItem("SIXELEVEN_TOKEN", data.token);
    //     localStorage.setItem("SIXELEVEN_ID", data?.userInfo?._id);
    //     dispatch({ type: userActionTypes.SIGNIN_SUCCESS, payload: data.userInfo });
    //     setLoading(false)
    //     window.location.href ="/user/dashboard"
    //     // history.push('/user/dashboard')
    // } catch (error) {
    //     console.log(error?.response?.data?.message)
    //     setLoading(false)
    //     toast.error(error?.response?.data?.message)
    // }
  };

  return (
    <div className="customm">
      <div className="wrapperm">
        <div className="modalm">
          <div className="topm">
            {/* <i className="fas-fa-times"></i> */}
            {login ? (
              <p onClick={() => setLogin(false)} className="backx">
                <i className="fas fa-arrow-left"></i>Back
              </p>
            ) : (
              <p onClick={() => setShowModal(false)} className="close">
                close
              </p>
            )}
          </div>
          <div className="bottomm">
            <form onSubmit={handleSubmit}>
              <div className="input">
                <label>Reason for aid</label>
                <br />
                <textarea
                  rows="10"
                  column="10"
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="Why do you need this aid?"
                  type="email"
                />
              </div>

              <button type="submit" className="xx">
                {loading ? "REQUESTING.." : "REQUEST"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal2;
