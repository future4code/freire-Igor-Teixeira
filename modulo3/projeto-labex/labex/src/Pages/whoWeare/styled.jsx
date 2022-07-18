import styled from "styled-components";
import astro from "../../Assets/foto3.png"


export const Container = styled.div`
    color:white;
    background: url(${astro});
    background-repeat: no-repeat;
    background-position: center center ;
    height: 90vh;
    display:flex;
    flex-direction: column;
    align-items: center;
    align-items: stretch;
    gap:50px;
    
    


`

export const Text = styled.div`
    background-color: #000000d1;
    border-radius: 15px;
    margin: 30px;
    width: 40vw;
   
    border:1px solid black;

    @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
        width: 97vw;
        margin:0px auto;
       
}


    p{
        text-shadow: 5px 1px 5px #00000099;
        margin:15px 15px;
        font-size: 25px;
    }
    
`

export const Title = styled.div`
    display: flex;
    
    
   
    
    
    
    h1{
        border-radius: 10px;
        background-color: #000000c1;
        padding: 10px;
        font-size: 40px;
        margin: 10px auto;
        
    }
`