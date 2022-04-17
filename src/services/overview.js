import axios from "axios";
import baseUrl from "../config";

const config = {
    headers: {
       "Authorization": `Bearer ${localStorage.SIXELEVEN_TOKEN}`
       }
}

export async function getAllHawkers() {
    return axios.get(`${baseUrl}/streethawker/all`, config)
}

export async function getAllWidows() {
    return axios.get(`${baseUrl}/widow/all`, config)
}

export async function getAllUsers() {
    return axios.get(`${baseUrl}/user/all`, config)
}

