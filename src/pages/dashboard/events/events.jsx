import './events.scss';
import User1 from '../../../assets/user1.png';
import User2 from '../../../assets/user2.png';
import User3 from '../../../assets/user3.png';
import User4 from '../../../assets/user4.png';
import User5 from '../../../assets/user5.png';
import Searchicon from "./search.svg";
import { useQuery } from 'react-query';
import { getAllEvents } from '../../../services/events';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const progress = 58


const Events = () => {
    const [searchValue, setSearchValue] = useState("");

    const {data, isLoading, error} = useQuery("get all events", getAllEvents)
    if(isLoading) {
        console.log('events is loading')
    }else if(data) {
        console.log('events', data)
    } else {
        console.log(error)
    }

    const datax = [
        {
            label: "No. of Events",
            val: data?.data?.result.length
        },
        {
            label: "Total Amount Raised",
            val: "N" + data?.data?.result.map(item => parseInt(item.amountRaised)).reduce((prev, curr) => prev + curr, 0)
        },
        {
            label: "Total Amount Spent",
            val: "N300,000"
        },
    ]
    

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div className='eve'>
            <div className="title">
                <p className="txt">Events & Activities</p>
                <Link style={{textDecoration: "none"}} to="/dashboard/events/add"><button><i className="fas fa-plus"></i>NEW EVENT</button></Link>
            </div>
            <div className="overviewe">
                {datax.map(({label, val}, index) => {
                    return (
                        <div className="boxi" key={index}>
                            {!isLoading && <p className="val">{val}</p>}
                            <p className="label">{label}</p>
                        </div>
                    )
                })}
            </div>
            <div className="top-rowx">
                <div className="left">
                    <div className="input">
                        <img src={Searchicon} alt="search_icon" />
                        <input onChange={e => setSearchValue(e.target.value)} type="text" placeholder="Search event" />
                    </div>
                </div>
            </div>
            <div className="events">
            
            <table>
                <tr className='label-row'>
                    <td>Event</td>
                    <td>Fundraising Progress</td>
                    <td>Due Date</td>
                </tr>
                {!isLoading && data?.data?.result.filter(i => i.name.toLowerCase().includes(searchValue.toLowerCase())).map(({name, budget, amountRaised, eventDate}, index) => {
                    const val = parseInt(amountRaised)/parseInt(budget) * 100
                    return (
                        <tr className='content-row' key={index}>
                            <td>{name}</td>
                            {val <= 30 && <td><div className="p-bar"><p style={{width: `${data?.data?.result ? val : 0}%`, backgroundColor: "crimson"}} className="fill">.</p></div></td>}
                            {val >= 31 && val <=70 && <td><div className="p-bar"><p style={{width: `${data?.data?.result ? val : 0}%`, backgroundColor: "goldenrod"}} className="fill">.</p></div></td>}
                            {val >= 71 && <td><div className="p-bar"><p style={{width: `${data?.data?.result ? val : 0}%`, backgroundColor: "green"}} className="fill">.</p></div></td>}
                            <td>{eventDate}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
        
        </div>
        
    )
}

export default Events;