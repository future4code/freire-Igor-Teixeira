import { Router } from "../src/routes/Router";
import {theme} from "./constants/theme"
import {ThemeProvider} from '@material-ui/core'


const App = () =>{
  return (
    <ThemeProvider theme={theme}>
   <Router/>
    </ThemeProvider>
  );
}

export default App
