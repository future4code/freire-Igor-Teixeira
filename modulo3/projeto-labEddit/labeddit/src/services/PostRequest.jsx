import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../constants/BaseUrl";



export const GetPost = () => {
    
    const[posts,setPosts] = useState([])
    useEffect(()=>{
    axios.get(`${baseUrl}/posts`,{
        headers:{
            Authorization:localStorage.getItem("token")
        }
    }).then((res)=>{
        setPosts(res.data)
        console.log("deu boa ",res.data)
    }).catch((err)=>{
        alert(err)
    })
},[])
   return posts 
}