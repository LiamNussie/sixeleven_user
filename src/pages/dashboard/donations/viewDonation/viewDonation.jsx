import './viewDonation.scss';
import { useState, useEffect } from 'react';
import baseUrl from '../../../../config';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AppLoader from '../../../../components/appLoader/appLoader';

const config = {
    headers: {
       "Authorization": `Bearer ${localStorage.SIXELEVEN_TOKEN}`
       }
}

const ViewDonation = (props) => {
    const [loading, setLoading] = useState(true)
    const [donation, setDonation] = useState(true);
    const id = props?.location?.state?.donationId

    useEffect(() => {
        axios.get(`${baseUrl}/admin/donation/${id}`, config)
        // .then(res => console.log(res?.data?.result))
        .then(res => setDonation(res?.data?.result))
        .then(res => setLoading(false))
        .catch(err => console.log(err))
    }, [])

    return (
        <div className="view-donation">
             <Link to="/dashboard/donations" style={{textDecoration: "none"}}><p className="back"><i className="fas fa-arrow-left"></i>back</p></Link>
             {loading ? <AppLoader /> : 
             <>
              <div className="top">
                <p className="dir">
                Donations
                <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M1 1L7 7L1 13"
                    stroke="#AAC5CC"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    />
                </svg>
                </p>
                <span>{donation?.name}</span>
            </div>

            <div className="box">
                <div className="left">
                    <p className="label">Name: <strong className='name'>{donation?.name}</strong></p>
                    <p className="label">Sponsor Type: <strong>{donation?.sponsorType}</strong></p>
                    <p className="label">Email: <strong>{donation?.email}</strong></p>
                    <p className="label">Phone: <strong>{donation?.phoneNo}</strong></p>
                </div>
                <div className="rightd">
                    <div className="boxi">
                        <p className="val">N{parseInt(donation?.amountDonated).toLocaleString()}</p>
                        <p className="label">Total Amount Donated</p>
                    </div>
                    <div className="boxi">
                        <p className="val">{donation?.eventDonatedTo?.length.toLocaleString()}</p>
                        <p className="label">No. of Donations</p>
                    </div>
                </div>
            </div>
             </>}
            
        </div>
    )
}

export default ViewDonation