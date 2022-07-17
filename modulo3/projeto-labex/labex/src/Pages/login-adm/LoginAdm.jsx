import axios from "axios";
import React from "react";
import {Container,Button} from './styled'
import {url_base} from "../../Constants/URL_BASE"
import {goBack} from "../../routes/Coordinator"
import { useNavigate} from "react-router";
import { useForm } from "../../Components/hoocks/useForm";
import { useProtectPage } from "../../Components/hoocks/useProtectPage";
import TextField from "@material-ui/core/TextField";
import { Background } from "../../Components/background/Background";
import { BiLogIn } from "react-icons/bi";
import { TbArrowBackUp } from "react-icons/tb";

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
        <Background>
        <Container>
            <h1>Login administrador</h1>
            <form onSubmit={login}>
            <TextField id="outlined-basic"  label="Email" variant="outlined"
             type="email" 
            onChange={onChange}
            placeholder={"Email"}
            value={form.email}
            name={"email"} />

            <TextField   id="outlined-basic"  label="Senha" variant="outlined"
            type="password" 
            onChange={onChange} 
            placeholder={"senha"}
            value={form.password}
            name={"password"}/>
            <Button>
                <button onClick={()=>{goBack(navigate)}}>voltar <TbArrowBackUp/> </button>
                <button>logar<BiLogIn /></button>
            </Button>
            </form>
        </Container>
        </Background>
    )
}