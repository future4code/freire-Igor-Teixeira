import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { baseUrl,token } from "../constants/BaseUrl";
import {GlobalStateContext} from '../Global/GlobalStateContext'



export const GetPost = () => {
    const[posts,setPosts] = useState([])
    useEffect(()=>{
    axios.get(`${baseUrl}/posts`,token).then((res)=>{
        setPosts(res.data)
        console.log("deu boa ",res.data);
        
    }).catch((err)=>{
        alert(err.reponse.data.message)
    })
},[])
   return posts 
}

export const GetPostComments = (id) => {
    const{setComment} = useContext(GlobalStateContext)
    useEffect(()=>{
    axios.get(`${baseUrl}/posts/${id}/comments`,token)
    .then((res)=>{
        console.log(res.data)
        setComment(res.data)
    }).catch((err)=>{
        alert(err.reponse.data.message)
    })
},[])

}