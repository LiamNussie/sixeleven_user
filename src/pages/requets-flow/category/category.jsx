import './category.scss'; 
import { Link } from 'react-router-dom';
import WebHeader from '../../../components/webHeader/webHeader';
import states from '../../../utils/states';
import { useState } from 'react';
import states2 from '../../../utils/statelga';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Category = (props) => {

    const history = useHistory();
    const [category, setCategory] = useState();

    
    const data = props?.location?.state?.data
    console.log(data)
    data.category = category
    
      const handleSubmit = (e) => {
          e.preventDefault();
          history.push("/request-aid/category/create", {data: data})
      }
    
    return (
        <div className="request-aid">
            <WebHeader />

            <div className="cont">
                <Link to="/request-aid" style={{textDecoration: "none"}}><p className="back"><i className="fas fa-arrow-left"></i>Back</p></Link>
                <div className="flexo">
                    <div className="left">
                        <div className="img"></div>
                    </div>
                    <div className="right">
                        <p style={{fontSize: "1.4rem"}} className="title">What category do you fall under?</p>
                        <form onSubmit={handleSubmit}>  
                            <div className="input">
                                <label>Choose a category <span style={{color: "crimson"}}>*</span></label><br />
                                <select onChange={e => setCategory(e.target.value)}>
                                    <option selected disabled>Select</option>
                                    <option value="widow">Widow</option>
                                    <option value="street hawker">Street Hawker</option>
                                </select>
                            </div>
                             <button type='submit'>NEXT</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category;