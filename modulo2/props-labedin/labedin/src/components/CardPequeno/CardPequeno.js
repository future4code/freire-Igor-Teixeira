import React from "react";
import CardP from 'styled-components'

const Container = CardP.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 10px;
    margin-top: 5px;
    gap: 5px;

`
const Imagens = CardP.img`
    width: 10%;
`


function  CardPequeno (props){
    return (
    <Container>
            <Imagens src={props.imagem}/>
            <h4>{props.nome}</h4>
            <p>{props.endereco}</p>
    
    </Container>
    )
}
export default CardPequeno;
