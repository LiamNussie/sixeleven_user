import axios from "axios";
import { useEffect, useState } from "react";
import baseUrl from "../../../../config";
import "./viewVolunteer.scss";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const config = {
  headers: {
    Authorization: `Bearer ${localStorage.SIXELEVEN_TOKEN}`,
  },
};

const ViewVolunteer = (props) => {
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);
  const [vol, setVol] = useState(null);
  const id = props?.location?.state?.volunteerId;

  useEffect(() => {
    axios
      .get(`${baseUrl}/admin/volunteer/${id}`, config)
    //   .then((res) => console.log(res))
      .then((res) => setVol(res?.data?.result))
      .then((res) => setLoading(false))
      .catch((err) => console.log(err));
  }, []);

  const approve = async (id) => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.SIXELEVEN_TOKEN}` }
      
  };
  setLoading2(true)
  try {
      await fetch(`${baseUrl}/admin/volunteer/approve/${id}`, requestOptions)
      .then(res => res.json())
      .then(res => toast.success(res?.message))
      .then(res => setLoading2(false))
    //   .then(res => history.push("/dashboard/volunteers/view", {volunteerId: id}))
  } catch (error) {
      console.log(error?.response?.data?.message)
      toast.error(error?.response?.data?.message)
      setLoading2(false)
  }
  
}
  const reject = async (id) => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.SIXELEVEN_TOKEN}` }
      
  };
  setLoading3(true)
  try {
      await fetch(`${baseUrl}/admin/volunteer/reject/${id}`, requestOptions)
      .then(res => res.json())
      .then(res => toast.success(res?.message))
      .then(res => setLoading3(false))
    //   .then(res => history.push("/dashboard/volunteers/view", {volunteerId: id}))
  } catch (error) {
      console.log(error?.response?.data?.message)
      toast.error(error?.response?.data?.message)
      setLoading3(false)
  }
  
}

  return (
    <div className="view-volunteers">
      <Link to="/dashboard/volunteers" style={{ textDecoration: "none" }}>
        <p className="back">
          <i className="fas fa-arrow-left"></i>back
        </p>
      </Link>
        <br />
      {loading ? (
        "Loading..."
      ) : (
        <div className="view">
            <div className="top">
                <p className="name">{vol?.name}</p>
                {vol?.status === "pending" && 
                <div className="btns">
                    <button onClick={() => reject(id)} className="deny">{loading3 ? "Rejecting.." : "Deny"}</button>
                    <button onClick={() => approve(id)} className="approve">{loading2 ? "Approving.." : "Approve"}</button>
                </div>}
            </div>
          <div className="cont">
            <div className="leftz">
                <p className="label">Gender:  <strong className="val">{vol?.gender}</strong></p>
                <p className="label">D.O.B:  <strong className="val">{vol?.dateOfBirth}</strong></p>
                <p className="label">Occupation Status:  <strong className="val">{vol?.occupationStatus}</strong></p>
                <p className="label">State of Residence:  <strong className="val">{vol?.stateOfResidence}</strong></p>
                <p className="label">Phone Number:  <strong className="val">{vol?.phoneNo}</strong></p>
                <p className="label">Email:  <strong className="val">{vol?.email}</strong></p>
            </div>
            <div className="rightz">
                {vol?.status !== "Approved" ? <>
                    <p className="mtitle">Motivation to Join</p>
                    <p className="motive">{vol?.motivation}</p>
                </> :
                <>
                    <p className="mtitle">Projects</p>
                    <ul style={{marginLeft: "1rem"}} className="list">
                        {vol?.project.map((i, index) => {
                            return (
                                <li key={index}>{i}</li>
                            )
                        })}
                    </ul>
                </>
                }
                
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewVolunteer;
