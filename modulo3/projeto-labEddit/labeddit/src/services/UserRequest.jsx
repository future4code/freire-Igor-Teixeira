import axios from "axios"
import { baseUrl } from "../constants/BaseUrl"
import { goToFeed } from "../routes/Coordinator"

console.log(window.localStorage)


 export const Login = (form,clear,navigate) => { 
    axios.post(`${baseUrl}/users/login`,form)
    .then((res)=>{
        localStorage.setItem("token", res.data.token)
        clear()
        goToFeed(navigate);
    }).catch((err)=>{
        alert(err)
    })

}

export const SignUp = (form,clear,navigate) => {
    axios.post(`${baseUrl}/users/signup`,form)
    .then((res)=>{
        localStorage.setItem("token",res.data.token)
        alert('cadastro realizado com sucesso')
        clear()
        goToFeed(navigate)
    }).catch((err)=>{
        alert(err.response.data.message)
    })

}

