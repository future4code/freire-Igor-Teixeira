import { TextField,Button,Checkbox } from "@material-ui/core";
import React from "react";
import {Form,Container,Check,Text} from "./Styled"


export const SignUpPage = () => {
    return(
        <Container>
            <h2>Olá, boas vindas ao LabEddit </h2>
            <Form action="">
                <TextField
                type="text"
                id="outlined-basic" 
                label="Nome" 
                variant="outlined" />

                <TextField
                type="email" 
                name=""
                id="outlined-basic" 
                label="Email" 
                variant="outlined"  />

                <TextField
                type="password" 
                name=""
                id="outlined-basic" 
                label="Senha" 
                variant="outlined" />
                <Text>
                    <p>Ao continuar, você concorda com o nosso Contrato de usuário e nossa Política de Privacidade</p>
                </Text>
                <Check>
                    <Checkbox checked={true}
                    onChange={''}/>
                    <p>Eu concordo em receber emails sobre coisas legais no Labeddit</p>
                </Check>
                <Button variant="contained" color="primary" style={{ background: 'linear-gradient(to right, #FE5D5D, #FE6D6B,#FCAAA3),#FAC1B8'}}>SignUp</Button>
           
            </Form>
        </Container>
    )
}