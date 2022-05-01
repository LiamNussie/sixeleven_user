import WebHeader from "../../../components/webHeader/webHeader";
import "./apply.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import baseUrl from "../../../config";

const Apply = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [portfolioUrl, setPortfolioUrl] = useState("");
  const [loading, setLoading] = useState("");

  const id = props.location.id;

  

  const applyx = async (e) => {
    e.preventDefault();
    setLoading(true);

    const datamy = new FormData();
    datamy.append("file", resume);
    datamy.append("upload_preset", "unopkl6y");
    datamy.append("cloud_name", "sixeleven");

    try {
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/sixeleven/image/upload`,
        datamy
      );
      console.log(res);

      const data = {
        name,
        email,
        resume: res?.data?.url,
        phoneNo,
        coverLetter,
        portfolioUrl,
      };

      try {
        const res = await axios.post(`${baseUrl}/candidate/apply/${id}`, data);
        console.log(res);
        toast.success(res?.data?.message)
        setName("")
        setPhoneNo("")
        setEmail("")
        setResume("")
        setCoverLetter("")
        setPortfolioUrl("")
        setLoading(false);
      } catch (error) {
        console.log(error?.response?.data?.message);
        toast.error(error?.response?.data?.message);
        setLoading(false);
      }
    } catch (error) {
      console.log(error?.response?.data?.message);
      toast.error(error?.response?.data?.message);
      setLoading(false);
    }
  };

  return (
    <div className="apply">
      <WebHeader />
      <div className="content">
        <Link to="/career" style={{ textDecoration: "none" }}>
          <p className="back">
            <i className="fas fa-arrow-left"></i>Back to Role
          </p>
        </Link>
        <div className="sect">
          <div className="titleo">
            <h3 className="title-txtxt">Job Application</h3>
          </div>
          <p className="jtitle">Content Manager</p>
          <p className="para">
            To apply for this role, fill in your infomation in the form below
          </p>
          <form onSubmit={applyx}>
            <div className="input">
              <label>
                Name <span style={{ color: "crimson" }}>*</span>
              </label>
              <br />
              <input  value={name} onChange={e => setName(e.target.value)} type="text" />
            </div>
            <div className="input">
              <label>
                Phone Number <span style={{ color: "crimson" }}>*</span>
              </label>
              <br />
              <input value={phoneNo} minLength={11} maxLength={11} onChange={e => setPhoneNo(e.target.value)} type="tel" />
            </div>
            <div className="input">
              <label>
                Email <span style={{ color: "crimson" }}>*</span>
              </label>
              <br />
              <input value={email} onChange={e => setEmail(e.target.value)} type="email" />
            </div>
            <div className="input">
              <label>
                Upload CV <span style={{ color: "crimson" }}>*</span>
              </label>
              <br />
              <input onChange={e => setResume(e.target.files[0])} type="file" />
            </div>
            <div className="input">
              <label>
                Cover Letter <span style={{ color: "crimson" }}>*</span>
              </label>
              <br />
              <textarea
                placeholder="Tell us why you’re a fit for this role in less than 400 words"
                name=""
                id=""
                cols="30"
                rows="5"
                value={coverLetter}
                onChange={e => setCoverLetter(e.target.value)}
              ></textarea>
            </div>
            <div className="input">
              <label>Website/Portfolio Link</label>
              <br />
              <input value={portfolioUrl} onChange={e => setPortfolioUrl(e.target.value)} placeholder="url" type="text" />
            </div>
            <button>{loading ? "SUBMITTING.." : "SUBMIT APPLICATION"}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Apply;
