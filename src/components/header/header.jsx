import './header.scss';
import Img from '../../assets/userimg.png';
import { useSelector } from 'react-redux';


const Header = () => {
    const currentUser = useSelector(({userData}) => userData.currentUser)
    const {name, image, jobTitle, role} = currentUser

    return (
        <div className="header">
            <div className="user">
                <div style={{backgroundImage: `url(${image})`}} className="img"></div>
                <div className="texts">
                    <p className="name">{name}</p>
                    <p className="role">{jobTitle} ({role})</p>
                </div>
            </div>
        </div>
    )
}

export default Header;