
import React from "react"
import {Container,Button,Img } from "./Styled"
import logo from '../../assets/logoH.png'

export const Header = () => {
    return(
        <Container>
            <Img src={logo} alt="" />
         <Button>Entrar</Button>
        </Container>

    )
}