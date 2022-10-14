import { createGlobalStyle } from "styled-components";
import { HomePage } from "./page/home/Homepage"
import { GlobalState } from "../src/Global/GlobalState"


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
    <GlobalState >
      <GlobalStyle />
      <HomePage />
    </GlobalState>
  );
}

export default App;
