import React from "react";
import DadosUsuario from "./components/DadosUsuario";
import CriaListaUsuarios from "./components/ListaUsuarios";
import styled from "styled-components";

const ContainerBotão = styled.div`
  background-color: black;
  width: 400px;
  height: 260px;
  border-radius: 10px;
  margin: 20px auto;
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  gap: 10px;
`;
const Botão = styled.button`
  color: white;
  border: none;
  height: 30px;
  background-color: red;
  border-radius: 10px;
  margin-bottom: 20px;
`;

class App extends React.Component {
  state = {
    pagina: "true",
  };

  mudarPagina = () => {
    this.setState({ pagina: !this.state.pagina });
  };
  render() {
    const pagina = this.state.pagina ? <DadosUsuario /> : <CriaListaUsuarios />;

    return (
      <ContainerBotão>
        <div>
          <Botão onClick={this.mudarPagina}>
            {this.state.pagina
              ? "Ir para lista de usuários"
              : "Voltar para cadastro"}
          </Botão>
        </div>
        {pagina}
      </ContainerBotão>
    );
  }
}

export default App;
