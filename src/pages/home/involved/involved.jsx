import "./involved.scss";
import { Link } from "react-router-dom";

const Involved = () => {
  return (
    <div className="involved">
      <div className="flexi">
        <div className="leftm">
          <div className="content">
            <p className="head">Get Involved</p>
            <p className="para">
              Your money, time and referrals will go a long way in supporting
              our vision. When you see someone in need, say something about SEEF
              to them and do something with your spare time, money and kind
              heart.
            </p>
            <div className="btn">
              <Link to="/donation">
                <button className="one">DONATE</button>
              </Link>
              <Link to="/volunteer">
                <button className="two">VOLUNTEER</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="rightm"></div>
      </div>
    </div>
  );
};

export default Involved;
