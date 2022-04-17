import './activity.scss';
import { useQuery } from 'react-query';
import { getAllActivities } from '../../../../services/activities';
import moment from 'moment';

const activities = [
    {
        role: "INDIV",
        createdAt: "2:00pm",
        name: "James Olumuyiwa",
        amount: 100000,
        type: "donation"
    },
    {
        role: "WID",
        createdAt: "2:00pm",
        name: "Obi Patricia",
        type: "request"
    },
    {
        role: "INDIV",
        createdAt: "2:00pm",
        name: "James Olumuyiwa",
        amount: 100000,
        type: "donation"
    },
    {
        role: "INDIV",
        createdAt: "2:00pm",
        name: "James Olumuyiwa",
        amount: 100000,
        type: "donation"
    },
    {
        role: "WID",
        createdAt: "2:00pm",
        name: "Obi Patricia",
        type: "request"
    },
    {
        role: "WID",
        createdAt: "2:00pm",
        name: "Obi Patricia",
        type: "request"
    },
    {
        role: "WID",
        createdAt: "2:00pm",
        name: "Obi Patricia",
        type: "request"
    },
]

const Activity = () => {

    const {data, isLoading, error} = useQuery("get all activities", getAllActivities)
    if(isLoading) {
        console.log('activity is loading')
    }else if(data) {
        console.log('activity', data)
    } else {
        console.log(error)
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div className="activity">
             <p className="title">Activity</p>
             <div className="list">
                 {data?.data?.result.map(({createdAt, info, status}, index) => {
                    return (
                        <div className={status === "donation" ? "item donation" : "item request"} key={index}>
                            <div className="top">
                                <p style={{textTransform: "uppercase"}} className="type"><span id={status === "donation" ? "don" : "req"}>{status === "donation" ? "D" : "R"}</span>{status.slice(0,3)}</p>
                                <p className="time">{moment().calendar(createdAt)}</p>
                            </div>
                            <p className="text">{info}</p>
                            {/* {status === "donation" && <p className="text">{name} sent in a {type} of <span>{amount}</span> to Provide Education for a Street Hawker</p>}
                            {type === "request" && <p className="text">{name} sent in a {type} for aid</p>} */}
                        </div>
                    )
                })}
             </div>
             
        </div>
    )
}

export default Activity;