import axios from "axios";
import baseUrl from "../config";

const config = {
    headers: {
       "Authorization": `Bearer ${localStorage.SIXELEVEN_TOKEN}`
       }
}

export async function getAllPostedJobs() {
    return axios.get(`${baseUrl}/admin/job/all`, config)
}