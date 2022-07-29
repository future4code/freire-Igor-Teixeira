import React from "react";
import logo from "../../assets/logo.png"
import { TextField,Button } from "@mui/material";
import {Container,Form,Img ,Title,Border } from "./Styled"
import {Login} from '../../services/UserRequest'
import {useNavigate} from "react-router-dom"
import {useForm} from '../../hoocks/UseForm'
import { goToSignUp } from "../../routes/Coordinator";
import {useUnProtectedPage} from '../../hoocks/UseUnProtected'


export const LoginPage = () => {
    useUnProtectedPage()
    const navigate = useNavigate()
    const { form ,onChange,clear} = useForm({
        email:"",
        password:"",
    })

    const submit = (event) => {
        event.preventDefault()
        Login(form,clear,navigate)
    }

    return(
        <Container>
            <Img src={logo} alt="" />
            <Title>
                <h1>LabEddit</h1>
                <p>o projeto de rede social</p>
            </Title>
            
            <Form onSubmit={submit}>
            <TextField 
            id="outlined-basic" 
            label="Email" 
            variant="outlined" 
            type="email"
            name={"email"}
            onChange={onChange}
            value={form.email}
            required
             />

            <TextField 
            id="outlined-basic" 
            label="Senha" 
            variant="outlined" 
            type="password" 
            name={"password"}
            onChange={onChange}
            value={form.password} 
            required
             />

            <Button type={"submit"} variant="contained" color="primary" style={{ background: 'linear-gradient(to right, #FE5D5D, #FE6D6B,#FCAAA3),#FAC1B8'}}>Login</Button>
            <Border />
            
            <Button onClick={()=>{goToSignUp(navigate)}}variant="outlined" color="secondary" >Crie uma conta!</Button>
            </Form>
          
        </Container>
    )
}