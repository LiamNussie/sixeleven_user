import './career.scss';
import User1 from '../../../assets/user1.png';
import User2 from '../../../assets/user2.png';
import User3 from '../../../assets/user3.png';
import User4 from '../../../assets/user4.png';
import User5 from '../../../assets/user5.png';
import Searchicon from "./search.svg";
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { getAllPostedJobs } from '../../../services/career';



const datax = [
    {
        name: "Adunoluwa Adeyemi",
        status: "waitlisted",
        date: "09/05/2019",
        jobTitle: "Security Officer",
    },
    {
        name: "Ogaga Ifowodo",
        status: "hired",
        date: "04/11/2020",
        jobTitle: "Team Member",
    },
    {
        name: "Ibife Alufohai",
        status: "pending",
        date: "17/10/2020",
        jobTitle: "Assistant",
    },
    {
        name: "Adunoluwa Adeyemi",
        date: "17/10/2020",
        status: "rejected",
        jobTitle: "General Manager",
    },
    {
        name: "Ogaga Ifowodo",
        status: "waitlisted",
        date: "04/11/2020",
        jobTitle: "Manager",
    },
    {
        name: "Ibife Alufohai",
        status: "pending",
        date: "17/10/2020",
        jobTitle: "Sales",
    },
    {
        name: "Adunoluwa Adeyemi",
        status: "pending",
        date: "09/05/2019",
        jobTitle: "Security Officer",
    },
    {
        name: "Ogaga Ifowodo",
        status: "hired",
        date: "04/11/2020",
        jobTitle: "General Manager",
    },
    {
        name: "Ibife Alufohai",
        status: "hired",
        date: "17/10/2020",
        jobTitle: "Team Member",
    },
    
]

const Careers = () => {
    const [page, setPage] = useState("listings");

    const [searchValue, setSearchValue] = useState("");
    const [searchValue2, setSearchValue2] = useState("");

    const history = useHistory()

    const {data, isLoading, error} = useQuery("get all jobs posted", getAllPostedJobs)
    if(isLoading) {
        console.log('posted jobs is loading')
    }else if(data) {
        console.log('posted jobs', data)
    } else {
        console.log(error)
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div className='vol'>
            <p className="title">Careers</p>
            <ul className="nav">
                <li onClick={() => setPage("listings")} className={page === "listings" ? "active" : null}>Job Listings</li>
                <li onClick={() => setPage("candidates")} className={page === "candidates" ? "active" : null}>Candidates</li>
            </ul>

            {page === "listings" &&
                <>
                <div className="top-row">
                <div className="left">
                    <div className="input">
                        <img src={Searchicon} alt="search_icon" />
                        <input onChange={e => setSearchValue(e.target.value)} type="text" placeholder="Search job title" />
                    </div>
                </div>
                <div className="right">
                <Link style={{textDecoration: "none"}} to="/dashboard/career/add"><button><i className="fas fa-plus"></i>CREATE ROLE</button></Link>
                </div>
                
            </div>
            <div className="volunteers">
            
            <table>
                <tr className='label-row'>
                    <td>Job Title</td>
                    <td>Candidates</td>
                    <td>Posted On</td>
                    <td></td>
                </tr>
                {isLoading ? <p>Loading...</p> : data?.data?.result?.filter(i => i?.title.toLowerCase().includes(searchValue.toLowerCase())).map(({title, createdAt, candidates, status, _id: id}, index) => {
                    return (
                        <tr onClick={() => history.push("/dashboard/career/view-job", {jobId: id})} className='content-row' key={index}>
                            <td>{title}</td>
                            <td>{candidates?.length}</td>
                            <td>{createdAt.slice(0,10)}</td>
                            <td>{status === "Open" ? <p className='open'>{status}</p> : <p className='closed'>{status}</p>}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
        </>}

            {page === "candidates" &&
                <>
                <div className="top-row">
                <div className="left">
                    <div className="input">
                        <img src={Searchicon} alt="search_icon" />
                        <input type="text" placeholder="Search by candidate or job title" />
                    </div>
                </div>
                <div className="right">
                    <select>
                        <option>Status</option>
                    </select>
                    <select>
                        <option>Date</option>
                    </select>
                </div>
            </div>
            <div className="volunteers">
            
            <table className='unshift'>
                <tr className='label-row'>
                    <td className='lefty'>Name</td>
                    <td>Applying for</td>
                    <td>Date Applied</td>
                    <td>Status</td>
                </tr>
                {datax.map(({name, date, jobTitle, status}, index) => {
                    return (
                        <tr className='content-row' key={index}>
                            <td className='lefty'>{name}</td>
                            <td>{jobTitle}</td>
                            <td>{date}</td>
                            {status === 'waitlisted' && <td><p className=" status assessing">{capitalizeFirstLetter(status)}</p></td>}
                            {status === 'rejected' && <td><p className=" status denied">{capitalizeFirstLetter(status)}</p></td>}
                            {status === 'pending' && <td><p className=" status pending">{capitalizeFirstLetter(status)}</p></td>}
                            {status === 'hired' && <td><p className=" status approved">{capitalizeFirstLetter(status)}</p></td>}
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

export default Careers;