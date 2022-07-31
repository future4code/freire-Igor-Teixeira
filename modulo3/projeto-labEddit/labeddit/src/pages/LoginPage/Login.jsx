import React from "react";
import logo from "../../assets/logoo2.png"
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

            <Button type={"submit"} variant="contained" color="primary" style={{ background: 'linear-gradient(to right, #EC5F6F, #EF796D,#F2956C,#F5B166'}}>Login</Button>
             <Border />
            
            <Button onClick={()=>{goToSignUp(navigate)}}variant="outlined" color="primary" >Crie uma conta!</Button>
            </Form>
          
        </Container>
    )
}