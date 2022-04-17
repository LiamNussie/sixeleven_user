import './staff.scss';
import User1 from '../../../assets/user1.png';
import User2 from '../../../assets/user2.png';
import User3 from '../../../assets/user3.png';
import User4 from '../../../assets/user4.png';
import User5 from '../../../assets/user5.png';
import Searchicon from "./search.svg";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { getAllStaff } from '../../../services/staff';

const Staff = () => {
    const [searchValue, setSearchValue] = useState("");

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const {data, isLoading, error} = useQuery("get all staff", getAllStaff)
    if(isLoading) {
        console.log('staff is loading')
    }else if(data) {
        console.log('staff', data)
    } else {
        console.log(error)
    }

    return (
        <div className='sta'>
            <div className="title-btn">
                <p className="title">Staff</p>
                <div className="btns">
                    <Link style={{textDecoration: "none"}} to="/dashboard/staff/invites"><button className='cancel'><i className="fas fa-paper-plane"></i>SEND INVITE</button></Link>
                    <Link style={{textDecoration: "none"}} to="/dashboard/staff/add"><button><i className="fas fa-plus"></i>NEW STAFF</button></Link>
                </div>
            </div>
            <div className="top-row">
                <div className="left">
                    <div className="input">
                        <img src={Searchicon} alt="search_icon" />
                        <input value={searchValue} onChange={e => setSearchValue(e.target.value)} type="text" placeholder="Search by Candidate name" />
                    </div>
                </div>
                <div className="right">
                    <select>
                        <option>Date</option>
                    </select>
                </div>
            </div>
            <div className="staff">
            
            <table>
                <tr className='label-row'>
                    {/* <td><input type="checkbox" /></td> */}
                    <td>Name</td>
                    <td>Staff ID</td>
                    <td>Email</td>
                    <td>Job Title</td>
                    <td>Joined</td>
                </tr>
                {isLoading ? <p>Loading...</p> :
                data?.data?.result.filter(el => el.name.toLowerCase().includes(searchValue.toLowerCase())).map(({name, image, staffID, position, createdAt, email}, index) => {
                    return (
                        <tr className='content-row' key={index}>
                            {/* <td><input type="checkbox" /></td> */}
                            <td>
                                {name}
                                {/* <div className="img-name">
                                    <img src={image} alt="pp" />
                                    <p className="name">{name}</p>
                                </div> */}
                            </td>
                            <td>{staffID}</td>
                            <td>{email}</td>
                            <td>{position}</td>
                            <td>{createdAt.slice(0,10)}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
        {/* <div className="btm-row">
            <div className="left">
                <p>Showing: 6/80</p>
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
        </div> */}
        </div>
        
    )
}

export default Staff;