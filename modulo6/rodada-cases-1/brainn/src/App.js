import { createGlobalStyle } from "styled-components";
import { MainBackground } from "./components/MainBackground/MainBackground";
import {HomePage} from "./page/home/Homepage"


  const GlobalStyle = createGlobalStyle`
    body {
      margin: 0;
      padding: 0;
      font-family: Open-Sans, Helvetica, Sans-Serif;
      min-height: 100vh;
    }

  `
  function App() {
  return (
    <div >
      <GlobalStyle  />
    <MainBackground/> 
    <HomePage/>
    </div>
  );
}

export default App;
