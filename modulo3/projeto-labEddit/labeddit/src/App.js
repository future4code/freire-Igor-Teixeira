import { Router } from "../src/routes/Router";
import {theme} from "./constants/theme"
import {ThemeProvider} from '@mui/material'
import {GlobalState} from "./Global/GlobalState";


const App = () =>{
  return (
    <ThemeProvider theme={theme}>
      <GlobalState>
        <Router/>
      </GlobalState>
    </ThemeProvider>
  );
}

export default App
