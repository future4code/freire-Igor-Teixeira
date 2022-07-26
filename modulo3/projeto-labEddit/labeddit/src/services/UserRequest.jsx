import axios from "axios"
import { baseUrl } from "../constants/BaseUrl"
import { goToFeed } from "../routes/Coordinator"



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
    axios.post(`${baseUrl}/users/login`,form)
    .then((res)=>{
        localStorage.setItem("token",res.data.token)
        console.log("deu certo",res.data)
        clear()
        goToFeed(navigate)
    }).catch((err)=>{
        alert(err)
    })

}

