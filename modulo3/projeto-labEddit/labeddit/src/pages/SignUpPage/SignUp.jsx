// import { TextField,Button,Checkbox } from "@material-ui/core";
import React, { useState } from "react";
import {Form,Container,Check,Text} from "./Styled"
import { TextField,Button ,Switch,FormGroup,FormControlLabel} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {useForm} from '../../hoocks/UseForm'
import {SignUp} from '../../services/UserRequest'
 

export const SignUpPage = () => {

    const navigate = useNavigate()
    const [checked,setChecked] = useState()
    console.log(checked)
    const { form ,onChange,clear} = useForm({
        username:"",
        email:"",
        password:"",
    })

    const submit = (event) => {
        event.preventDefault()
        SignUp(form,clear,navigate)


    }
    const onChangeTermo = (event) =>{
        setChecked(event.target.checked)

    }

    return(
        <Container>
            <h2>Olá, boas vindas ao LabEddit </h2>
            <Form onSubmit={submit}>
                <TextField
                type="text"
                id="outlined-bas" 
                label="Nome" 
                variant="outlined"
                name={"username"}
                onChange={onChange}
                value={form.username}
                required />

                <TextField
                id="outlined-b" 
                label="Email" 
                variant="outlined" 
                type="email"
                name={"email"}
                onChange={onChange}
                value={form.email}
                required />

                <TextField
                type="password" 
                id="outlined" 
                label="Senha" 
                variant="outlined" 
                name={"password"}
                onChange={onChange}
                value={form.password}
                required/>
                <Text>
                    <p>Ao continuar, você concorda com o nosso Contrato de usuário e nossa Política de Privacidade</p>
                </Text>
                <Check>
                <FormGroup>
                    <FormControlLabel control={<Switch onChange={onChangeTermo} required/>} label="Eu concordo em receber emails sobre coisas legais no Labeddit" />
                </FormGroup>
                </Check>
                <Button type={"submit"}variant="contained" color="primary" style={{ background: 'linear-gradient(to right, #FE5D5D, #FE6D6B,#FCAAA3),#FAC1B8'}}>SignUp</Button>
           
            </Form>
        </Container>
    )
}