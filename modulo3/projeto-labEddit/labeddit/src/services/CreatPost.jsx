import React from "react";
import axios from "axios";
import { baseUrl, token } from "../constants/BaseUrl";
import Swal from 'sweetalert2'




export const CreatePost = (form, clear) => {
  axios
    .post(`${baseUrl}/posts`, form, token)
    .then((res) => {
      Swal.fire({
        title: 'Post criado com sucesso',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
      
      clear();
    })
    .catch((err) => alert(err.response.data.message));
};

export const CreateComment = (form, id, clear) => {
  axios
    .post(`${baseUrl}/posts/${id}/comments`, form, token)
    .then((res) => {
      alert(res.data);
      clear();
    })
    .catch((err) => alert(err.response.data.message));
};
