import { useState } from "react";
import states2 from "../../../../utils/statelga";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./streetHawker.scss";
import axios from "axios";
import baseUrl from "../../../../config";
import { toast } from "react-toastify";

const StreetHawker = ({ data }) => {
  console.log(data);

  const [name, setName] = useState("");
  const [edu, setEdu] = useState("");
  const [schLast, setSchLast] = useState("");
  const [phone, setPhone] = useState("");
  const [cert, setCert] = useState("temp.pdf");
  const [reason, setReason] = useState("");
  const [refTitle, setRefTitle] = useState("");
  const [refRel, setRefRel] = useState("");
  const [skill, setSkill] = useState("");
  const [refEmail, setRefEmail] = useState("");
  const [guardian, setGuardian] = useState("");
  const [guardianNo, setGuardianNo] = useState("");
  const [cLevel, setCLevel] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  data.educationLevel = edu;
  data.guardian = guardian;
  data.guardianNo = guardianNo;
  data.dateInSch = schLast;
  data.classLevel = cLevel;
  data.schResult = cert;
  data.reasonForAid = reason;
  data.refereeName = name;
  data.refereeTitle = refTitle;
  data.refereeRelationship = refRel;
  data.refereeNo = phone;

  const datam = data;
  const image = data.image;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(datam);

    const datamy = new FormData();
    datamy.append("file", image);
    datamy.append("upload_preset", "unopkl6y");
    datamy.append("cloud_name", "sixeleven");
    setLoading(true);

    try {
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/sixeleven/image/upload`,
        datamy
      );
      console.log(res);

      datam.image = res?.data?.url;

      try {
        const res = await axios.post(
          `${baseUrl}/user/register/street-hawker`,
          datam
        );
        console.log(res);
        setLoading(false);
        toast.success(res?.data?.message);
        history.push("/");
      } catch (error) {
        console.log(error?.response?.data);
        toast.error(error?.response?.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error?.response?.data?.message);
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="street">
      <div className="cont">
        <Link
          to={{ pathname: "/request-aid/category", state: { data: data } }}
          style={{ textDecoration: "none" }}
        >
          <p className="back">
            <i className="fas fa-arrow-left"></i>Back
          </p>
        </Link>
        <div className="flexo">
          <div className="left">
            <div className="img"></div>
          </div>
          <div className="right">
            <p className="title">Street Hawker's Profile</p>
            <p className="para">
              Hi there. Please provide these additional information below to
              create a profile with us
            </p>
            <form onSubmit={handleSubmit}>
              <div className="input">
                <label>
                  Parent/Guardian <span style={{ color: "crimson" }}>*</span>
                </label>
                <br />
                <input
                  onChange={(e) => setGuardian(e.target.value)}
                  placeholder="guardian’s full name"
                  type="text"
                />
              </div>
              <div className="input">
                <label>
                  Parent/Guardian’s Phone Number{" "}
                  <span style={{ color: "crimson" }}>*</span>
                </label>
                <br />
                <input
                  minLength={11}
                  maxLength={11}
                  onChange={(e) => setGuardianNo(e.target.value)}
                  type="tel"
                  placeholder="guardians's phone number"
                />
              </div>
              <div className="input">
                <label>
                  Your highest level of education{" "}
                  <span style={{ color: "crimson" }}>*</span>
                </label>
                <br />
                <select onChange={(e) => setEdu(e.target.value)}>
                  <option selected disabled>
                    Select
                  </option>
                  <option value="no education">No Education</option>
                  <option value="primary school">Primary School</option>
                  <option value="secondary school">Secondary School</option>
                  <option value="hnd">HND</option>
                  <option value="undergraduate">Undergraduate</option>
                  <option value="bachelors">Bachelor's</option>
                  <option value="masters">Master's</option>
                </select>
              </div>
              <div className="input">
                <label>
                  Highest class level attended{" "}
                  <span style={{ color: "crimson" }}>*</span>
                </label>
                <br />
                <input
                  type="text"
                  onChange={(e) => setCLevel(e.target.value)}
                />
                {/* <select onChange={e => setEdu(e.target.value)}>
                                    <option selected disabled>Select</option>
                                    <option value="ssce">SSCE</option>
                                    <option value="hnd">HND</option>
                                    <option value="undergraduate">Undergraduate</option>
                                    <option value="bachelors">Bachelor's</option>
                                    <option value="masters">Master's</option>
                                </select> */}
              </div>
              <div className="input">
                <label>
                  When last were you in school?{" "}
                  <span style={{ color: "crimson" }}>*</span>
                </label>
                <br />
                <input
                  onChange={(e) => setSchLast(e.target.value)}
                  type="date"
                />
              </div>
              {/* <div className="input">
                                <label>Any skills you have (vocational/professional) <span style={{color: "crimson"}}>*</span></label><br />
                                <input onChange={e => setSkill(e.target.value)} type="text" />
                            </div> */}
              <div className="input">
                <label>
                  Upload your last result{" "}
                  <span style={{ color: "crimson" }}>*</span>
                </label>
                <br />
                <input type="file" />
              </div>
              <div className="input">
                <label>
                  Why do you need this aid?{" "}
                  <span style={{ color: "crimson" }}>*</span>
                </label>
                <br />
                <textarea
                  onChange={(e) => setReason(e.target.value)}
                  cols="30"
                  rows="5"
                  placeholder="tell us why you need help "
                ></textarea>
              </div>
              <div className="input">
                <label>
                  Referee <span style={{ color: "crimson" }}>*</span>
                </label>
                <br />
                <input
                  onChange={(e) => setName(e.target.value)}
                  placeholder="referee’s full name"
                  type="text"
                />
              </div>
              <div className="input">
                <label>
                  Referee’s Title <span style={{ color: "crimson" }}>*</span>
                </label>
                <br />
                <select onChange={(e) => setRefTitle(e.target.value)}>
                  <option selected disabled>
                    Select
                  </option>
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Miss">Miss</option>
                </select>
              </div>
              <div className="input">
                <label>
                  Relationship with referee{" "}
                  <span style={{ color: "crimson" }}>*</span>
                </label>
                <br />
                <select onChange={(e) => setRefRel(e.target.value)}>
                  <option selected disabled>
                    Select
                  </option>
                  <option value="parent">Parent</option>
                  <option value="sibling">Sibling</option>
                  <option value="colleague">Colleague</option>
                  <option value="friend">Friend</option>
                </select>
              </div>
              <div className="input">
                <label>
                  Referee’s Phone Number{" "}
                  <span style={{ color: "crimson" }}>*</span>
                </label>
                <br />
                <input
                  minLength={11}
                  maxLength={11}
                  onChange={(e) => setPhone(e.target.value)}
                  type="tel"
                  placeholder="referee's phone number"
                />
              </div>
              <div className="input">
                <label>Referee’s Email</label>
                <br />
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  type="email"
                  placeholder="referee's email"
                />
              </div>

              <button type="submit">{loading ? "CREATING.." : "SUBMIT"}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreetHawker;
