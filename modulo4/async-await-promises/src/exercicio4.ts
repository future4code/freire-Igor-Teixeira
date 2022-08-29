import axios from "axios"
import {baseUrl} from "./baseUrl"

type New = {
    title:string
    content:string
    date:number
}

const notice: New = {
    title: "Crime em araxá",
    content:"crime am araxá ! casal morto reconheceu bandido",
    date:Date.now()
}


const newNotice = async (notice:New) :Promise<void>=>{
    return await axios.put(`${baseUrl}/news`,notice)

}

const main = async(): Promise<void> =>{
    try{
        newNotice(notice)
    }catch (err:any){
        console.log(err.response.data || err.message)
    }
}
console.log(main())