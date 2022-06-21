import React from "react";
import DadosUsuario from "./components/DadosUsuario";
import CriaListaUsuarios from "./components/ListaUsuarios";
import styled from "styled-components";




const Botão = styled.button`
  color: white;
  background-color: black;
  border-radius: 10px;
  display: flex;
`

class App extends React.Component {
  state = {
    pagina: "true"
  }


  mudarPagina =() =>{
    this.setState({pagina: !this.state.pagina})
  }
  render() {
    
    const pagina = this.state.pagina? <DadosUsuario/> : <CriaListaUsuarios/>
    
    
    return (
      <div>
        <Botão onClick ={this.mudarPagina}>{this.state.pagina? 'Ir para lista de usuários': 'Voltar para cadastro'}</Botão>
        {pagina}
      </div>
    );
  }

}

export default App;