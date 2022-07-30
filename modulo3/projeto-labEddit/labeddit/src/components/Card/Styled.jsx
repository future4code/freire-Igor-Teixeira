import styled from "styled-components";

export const Container = styled.div`
    background-color: #d6cfcf;
    word-wrap: break-word;
    width: 88vw;
    border-top:1px solid  #9c9191;
    padding: 0 10px;
    border-radius:5px;
    border-left: 20px solid #d6cfcf;
    border-bottom: 20px solid transparent;
    background-clip: padding-box;
    @media (min-device-width : 700px)  {
        width: 450px;

}

         
`
export const Title = styled.div`
    font-size: 16px;
    margin :2px ;
    color: #0d0d0d;
    
`
export const Reactions = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-evenly;
    margin : 10px;
`

export const Send = styled.p`
    color: #7b7b7b;
    margin:0 ;


`
export const Text = styled.p`
    margin:2px 0 20px 0;
    color: #121212;
`