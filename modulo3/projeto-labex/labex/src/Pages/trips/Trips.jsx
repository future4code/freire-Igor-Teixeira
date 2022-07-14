import React from "react";
import {Container,Card,Title,Text,ContCard} from "./styled"
import {goToAboutPage, goToHome } from "../../routes/Coordinator";
import {useNavigate} from "react-router-dom"
import { useResquestTrips } from "../../Components/hoocks/useRequestTrips";

export const Trips = () => {
    const navigate = useNavigate()
    const trips = useResquestTrips()

   const listTrips = trips.map((item) => {
    return (
    <Card key={item.id}>
        <Title>{item.name}</Title>
        <Text><strong>Descrição: </strong>{item.description}</Text>
        <Text><strong>Planeta: </strong>{item.planet}</Text>
        <Text><strong>Duração</strong>: {item.durationInDays} dias </Text>
        <Text><strong>Data</strong>: {item.date}</Text>
        </Card>)
   })

    return (
        <Container>
                <h1>viajens</h1>
            <div>
                <button onClick={()=>{goToHome(navigate)}}>back</button>
                <button onClick={()=>{goToAboutPage(navigate("sing"))}}>SingUp</button>
            </div>
           
           <ContCard>{listTrips}</ContCard> 
           
        </Container>
    )
}
