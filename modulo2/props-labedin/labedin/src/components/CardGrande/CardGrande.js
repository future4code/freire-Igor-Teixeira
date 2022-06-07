import React from 'react';
import CardG from 'styled-components'

const ContainerCard = CardG.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`
const Img =  CardG.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`
const Nomes = CardG.h4`
    margin-bottom: 15px;
`
const ContainerCardDiv = CardG.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`


function CardGrande(props) {
    return (
        <ContainerCard>
            <Img src={ props.imagem } />
            <ContainerCardDiv>
                <Nomes>{ props.nome }</Nomes>
                <p>{ props.descricao }</p>
            </ContainerCardDiv>
        </ContainerCard>
    )
}

export default CardGrande;