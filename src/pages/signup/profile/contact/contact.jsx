import './contact.scss';
import { useSelector } from 'react-redux';

const Contact = () => {
    const currentUser = useSelector(({userData}) => userData.currentUser)
    const {refereeNo, refereeRelationship, refereeName, category, guardian, guardianNo, streetHawkerInfo} = currentUser
    return (
        <div className="contactx">
           {category === "street hawker" ?
           <div className="first">
                <div className="pt">
                    <p className="label">Parent/Guardian</p>
                    <div className="pts">
                        <p className='labelx'>Name: <span className='val'>{streetHawkerInfo?.guardian}</span></p>
                    </div>
                    <div className="pts">
                        <p className='labelx'>Phone no: <span className='val'>{streetHawkerInfo?.guardianNo}</span></p>
                    </div>
                </div>
            </div>
            :
            <div className="first">
                <div className="pt">
                    <p className="label">Referee(s)</p>
                    <div className="pts">
                        <p className='labelx'>Name: <span className='val'>{refereeName}</span></p>
                    </div>
                    <div className="pts">
                        <p className='labelx'>Phone no: <span className='val'>{refereeNo}</span></p>
                    </div>
                    <div className="pts">
                        <p className='labelx'>Relationship: <span className='val'>{refereeRelationship}</span></p>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Contact