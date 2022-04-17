import { useState } from "react";
import states2 from "../../../../utils/statelga";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import './widow.scss'

const Widow = () => {
    const [tempModel, setTempModel] = useState([]);
    const [state, setState] = useState("");
    const [lga, setLga] = useState("");
    const [showP, setShowP] = useState(false);

    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [dob, setDob] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [image, setImage] = useState("temp.png");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");

    const history = useHistory()

    
    const selectState = (e) => {
        setState(e.target.value);
        setTempModel(states2.find((i) => i.state === e.target.value).lgas);
      };
      const selectLga = (e) => {
        setLga(e.target.value);
      };

      
      const handleSubmit = (e) => {
        e.preventDefault();
        // history.push("/request-aid/category", {data: data})
    }

  return (
    <div className="widow">
        <div className="cont">
                <Link to="/home" style={{textDecoration: "none"}}><p className="back"><i className="fas fa-arrow-left"></i>Back</p></Link>
                <div className="flexo">
                    <div className="left">
                        <div className="img"></div>
                    </div>
                    <div className="right">
                        <p className="title">Widow Profile</p>
                        <p className="para">Hi there. Please provide these additional information below to create a profile with us</p>
                        <form onSubmit={handleSubmit}>    
                            <div className="input">.
                                <label>Name <span style={{color: "crimson"}}>*</span></label><br />
                                <input onChange={e => setName(e.target.value)} placeholder='Full name' type="text" />
                            </div>
                            <div className="input">
                                <label>Gender <span style={{color: "crimson"}}>*</span></label><br />
                                <select onChange={e => setGender(e.target.value)}>
                                    <option selected disabled>Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <div className="input">
                                <label>D.O.B <span style={{color: "crimson"}}>*</span></label><br />
                                <input onChange={e => setDob(e.target.value)} type="date" />
                            </div>
                            <div className="input">
                                <label>Phone Number <span style={{color: "crimson"}}>*</span></label><br />
                                <input onChange={e => setPhone(e.target.value)} placeholder='phone' type="tel" />
                            </div>
                            
                            <div className="input">
                                <label>State of residence <span style={{color: "crimson"}}>*</span></label><br />
                                <select onChange={selectState}>
                                    <option selected disabled>Select state</option>
                                    {states2.map((i, index) => {
                                        return (
                                            <option key={index} value={i.state}>{i.state}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="input">
                                <label>L.G.A <span style={{color: "crimson"}}>*</span></label><br />
                                <select>
                                    <option onChange={e => setLga(e.target.value)} selected disabled>Select LGA</option>
                                    {tempModel.map((i, index) => {
                                        return (
                                            <option key={index} value={i}>{i}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="input">
                                <label>Address <span style={{color: "crimson"}}>*</span></label><br />
                                <input onChange={e => setAddress(e.target.value)} type="text" />
                            </div>
                            <div className="input">
                                <label>Upload your photo <span style={{color: "crimson"}}>*</span></label><br />
                                <input type="file" />
                            </div>
                            <div className="input">
                                <label>Email <span style={{color: "crimson"}}>*</span></label><br />
                                <input onChange={e => setEmail(e.target.value)} placeholder='email address' type="email" />
                            </div>
                            <div className="input">
                                <label>Password <span style={{color: "crimson"}}>*</span></label><br />
                                <input onChange={e => setPassword(e.target.value)} type={showP ? "text" : "password"} />
                                {showP ? <i onClick={() => setShowP(false)} className="fas fa-eye-slash"></i> : <i onClick={() => setShowP(true)} className='fas fa-eye'></i>}
                            </div>
                            <div className="input">
                                <label>Confirm Password <span style={{color: "crimson"}}>*</span></label><br />
                                <input onChange={e => setCPassword(e.target.value)} type={showP ? "text" : "password"} />
                                {showP ? <i onClick={() => setShowP(false)} className="fas fa-eye-slash"></i> : <i onClick={() => setShowP(true)} className='fas fa-eye'></i>}
                            </div>
                            
                             <button type='submit'>NEXT</button>
                        </form>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Widow;