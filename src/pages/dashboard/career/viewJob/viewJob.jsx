import axios from 'axios';
import { useEffect, useState } from 'react';
import baseUrl from '../../../../config';
import './viewJob.scss';
import { Link } from 'react-router-dom';
import Dots from './dots.svg';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

const config = {
    headers: {
       "Authorization": `Bearer ${localStorage.SIXELEVEN_TOKEN}`
       }
}

const ViewJob = (props) => {
    const [loading, setLoading] = useState(true)
    const [job, setJob] = useState(true);
    const [optModal, setOptModal] = useState(false)
    const id = props?.location?.state?.jobId

    const history = useHistory()

    useEffect(() => {
        axios.get(`${baseUrl}/admin/job/${id}`, config)
        // .then(res => console.log(res?.data?.result))
        .then(res => setJob(res?.data?.result))
        .then(res => setLoading(false))
        .catch(err => console.log(err))
    }, [])

    const closeOpening = async () => {
        const requestOptions = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.SIXELEVEN_TOKEN}` }
          
      };
      setLoading(true)
      try {
          await fetch(`${baseUrl}/admin/job/update/${id}`, requestOptions)
          .then(res => res.json())
          .then(res => toast.success(res?.message))
          .then(res => setLoading(false))
          .then(res => window.location.reload())
        //   .then(res => history.push("/dashboard/volunteers/view", {volunteerId: id}))
      } catch (error) {
          console.log(error?.response?.data?.message)
          toast.error(error?.response?.data?.message)
          setLoading(false)
      }
      
    }

    const deleteOpening = async () => {
        const requestOptions = {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.SIXELEVEN_TOKEN}` }
          
      };
      setLoading(true)
      try {
          await fetch(`${baseUrl}/admin/job/delete/${id}`, requestOptions)
          .then(res => res.json())
          .then(res => toast.success(res))
          .then(res => setLoading(false))
          .then(res => history.push("/dashboard/career"))
      } catch (error) {
          console.log(error?.response?.data?.message)
          toast.error(error?.response?.data?.message)
          setLoading(false)
      }
      
    }

    return (
        <div className="view-job">
            <Link to="/dashboard/career" style={{textDecoration: "none"}}><p className="back"><i className="fas fa-arrow-left"></i>back</p></Link>

            {loading ? "Loading..." :
            <div className="cont">
                <div className="leftz">
                    <img onClick={() => setOptModal(prev => !prev)} src={Dots} alt="ellipse" />
                    {optModal && 
                    <ul className="modal">
                        <li onClick={closeOpening}>Close this opening</li>
                        <li onClick={deleteOpening} className='delete'>Delete</li>
                    </ul>
                    }
                    <p className="title">{job?.title} <span>{job?.employeeType}/{job?.workType}</span></p><br />
                    <p className="location">Location: <strong>{job?.location}</strong></p>
                    <p className="status">Status: <strong className={job?.status === "Open" ? "open" : "closed"}>{job?.status}</strong></p><br /><br />
                    <div className="desc">
                        <p className="rtitle">Role Description</p>
                        <p className="rpara">{job?.jobDescription}</p>
                    </div>
                    <br /><br />
                    <div className="desc">
                        <p className="rtitle">Job Requirement</p>
                        <p className="rpara">{job?.jobRequirement}</p>
                    </div>
                    <br /><br />
                    <div className="desc">
                        <p className="rtitle">Your Day to Day activities would include:</p>
                        <p className="rpara">{job?.jobActivities}</p>
                    </div>
                </div>
                <div className="rightz">
                    <p className="headz">Candidates</p>
                    <ul className="candidates">
                        {job?.candidates?.length > 0 ?
                        job?.candidates.map((i, index) => {
                            return (
                                <li key={index}>{i}</li>
                            )
                        })
                        :
                        <p style={{marginLeft: "-15px"}}>No Applicants Yet!</p>
                    }
                    </ul>
                </div>
            </div>}
        </div>
    )
}

export default ViewJob;