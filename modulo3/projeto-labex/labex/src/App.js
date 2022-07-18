import { Router } from "./routes/Routes";
import React from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   
    h1{
      text-shadow: 5px 1px 5px #00000099;
      text-transform: uppercase;
      font-size: 24px;
      
    }
    
    
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
      text-shadow: 5px 1px 5px #00000099;
      
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



function App() {
  return (
    <div>
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
