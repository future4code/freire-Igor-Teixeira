import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHome,goToLogin,goToTrips } from "../../routes/Coordinator";
import {Container} from "./styled"


export const Header = () => {
    const navigate = useNavigate();
   
   
    return (
        <Container>
           <button onClick={()=>{goToTrips(navigate)}}>viajens</button>
           <button onClick={()=>{goToHome(navigate)}}>Home</button>
           <button onClick={()=>{goToLogin(navigate)}}>login</button>
            
           
        </Container>
    )
}
