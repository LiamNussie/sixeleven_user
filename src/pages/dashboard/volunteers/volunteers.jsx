import './volunteers.scss';
import User1 from '../../../assets/user1.png';
import User2 from '../../../assets/user2.png';
import User3 from '../../../assets/user3.png';
import User4 from '../../../assets/user4.png';
import User5 from '../../../assets/user5.png';
import Searchicon from "./search.svg";
import { useState } from 'react';
import { useQuery } from 'react-query';
import { getAllVolunteerApplications} from '../../../services/volunteers';
import axios from 'axios';
import baseUrl from '../../../config';
import { Link, useHistory } from 'react-router-dom';



const Volunteers = () => {
    const [page, setPage] = useState("all");
    const [searchValue, setSearchValue] = useState("");
    const [searchValue2, setSearchValue2] = useState("");
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    const {data, isLoading, error} = useQuery("get all volunteeer application", getAllVolunteerApplications)
    if(isLoading) {
        console.log('volunteer applications is loading')
    }else if(data) {
        console.log('volunteer applications', data)
    } else {
        console.log(error)
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    

    const markAsOpened = async (id) => {
        const requestOptions = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.SIXELEVEN_TOKEN}` }
          
      };
      try {
          await fetch(`${baseUrl}/admin/volunteer/update/${id}`, requestOptions)
          .then(res => res.json())
          .then(res => history.push("/dashboard/volunteers/view", {volunteerId: id}))
      } catch (error) {
          console.log(error?.response)
      }
      
  }

    return (
        <div className='vol'>
            <p className="title">Volunteers</p>
            <ul className="nav">
                <li onClick={() => setPage("all")} className={page === "all" ? "active" : null}>All Volunteers</li>
                <li onClick={() => setPage("applications")} className={page === "applications" ? "active" : null}>Volunteer Applications</li>
            </ul>

            {page === "all" &&
                <>
                <div className="top-row">
                <div className="left">
                        <div className="input">
                            <img src={Searchicon} alt="search_icon" />
                            <input onChange={e => setSearchValue(e.target.value)} type="text" placeholder="Search volunteer" />
                        </div>
                </div>
                <div className="right">
                    <Link style={{textDecoration: "none"}} to="/dashboard/volunteers/add"><button><i className="fas fa-plus"></i>NEW VOLUNTEER</button></Link>
                </div>
            </div>
            <div className="volunteers">
            
            <table>
                <tr className='label-row'>
                    {/* <td><input type="checkbox" /></td> */}
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone Number</td>
                    <td>Projects</td>
                    <td>Joined</td>
                </tr>
                {data?.data?.result.filter(i => i.status === "Approved" && i.name.toLowerCase().includes(searchValue.toLowerCase())).map(({name, image, phoneNo, project, createdAt, email, _id: id}, index) => {
                    return (
                            <tr onClick={() => history.push("/dashboard/volunteers/view", {volunteerId: id})} className='content-row' key={index}>
                                {/* <td><input type="checkbox" /></td> */}
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>{phoneNo}</td>
                                <td>{project?.length}</td>
                                <td>{createdAt.slice(0,10)}</td>
                            </tr>
                    )
                })}
            </table>
        </div>
        </>}

            {page === "applications" &&
                <>
                <div className="top-row">
                <div className="left">
                    <div className="input">
                        <img src={Searchicon} alt="search_icon" />
                        <input onChange={e => setSearchValue2(e.target.value)} type="text" placeholder="Search volunteer applicant" />
                    </div>
                </div>
            </div>
            <div className="volunteers">
            
            <table className='unshift'>
                <tr className='label-row'>
                    <td>Date</td>
                    <td>Name</td>
                    <td>Motivation to join</td>
                </tr>
                {!isLoading && data?.data?.result.filter(i => i.status === "pending" && i.name.toLowerCase().includes(searchValue2.toLowerCase())).map(({name, dateOfBirth, motivation, isOpened, _id: id}, index) => {
                    return (
                        <tr onClick={() => markAsOpened(id)} id={!isOpened ? "unopened" : null} className='content-row' key={index}>
                            <td>{dateOfBirth}</td>
                            <td>{name}</td>
                            <td>{motivation}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
        </>}
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

export default Volunteers;