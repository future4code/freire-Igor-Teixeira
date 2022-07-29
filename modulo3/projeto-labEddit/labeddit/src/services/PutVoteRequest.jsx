import axios from "axios"
import { baseUrl,token } from "../constants/BaseUrl"


const body = {
    direction: -1,
  }; 
export const ChangePostVote = (id) => {
    axios
    .put(`${baseUrl}/posts/${id}/votes`,body,token)
    .then((res) => console.log(res.data,"deu"))
    .catch((err) => alert(err.response.data.message))

}

export const ChangeCommentVote = (id) => {
    axios
    .put(`${baseUrl}/comments/${id}/votes`,body,token)
    .then((res) => console.log(res.data,"deu"))
    .catch((err) => alert(err.response))

}

