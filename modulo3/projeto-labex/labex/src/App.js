import { Router } from "./routes/Routes";
import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    button{
      cursor: pointer;
    }
    /* input{
        padding:10px;
        width:200px;
        height:40px;
        border-radius: 10px;
        border: 0.5px solid black;
        margin: 10px;
    } */
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
    
}
  }
`


function App() {
  return (
    <div>
      <GlobalStyle/>
     <Router/>
    </div>
  );
}

export default App;
