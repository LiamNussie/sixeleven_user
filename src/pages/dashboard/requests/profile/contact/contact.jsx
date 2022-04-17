import './contact.scss';

const Contact = ({data}) => {
    return (
        <div className="contactx">
           { data?.userId.category === "streetHawker" ?
           <div className="first">
                <div className="pt">
                    <p className="label">Parent/Guardian</p>
                    <div className="pts">
                        <p className='labelx'>Name: <span className='val'>{data?.userId?.guardian}</span></p>
                    </div>
                    <div className="pts">
                        <p className='labelx'>Phone no: <span className='val'>{data?.userId?.guardianNo}</span></p>
                    </div>
                </div>
            </div>
            :
            <div className="first">
                <div className="pt">
                    <p className="label">Referee(s)</p>
                    <div className="pts">
                        <p className='labelx'>Name: <span className='val'>{data?.userId?.refereeName}</span></p>
                    </div>
                    <div className="pts">
                        <p className='labelx'>Phone no: <span className='val'>{data?.userId?.refereeNo}</span></p>
                    </div>
                    <div className="pts">
                        <p className='labelx'>Relationship: <span className='val'>{data?.userId?.refereeRelationship}</span></p>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Contact