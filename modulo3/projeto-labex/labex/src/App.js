import { Router } from "./routes/Routes";
import React from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    
    button{
      font-family: 'Roboto', sans-serif;
      cursor: pointer;
      border: none;
      border-radius: 5px;
      width:100px;
      height: 25px;
      color:  #0c4571;
      display:flex;
      align-items: center;
      justify-content: space-evenly;
    }
      button:hover{
        background-color: #2b95e5;
        color:white
      }
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
    
}
  }


`;

const Container = styled.div`
  background-color: #011523;
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Router />
    </Container>
  );
}

export default App;
