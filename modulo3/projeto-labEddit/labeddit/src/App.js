import { Router } from "../src/routes/Router";
import {theme} from "./constants/theme"
import {ThemeProvider} from '@mui/material'
import {GlobalState} from "./Global/GlobalState";
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   
    }
    p{
      font-family: 'Roboto', sans-serif;
    }
    
    button{
      cursor: pointer;
    }

    `


const App = () =>{
  return (
    <ThemeProvider theme={theme}> 
    <GlobalStyle />
      <GlobalState>
        <Router/>
      </GlobalState>
    </ThemeProvider>
  );
}

export default App
