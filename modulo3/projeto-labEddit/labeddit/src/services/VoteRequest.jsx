import axios from "axios";
import { baseUrl, token } from "../constants/BaseUrl";
import {GetPostComments,GetPost} from "./PostRequest"

const body = {
    direction: 1,
  };
export const CreatePostVote = (id) => {
  axios
    .post(`${baseUrl}/posts/${id}/votes`, body, token)
    .then()
    .catch((err) => alert(err.response.data.message));
};

export const CreateCommentVote = (id) => {
    axios.post(`${baseUrl}/comments/${id}/votes`,body , token)
    .then()
    .catch((err) => alert(err.response.data.message))
};


