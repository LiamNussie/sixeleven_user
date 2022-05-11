import "./sec.scss";
import { Link } from "react-router-dom";

const Sec = () => {
  return (
    <div className="sec">
      <div className="flex1">
        <div className="leftm"></div>
        <div className="rightm">
          <div className="content">
            <p className="headx">MAKE A DONATION</p>
            <p className="para">
              Your money can reach far and near, especially where you cannot go
              physically. The more we educate the young ones, the less we have
              social vices and crimes in our society. Support our vision, let’s
              do it together. <br />
              “it more rewarding to give than to receive”
            </p>
            <div className="btn">
              <Link to="/donation">
                <button className="one">DONATE</button>
              </Link>
              {/* <button className='two'>REQUEST AID</button> */}
            </div>
          </div>
        </div>
      </div>
      <div className="flex2">
        <div className="leftm">
          <div className="content">
            <p className="headx">BECOME A VOLUNTEER</p>
            <p className="para">
              With or without money, help propagate the goodwill message of
              helping others. Refer someone in need to apply. Join us for the
              street-to-street campaign, like and share our posts on social
              media.
            </p>
            <div className="btn">
              {/* <button className='one'>MAKE A DONATION</button> */}
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

export default Sec;
