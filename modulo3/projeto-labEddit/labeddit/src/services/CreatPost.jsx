import React, { useEffect } from "react";
import axios from 'axios'
import { baseUrl, token } from "../constants/BaseUrl";


export const CreatePost = (form ,clear) =>{
    axios.post(`${baseUrl}/posts`,form,token)
    .then((res)=>{
        console.log(res.data)
        alert("post criado com sucesso")
        clear()
    })
    .catch((err)=>{
        alert(err.response.data.message)
    })
}


export const CreateComment = (form,id,clear) =>{
    
    console.log(id)
    axios.post(`${baseUrl}/posts/${id}/comments`,form,token)
    .then((res)=>{
        alert(res.data)
        clear()
    }).catch((err)=>{
        alert(err.response.data.message)
    })


}