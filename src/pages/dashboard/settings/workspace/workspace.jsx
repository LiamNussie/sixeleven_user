import "./workspace.scss";
import { useSelector } from "react-redux";
import { useState } from "react";
import Logo from '../../../../assets/logo.svg';
import { toast } from "react-toastify";
import axios from "axios";
import baseUrl from "../../../../config";

const config = {
    headers: {
       "Authorization": `Bearer ${localStorage.SIXELEVEN_TOKEN}`
       }
}

const Workspace = () => {
    const currentUser = useSelector(({userData}) => userData.currentUser)
    const {name, image, organizationInfo} = currentUser
    const [loading, setLoading] = useState(false)
    const [orgName, setOrgName] = useState(organizationInfo?.orgName);
    const [imagex, setImagex] = useState("");

    const data = {
        orgName: "shxshd",
        orgLogo: "data:image/jpeg;base64,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"
    }


    const update = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const res = await axios.put(`${baseUrl}/admin/staff/update/${organizationInfo?._id}`, data, config)
            console.log(res?.data)
            toast.success(res?.data?.message)
            setLoading(false)
        } catch (error) {
            console.log(error?.response?.data?.message)
            toast.error(error?.response?.data?.message)
            setLoading(false)
        }
    }

    return (
        <div className="workspace">
           <form onSubmit={update}>
                <div className="input">
                    <label>Organization Name</label><br />
                    <input type="text" value={orgName} onChange={e => setOrgName(e.target.value)} />
                </div>
                <br />
                <br />
                <label>Organization Logo</label>
                <div className="imgx">
                    <img src={Logo} alt="sixeleven logo" />
                    <div className="inputx">
                        <div className="box">
                                <p>Click to select file</p>
                                <input onChange={e => setImagex(e.target.files[0])} className="picker" type="file" /><br />
                        </div>
                        <label>Update your organization logo here </label>
                    </div>
                </div>
                <br />
                <button type="submit">{loading ? "Saving.." : "Save"}</button>
           </form>
        </div>
    )
}

export default Workspace;