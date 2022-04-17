import './requests.scss';
import User1 from '../../../assets/user1.png';
import User2 from '../../../assets/user2.png';
import User3 from '../../../assets/user3.png';
import User4 from '../../../assets/user4.png';
import User5 from '../../../assets/user5.png';
import Searchicon from "./search.svg";
import { useQuery } from 'react-query';
import { getAllUsers } from '../../../services/overview';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllRequests } from '../../../services/requests';

// const image = User1

const Requests = () => {
    const [searchValue, setSearchValue] = useState("");
    const [statusValue, setStatusValue] = useState("");

    const {data, isLoading, error} = useQuery("get all requests", getAllRequests)
    if(isLoading) {
        console.log('requests data is loading')
    }else if(data) {
        console.log('requests', data)
    } else {
        console.log(error)
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div className='req'>
            <p className="title">Requests for Aid</p>
            <div className="top-row">
                <div className="left">
                    <div className="input">
                        <img src={Searchicon} alt="search_icon" />
                        <input onChange={e => setSearchValue(e.target.value)} type="text" placeholder="Search application" />
                    </div>
                </div>
                <div className="right">
                    <select>
                        <option>Date</option>
                    </select>
                    <select onChange={e => setStatusValue(e.target.value)}>
                        <option disabled>Applied as</option>
                        <option value="new">New</option>
                        <option value="returning">Returning</option>
                    </select>
                    <select>
                        <option>Membership</option>
                        <option value="streetHawker">Street Hawker</option>
                        <option value="widow">Widow</option>
                    </select>
                    <select>
                        <option>Status</option>
                    </select>
                </div>
            </div>
            <div className="requests">
            
            <table>
                <tr className='label-row'>
                    <td>Name</td>
                    <td>Date of Birth</td>
                    <td>Applied as</td>
                    <td>Membership</td>
                    <td>Status</td>
                    <td>Action</td>
                    <td></td>
                </tr>
                {!isLoading && data?.data?.result.filter(i => i.userId?.name.toLowerCase().includes(searchValue.toLowerCase())).map(({name, category, membership, image, userId, dateOfBirth, status, _id: id}, index) => {
                    return (
                        <tr className='content-row' key={index}>
                            <td>
                                <div className="img-name">
                                    <div className="img" style={{backgroundImage: `url(${userId?.image})`}}></div>
                                    <p className="name">{userId?.name}</p>
                                </div>
                            </td>
                            <td>{userId?.dateOfBirth}</td>
                            <td>{userId?.category}</td>
                            <td>{userId?.membership}</td>
                            {status === "pending" && <td><p className="status pending">{status}</p></td>}
                            {status === "assessing" && <td><p className="status assessing">{status}</p></td>}
                            {status === "denied" && <td><p className=" status denied">{status}</p></td>}
                            {status === "approved" && <td><p className="status approved">{status}</p></td>}
                            <td><i class="fas fa-ban"></i></td>
                            <td><Link style={{textDecoration: "none"}} to={{ pathname: '/dashboard/requests/view', query: { category: category, id: id} }}><p className="review">Review</p></Link></td>
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

export default Requests;