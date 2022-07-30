import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { baseUrl,token } from "../constants/BaseUrl";
import {GlobalStateContext} from '../Global/GlobalStateContext'


export const GetPost = () => {
    const[posts,setPosts] = useState([])
    const {setLoader,page} = useContext(GlobalStateContext)
    useEffect(()=>{
    axios.get(`${baseUrl}/posts?page=${page}`,token).then((res)=>{
        setPosts(res.data)
        setLoader(true)
    }).catch((err)=> alert(err.reponse.data.message))
},[page])
   return posts 
}

export const GetPostComments = (id) => {
    const{comment,setComment,setLoader} = useContext(GlobalStateContext)
    useEffect(()=>{
    axios.get(`${baseUrl}/posts/${id}/comments`,token)
    .then((res)=>{
        setComment(res.data)
        setLoader(true)
    }).catch((err)=> alert(err.reponse.data.message))
},[comment])

}