import axios from "axios"
import {baseUrl} from "./baseUrl"

// a - Endepoint Get
// b - Promise<any[]>

// c :  
async function getSubscribers (): Promise<any[]>{
    const result = await axios.get(`${baseUrl}/subscribers`)
    return result.data
  }