import './viewListing.scss';
import {Link} from 'react-router-dom';
import WebHeader from '../../../components/webHeader/webHeader';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import baseUrl from '../../../config';
import AppLoader from '../../../components/appLoader/appLoader';

const ViewListing = (props) => {
    const [loading, setLoading] = useState(true)
    const [job, setJob] = useState(null);

    const id = props?.location?.id

    const history = useHistory()

    console.log(props)

    useEffect(() => {
        axios.get(`${baseUrl}/admin/job/${id}`)
        // .then(res => console.log(res?.data?.result))
        .then(res => setJob(res?.data?.result))
        .then(res => setLoading(false))
        .catch(err => console.log(err))
    }, [])

    return (
        <div className="view-listing">
            <WebHeader />
            <div className="content">
                <Link to="/career" style={{textDecoration: "none"}}><p className="back"><i className="fas fa-arrow-left"></i>Back</p></Link>

                {loading ? <AppLoader /> : <div className="post">
                    <p className="jtitle">{job?.title} <span>{job?.employeeType}/{job?.workType}</span></p>
                    <p className="location">Location: <strong>{job?.location}</strong></p>
                    <Link to={{pathname: "/posting-apply", id: id}}><button>APPLY HERE!</button></Link>

                    <div className="role">
                        <p className="title">Role Description</p>
                        <p className="desc">{job?.jobDescription}</p>
                    </div>
                    <div className="role">
                        <p className="title">Requirements</p>
                        <ul className='points'>
                            <li>{job?.jobRequirement}</li>
                        </ul>
                    </div>
                    <div className="role">
                        <p className="title">Your Day to Day activities would include:</p>
                        <ul className='points'>
                            <li>{job?.jobActivities}</li>
                        </ul>
                    </div>
                </div>}
            </div>
           
        </div>
    )
}

export default ViewListing;