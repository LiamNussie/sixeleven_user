import "./profile.scss";
import Pp from "./pp.svg";
import { useEffect, useState } from "react";
import History from "./history/history";
import Education from "./education/education";
import Skills from "./skills/skills";
import { Link } from "react-router-dom";
import Contact from "./contact/contact";
import axios from "axios";
import baseUrl from "../../../config";
import { useSelector } from "react-redux";
import Education2 from "./education2/education2";
import Header from "./header/header";
import Modal from "./customModal/customModal";

const Profile = () => {

    const [page, setPage] = useState('history');
    const [showModal, setShowModal] = useState(false)
    const currentUser = useSelector(({userData}) => userData.currentUser)
    const {name, request, image, gender, dateOfBirth, phoneNo, email, category, stateOfResidence, localGovt, address} = currentUser
    
    useEffect(() => {
      // window.location.reload()
    })
    
  return (
    <div className="profilel">
      {/* <Link to={{ pathname: '/dashboard/requests/view', query: { category: data?.userId.category, id: data?._id} }} style={{textDecoration: "none"}}><p className="back"><i className="fas fa-arrow-left"></i>back</p></Link><br />
      <div className="top">
        <p className="dir">
          Requests for Aid
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L7 7L1 13"
              stroke="#AAC5CC"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </p>
        <span>{data?.userId?.name}’s Profile</span>
      </div> */}
      <Header />
      <div className="cont">
      <div className="boxes">
        <div className="lefti">
          <ul className="nav">
                <li onClick={() => setPage("history")} className={page === "history" ? "active" : null}>Requests History</li>
                <li onClick={() => setPage("education")} className={page === "education" ? "active" : null}>Education</li>
                <li onClick={() => setPage("skills")} className={page === "skills" ? "active" : null}>Skills & Certifications</li>
                <li onClick={() => setPage("contact")} className={page === "contact" ? "active" : null}>Contact Persons</li>
          </ul>
          {page === "history" && <History />}
          {category === "widow" && page === "education" && <Education2 />}
          {category === "street hawker" && page === "education" && <Education />}
          {page === "skills" && <Skills />}
          {page === "contact" && <Contact />}
        </div>
        <div className="righti">
          <div className="img" style={{ backgroundImage: `url(${image})` }}></div>
          <div className="bio">
            <p className="title">Bio-Data</p>
            <div className="pt">
              <span className="label">Full Name:</span>
              <span className="val valx">{name}</span>
            </div>
            <div className="pt">
              <span className="label">Gender:</span>
              <span className="val">{gender}</span>
            </div>
            <div className="pt">
              <span className="label">D.O.B:</span>
              <span className="val">{dateOfBirth}</span>
            </div>
          </div>
          <div className="contact">
            <p className="title">Contact</p>
            <div className="pt">
              <span className="label">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.33333 1.6665H5L6.33333 4.99984L4.66667 5.99984C5.38064 7.44752 6.55231 8.6192 8 9.33317L9 7.6665L12.3333 8.99984V11.6665C12.3333 12.0201 12.1929 12.3593 11.9428 12.6093C11.6928 12.8594 11.3536 12.9998 11 12.9998C8.39951 12.8418 5.94677 11.7375 4.10455 9.89528C2.26234 8.05307 1.15803 5.60033 1 2.99984C1 2.64622 1.14048 2.30708 1.39052 2.05703C1.64057 1.80698 1.97971 1.6665 2.33333 1.6665"
                    stroke="#828282"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span className="val">{phoneNo}</span>
            </div>
            <div className="pt">
              <span className="label">
                <svg
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.6667 1.3335H2.33333C1.59695 1.3335 1 1.93045 1 2.66683V9.3335C1 10.0699 1.59695 10.6668 2.33333 10.6668H11.6667C12.403 10.6668 13 10.0699 13 9.3335V2.66683C13 1.93045 12.403 1.3335 11.6667 1.3335Z"
                    stroke="#828282"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 2.66699L7 6.66699L13 2.66699"
                    stroke="#414042"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span className="val">{email}</span>
            </div>
          </div>
          <div className="res">
            <p className="title">Residential Information</p>
            <div className="pt">
              <span className="label">State of Residence:</span>
              <span className="val">{stateOfResidence}</span>
            </div>
            <div className="pt">
              <span className="label">L.G.A:</span>
              <span className="val">{localGovt}</span>
            </div>
            <div className="pt">
              <span className="label">Address:</span>
              <span className="val">{address}</span>
            </div>
            <div className="pt">
              <span className="label"></span>
              <span className="val"></span>
            </div>
          </div>
        </div>
      </div>
      </div>

     
    </div>
  );
};

export default Profile;
