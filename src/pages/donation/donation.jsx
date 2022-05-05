import WebHeader from '../../components/webHeader/webHeader';
import './donation.scss';
import { Link } from 'react-router-dom';
import Payment from '../../components/payment/payment';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { getAllEvents } from '../../services/events';

const Donation = () => {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [category, setCategory] = useState("");
    const [event, setEvent] = useState("");
    const [amount, setAmount] = useState("");

    const {data, isLoading, error} = useQuery("get all events", getAllEvents)
    if(isLoading) {
        console.log('events is loading')
    }else if(data) {
        console.log('events', data)
    } else {
        console.log(error)
    }

    const datax = {
        name,
        email,
        phone,
        category,
        event,
        amount
    }


    const handle = (e) => {
        e.preventDefault();
    }

    return (
        <div className="donation">
            <WebHeader />
            <div className="cont">
                <Link to="/home" style={{textDecoration: "none"}}><p className="back"><i className="fas fa-arrow-left"></i>Back</p></Link>
                <div className="flexo">
                    <div className="left">
                        <div className="img"></div>
                    </div>
                    <div className="right">
                        <p className="title">Make a Donation</p>
                        <p className="para">Thank you for deciding to donate to this cause. Every donation, no matter how small, goes a long way in helping out. Please fill out the form below.</p>
                        <form onSubmit={handle}>    
                            <div className="input">
                                <label>Name <span style={{color: "crimson"}}>*</span></label><br />
                                <input onChange={e => setName(e.target.value)} placeholder='full name' type="text" />
                            </div>
                            <div className="input">
                                <label>Phone Number <span style={{color: "crimson"}}>*</span></label><br />
                                <input minLength={11} maxLength={11} onChange={e => setPhone(e.target.value)} placeholder='phone' type="tel" />
                            </div>
                            <div className="input">
                                <label>Email <span style={{color: "crimson"}}>*</span></label><br />
                                <input onChange={e => setEmail(e.target.value)} placeholder='email address' type="email" />
                            </div>
                            <div className="input">
                                <label>Which applies to you? <span style={{color: "crimson"}}>*</span></label><br />
                                <select onChange={e => setCategory(e.target.value)}>
                                    <option selected disabled>Select</option>
                                    <option value="individual">I am an Individual</option>
                                    <option value="organization">I am an Organization</option>
                                </select>
                            </div>
                            
                            <div className="input">
                                <label>Choose event to donate to <span style={{color: "crimson"}}>*</span></label><br />
                                <select onChange={e => setEvent(e.target.value)}>
                                    <option selected disabled>Select event</option>
                                    {!isLoading && 
                                    data?.data?.result.map(({name}, index) => {
                                        return (
                                            <option value={name}>{name}</option>
                                        )
                                    })
                                    }
                                </select>
                            </div>
                           
                            <div className="input">
                                <label>How much do you want to donate? <span style={{color: "crimson"}}>*</span></label><br />
                                <input onChange={e => setAmount(e.target.value)} type="tel" />
                            </div>
                            
                             <Payment data={datax} />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Donation;