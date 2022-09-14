import styled from "styled-components";
import {Button} from '@mui/material'

export const Container = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap :10px ; 
    align-items: center;
  
`


export const StyledButton = styled(Button)`
     width:250px;
   
     
`

export const ButtonNavigate = styled.button`
    position: fixed;    
    right: 5px;
    bottom: 40px;
    background: #f25757;
    border:none;
    border-radius: 100%;
    width: 25px;
    height: 25px;
    
`