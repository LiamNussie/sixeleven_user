import './donations.scss';
import User1 from '../../../assets/user1.png';
import User2 from '../../../assets/user2.png';
import User3 from '../../../assets/user3.png';
import User4 from '../../../assets/user4.png';
import User5 from '../../../assets/user5.png';
import Searchicon from "./search.svg";
import { useState } from 'react';
import { useQuery } from 'react-query';
import { getAllDonations } from '../../../services/donations';
import moment from 'moment'
import { useHistory } from 'react-router-dom';

const Donations = () => {
    const [searchValue, setSearchValue] = useState("");

    const {data, isLoading, error} = useQuery("get all donations", getAllDonations)
    if(isLoading) {
        console.log('donations is loading')
    }else if(data) {
        console.log('donations', data)
    } else {
        console.log(error)
    }

    const history = useHistory();

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        
        <div className='don'>
            <p className="title">Donations</p>
            <div className="top-row">
                <div className="left">
                    <div className="input">
                        <img src={Searchicon} alt="search_icon" />
                        <input onChange={e => setSearchValue(e.target.value)} type="text" placeholder="Search donor" />
                    </div>
                </div>
                <div className="right">
                    <select>
                        <option>Date</option>
                    </select>
                    <select>
                        <option selected disabled>Sponsor</option>
                        <option value="individual">Individual</option>
                        <option value="organization">Organization</option>
                    </select>
                </div>
            </div>
            <div className="donations">
            
            <table>
                <tr className='label-row'>
                    <td>Date</td>
                    <td>Name</td>
                    <td>Sponsor Type</td>
                    <td>Amount</td>
                    <td>Event</td>
                </tr>
                {!isLoading && data?.data?.result.filter(el => el.name.toLowerCase().includes(searchValue.toLowerCase())).map(({name, createdAt, sponsorType, _id: id, amountDonated, eventDonatedTo}, index) => {
                    return (
                        <tr onClick={() => history.push("/dashboard/donations/view-donation", {donationId: id})} className='content-row' key={index}>
                            <td>{moment().calendar(createdAt)}</td>
                            <td>{name}</td>
                            <td className='spons'>{sponsorType.toUpperCase()}</td>
                            <td>N{parseInt(amountDonated).toLocaleString()}</td>
                            <td className='event'>{eventDonatedTo}</td>
                            
                        </tr>
                    )
                })}
            </table>
        </div>
        <div className="btm-row">
            <div className="left">
                <p>Showing: {data?.data?.result.length}/{data?.data?.result.length}</p>
            </div>
            <ul>
                <li><i className="fas fa-angle-left"></i></li>
                <li>6</li>
                <li>7</li>
                <li>..</li>
                <li>9</li>
                <li>10</li>
                <li><i className="fas fa-angle-right"></i></li>
            </ul>
        </div>
        </div>
        
    )
}

export default Donations;