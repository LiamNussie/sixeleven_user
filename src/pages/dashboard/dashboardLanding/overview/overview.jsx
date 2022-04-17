import './overview.scss';
import Group from '../../../../assets/Group.svg';
import Sponsor from '../../../../assets/sponsor.svg';
import Cash2 from '../../../../assets/cash2.svg';
import {useQuery} from 'react-query';
import { getAllHawkers, getAllUsers, getAllWidows } from '../../../../services/overview';




const Overview = () => {

    const {data, isLoading, error} = useQuery("get all users", getAllUsers)
    if(isLoading) {
        console.log('users data is loading')
    }else if(data) {
        console.log('users', data)
    } else {
        console.log(error)
    }


    const datay = [
        {
            label: "Total Applicants",
            icon: Group,
            val: data?.data?.result?.length
        },
        {
            label: "Total Sponsors",
            icon: Sponsor,
            val: 17
        },
        {
            label: "Total Amount Donated",
            icon: Cash2,
            val: "₦3,700,150"
        },
    ]

    return (
        <div className="overview">
            {datay.map(({label, icon, val}, index) => {
                return (
                    <div className="boxi" key={index}>
                        <img src={icon} alt="icon" />
                        {!isLoading && <p className="val">{val.toLocaleString()}</p>}
                        <p className="label">{label}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Overview;