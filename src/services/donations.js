import axios from "axios";
import baseUrl from "../config";

const config = {
    headers: {
       "Authorization": `Bearer ${localStorage.SIXELEVEN_TOKEN}`
       }
}

export async function getAllDonations() {
    return axios.get(`${baseUrl}/admin/donation/all`, config)
}
export async function getOneDonations(id) {
    return axios.get(`${baseUrl}/admin/donation/${id}`, config)
}

export async function getAllWidows() {
    return axios.get(`${baseUrl}/admin/donation/add-donor`, config)
}
