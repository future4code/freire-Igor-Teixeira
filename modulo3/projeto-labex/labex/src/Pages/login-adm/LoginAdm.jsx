import axios from "axios";
import React from "react";
import {url_base} from "../../Constants/URL_BASE"
import {goBack} from "../../routes/Coordinator"
import { useNavigate} from "react-router";
import { useForm } from "../../Components/hoocks/useForm";
import { useProtectPage } from "../../Components/hoocks/useProtectPage";

export const LoginAdm = () => {

    useProtectPage()
    const navigate = useNavigate() 
    const {form,onChange,cleanFields} = useForm({
        email:"",
        password:"",
    })

   
    const login = (event) => {
        event.preventDefault()
        const body ={
            email: form.email,
            password: form.password,
        }
        axios.post(`${url_base}/login`,body)
        .then((res)=>{
            localStorage.setItem('token', res.data.token)
            navigate("pageAdm")
            console.log("deu certo",res.data)
            cleanFields()
            
            
        }).catch((error)=>{
            alert(error,"por favor verifique se todos campos foram preenchidos")
            console.log("deu erro mane ")
        })
    }

    return (

        <div>
            <h1>login adm</h1>
            <form onSubmit={login}>
            <input
             type="email"
            onChange={onChange}
            placeholder={"Email"}
            value={form.email}
            name={"email"} />

            <input 
            type="password" 
            onChange={onChange} 
            placeholder={"senha"}
            value={form.password}
            name={"password"}/>
            <button onClick={()=>{goBack(navigate)}}>voltar</button>
            <button>logar</button>
            </form>
        </div>
    )
}