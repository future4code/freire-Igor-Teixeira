import styled from "styled-components";

export const ContainerMain = styled.div`
    width: 100vw;
    height:100vh;
    background: #e1e0e0 ;
    margin:0,auto;
    display: flex;
    
`

export const ContainerNumbers = styled.div`
    width: 90vw;
    height: 90vh;
    background:#e1e0e0 ;
    right: 2px;

    display: flex;
    align-items: center;
    gap: 30px;


    div{
        background: #111111;
        color: white;
        font-size: 28px;
        width: 100px;
        height: 100px;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`