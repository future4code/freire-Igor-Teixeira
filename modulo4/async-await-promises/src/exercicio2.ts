import axios from "axios"
import {baseUrl} from "./baseUrl"

export const getSubscribers = async ():Promise<any[]> =>{
    const res = await axios.get(`${baseUrl}/subscriber`)
    return res.data
}


