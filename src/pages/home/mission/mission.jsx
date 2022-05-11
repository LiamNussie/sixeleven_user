import "./mission.scss";
import { Link } from "react-router-dom";

const Mission = () => {
  return (
    <div className="mission">
      <div className="title">
        <h3 className="title-txt">Our Mission</h3>
      </div>
      <div className="flex1">
        <div className="leftm"></div>
        <div className="rightm">
          <div className="content">
            <p className="head">Street hawkers</p>
            <p className="para">
              Our aim is to take as many as possible street hawkers back to
              school. Every child deserves at least high school level of
              education. At SEEF, this is our minimum expectation. We are
              determined to support any willing child to higher institutions of
              learning.
            </p>
            <div className="btn">
              <Link to="donation">
                <button className="one">MAKE A DONATION</button>
              </Link>
              <Link to="/request-aid">
                <button className="two">REQUEST AID</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex2">
        <div className="leftm">
          <div className="content">
            <p className="head">Widow(er)s</p>
            <p className="para">
              Our mission is to ensure that our fathers and mothers who have
              lost their partners (and need support to live) do not lack basic
              needs of life. Empower those who can still do trade or business
              and provide monthly stipends to those too weak to trade.
            </p>
            <div className="btn">
              <Link to="donation">
                <button className="one">MAKE A DONATION</button>
              </Link>
              <Link to="/request-aid">
                <button className="two">REQUEST AID</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="rightm"></div>
      </div>
    </div>
  );
};

export default Mission;
