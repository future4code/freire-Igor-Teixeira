import {Home} from "../src/components/Home/Home"
import { Header } from "./components/header/Header";
import styled from "styled-components";
import { useState } from "react";
import { Matches } from "./components/Matches/Matches";


const Container = styled.div`
  margin:10px auto;
  border: 1px solid;
  width:400px;
  height:600px;
  border-radius:10px;
  background-image: linear-gradient(#6b0a5b , #dd9ec0);

`

function App() {
  const [pagina,setPagina] = useState("home")

const TrocaPagina =()=>{
    switch (pagina) {
        case "home":
        return <Home/>
        case "matches":
        return <Matches/>
        default:
            return <div>Erro</div>
    }
}
const irParaHome =()=>{
    setPagina("home")
}
const irParaMatche =() =>{
    setPagina("matches")
}

  return (
    <Container>
     <Header
     home={irParaHome}
     matches={irParaMatche}
     />
      {TrocaPagina()}
    </Container>

  );
}

export default App;
