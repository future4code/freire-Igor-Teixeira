import axios from "axios";
import React, { useState } from "react";
import {url_base} from "../../Constants/URL_BASE"
import {goBack,goToAboutPage} from "../../routes/Coordinator"
import { useNavigate } from "react-router";

export const LoginAdm = () => {
    const navigate = useNavigate() 
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onchangeEmail = (e) =>{
        setEmail(e.target.value)
    }
    
    const onChangePassword = (e) =>{
        setPassword(e.target.value)
    }

    const login = () => {
        const body ={
            email: email,
            password: password,
        }
        axios.post(`${url_base}/login`,body)
        .then((res)=>{
            localStorage.setItem('token', res.data.token)
            goToAboutPage(navigate("/pageAdm"))
            console.log("deu certo",res.data)
            
        }).catch((error)=>{
            alert(error,"por favor verifique se todos campos foram preenchidos")
            console.log("deu erro mane ")
        })
    }

    return (

        <div>
            <h1>login adm</h1>
            <input type="email"
            onChange={onchangeEmail}
            placeholder={"Email"}
            value={email} />

            <input type="password" 
            onChange={onChangePassword} 
            placeholder={"senha"}
            value={password}/>
            <button onClick={()=>{goBack(navigate)}}>voltar</button>
            <button onClick={login}>logar</button>

        </div>
    )
}