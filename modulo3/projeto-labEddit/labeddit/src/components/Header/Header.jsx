import React from "react"
import {Container,Img } from "./Styled"
import logo from '../../assets/log0.png'
import { goToLogin } from "../../routes/Coordinator"
import {useLocation, useNavigate} from 'react-router-dom'
import { Button } from "@mui/material"

export const Header = () => {
    let location = useLocation()
    const token = localStorage.getItem("token")
    const navigate = useNavigate()

    const logout = () => {
        localStorage.clear("token")
        goToLogin(navigate)
    }
    if(location.pathname === "/"){
        return null
    }else{
    return(
        <Container>
            <Img src={logo} alt="" />
        {token ? <Button color={"secondary"}  onClick={()=>{logout()}}>logout</Button> : <Button color={"secondary"} onClick={()=>{goToLogin(navigate)}} >Login</Button>}
        </Container>

    )
        }
}