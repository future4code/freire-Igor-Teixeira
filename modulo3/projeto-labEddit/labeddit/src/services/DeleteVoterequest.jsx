import { baseUrl, token } from "../constants/BaseUrl"
import axios from 'axios'


export const DeletePostVote = (id) => {
    axios.delete(`${baseUrl}/posts/${id}/votes`,token)
    .then()
    .catch((err)=> alert(err,"Infelizmente tivemos um problema"))
}


export const DeleteCommentVote = (id) => {
    axios.delete(`${baseUrl}/comments/${id}/votes`,token)
    .then()
    .catch((err)=> alert(err,"Infelizmente tivemos um problema"))
}