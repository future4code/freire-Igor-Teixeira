import styled from "styled-components";

export const Container = styled.div`
        text-align: center;
    div{
        display: flex;
        align-items: center;
        justify-content: space-evenly;


    }
    
`
export const ContCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin: 10px 10px;

`


export const Card = styled.li`
    list-style: none;
    width: 400px;
    height: 200px;
    padding: 20px;
    border: 1px solid black;
    
`

export const Title= styled.h3`
    text-align: center;
    margin:5px;
    color: #0b0b3d;

`
export const Text = styled.p`
    margin:10px;

    strong{
        color: #0b0b3d;
    }

`



