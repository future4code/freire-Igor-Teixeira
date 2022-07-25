import { Button } from "@material-ui/core";
import React from "react";
import logo from "../../assets/logo.png"
import TextField from '@material-ui/core/TextField';
import {Container,Form,Img ,Title,Border } from "./Styled"


export const LoginPage = () => {


    return(
        <Container>
            <Img src={logo} alt="" />
            <Title>
                <h1>LabEddit</h1>
                <p>o projeto de rede social</p>
            </Title>
            
            <Form action="">
            <TextField 
            id="outlined-basic" 
            label="Email" 
            variant="outlined" 
            type="email" />

            <TextField 
            id="outlined-basic" 
            label="Senha" 
            variant="outlined" 
            type="password" 
            name="" 
             />

            <Button variant="contained" color="primary" style={{ background: 'linear-gradient(to right, #FE5D5D, #FE6D6B,#FCAAA3),#FAC1B8'}}>Login</Button>
            <Border />
            
            <Button variant="outlined" color="secondary" >Crie uma conta!</Button>

            </Form>
            
        </Container>
    )
}