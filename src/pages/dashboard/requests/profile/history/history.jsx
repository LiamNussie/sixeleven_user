import './history.scss';

const data = [
    {
        date: "03/02/21",
        appliedAs: "Street Hawker",
        reason: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        status: "assessing"
    },
    {
        date: "01/02/21",
        appliedAs: "Street Hawker",
        reason: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        status: "pending"
    },
    {
        date: "24/01/21",
        appliedAs: "Street Hawker",
        reason: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        status: "approved"
    }
]

const History = () => {
    return (
        <div className="history">
            <p className="count">{data.length} Total Requests</p>

            <table>
                <tr className='label-row'>
                    <td>Date</td>
                    <td>Applied As</td>
                    <td>Reason for request</td>
                    <td>Status</td>
                </tr>
                {data.map(({date, appliedAs, reason, status}, index) => {
                    return (
                        <tr className="content-row" key={index}>
                            <td>{date}</td>
                            <td>{appliedAs}</td>
                            <td className='reason'>{reason}</td>
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