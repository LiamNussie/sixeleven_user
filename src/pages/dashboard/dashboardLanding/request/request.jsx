import './request.scss';
import User1 from '../../../../assets/user1.png';
import User2 from '../../../../assets/user2.png';
import User3 from '../../../../assets/user3.png';
import User4 from '../../../../assets/user4.png';
import User5 from '../../../../assets/user5.png';
import { useQuery } from 'react-query';
import { getAllUsers } from '../../../../services/overview';
import { Link } from 'react-router-dom';
import { getAllRequests } from '../../../../services/requests';

const image = User1


const Request = () => {

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
        <div className="request">
            <table>
                <tr className='label-row'>
                    <td>Name</td>
                    <td>Applied as</td>
                    <td>Membership</td>
                    <td>Status</td>
                    <td>Action</td>
                    <td></td>
                </tr>
                {!isLoading && data?.data?.result.map(({name, category, membership, status, image, _id: id, userId}, index) => {
                    return (
                        <tr className='content-row' key={index}>
                            <td>
                                <div className="img-name">
                                    <div className="img" style={{backgroundImage: `url(${userId?.image})`}}></div>
                                    <p className="name">{userId?.name}</p>
                                </div>
                            </td>
                            <td>{userId?.category}</td>
                            <td>{userId?.membership}</td>
                            <td><p className={status === "pending" ? "status pending" : "status assessing"}>{status}</p></td>
                            <td><i className="fas fa-ban"></i></td>
                            <td><Link style={{textDecoration: "none"}} to={{ pathname: '/dashboard/requests/view', query: { category: category, id: id} }}><p className="review">Review</p></Link></td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default Request;