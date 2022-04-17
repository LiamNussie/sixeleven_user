import './history.scss';
import { useSelector } from 'react-redux';
import moment from 'moment';

const History = ({data}) => {
    const currentUser = useSelector(({userData}) => userData.currentUser)
    const {category, request} = currentUser
    return (
        <div className="history">
            <p className="count">{request?.length} Total Requests</p>

            <table>
                <tr className='label-row'>
                    <td>Date</td>
                    <td>Applied As</td>
                    <td>Reason for request</td>
                    <td>Status</td>
                </tr>
                {request?.map(({date, createdAt, reasonForAid, status}, index) => {
                    return (
                        <tr className="content-row" key={index}>
                            <td>{moment().calendar(createdAt)}</td>
                            <td>{category}</td>
                            <td className='reason'>{reasonForAid}</td>
                            {status === "pending" && <td><p className="status pending">{status}</p></td>}
                            {status === "assessing" && <td><p className="status assessing">{status}</p></td>}
                            {status === "denied" && <td><p className=" status denied">{status}</p></td>}
                            {status === "approved" && <td><p className="status approved">{status}</p></td>}
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default History;