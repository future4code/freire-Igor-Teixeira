import React from "react";
import {Container,Text,Title } from './styled'
import foto from '../../Assets/astronalta.png'

export const WhoWeAre = () =>{
    return(
        
           
        <Container >
            <Title> <h1>Quem somos ?</h1></Title>
            
            
             
            <Text>
           
                <p>Somos uma empresa especialista em viagens entre galáxias! Temos um vasto portfólio com inúmeros destinos, para satisfazer à todos. 
                </p>
                <p>Nossa missão é entregar à todos nossos clientes e amigos, uma experiência única e inesquecível. Entre em contato, conheça nossas propostas e programe seu próximo destino em busca da liberdade e conhecimento das mais diversas culturas.</p>
            </Text>
            {/* <div><img src={foto} alt="" /></div> */}
        </Container >
       
    )

}