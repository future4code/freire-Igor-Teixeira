import axios from "axios"
import {  useState,useEffect } from "react"
import { baseUrl,token } from "../constants/BaseUrl"



export const CreatePostVote = (id) => {
    const [vote,setVotes] = useState()
   
    // useEffect(()=>{
    const body = {
        direction: 1
    }
    axios.post(`${baseUrl}/posts/${id}/votes`,body,token)
    .then((res)=>{
        setVotes(res.data)
        console.log(res.data)
    }).catch((err)=>{
        alert(err)
        console.log(err.response.data)
    })
    
    return vote
// })
}