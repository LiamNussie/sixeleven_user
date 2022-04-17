import axios from "axios";
import baseUrl from "../config";

const config = {
    headers: {
       "Authorization": `Bearer ${localStorage.SIXELEVEN_TOKEN}`
       }
}

export async function getAllVolunteerApplications() {
    return axios.get(`${baseUrl}/admin/volunteer/all`, config)
}

