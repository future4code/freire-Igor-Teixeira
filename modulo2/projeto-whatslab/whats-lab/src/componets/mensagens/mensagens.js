import React from "react";
import styled from "styled-components";
import fundo from "../../img/fundo2.jpg";
import enviar from "../../img/enviar2.png";
import icone from "../../img/icone.png";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;

  width: 400px;
  height: 90px;
  top: 2px;
  background-color: #242424;
  border-radius: 10px 10px 0 0;
`;
const Titulo = styled.h1`
  margin-left: 10px;
  color: #c30e0e;
`;
const IconWhats = styled.img`
  width: 60px;
  height: 50px;
  padding-right: 10px;
`;
const ContainerMensagem = styled.div`
  background: url(${fundo}) no-repeat center;
  border: 3px solid black;
  border-radius: 10px;
  width: 400px;
  height: 600px;
  margin: 5px auto;
  display: flex;
  flex-direction: column-reverse;
`;
const Bloco = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  margin: 0 5px 0 10px;
`;
const TxtUsuario = styled.input`
  width: 100px;
  height: 30px;
  border-radius: 30px;
  border: none;
`;
const TxtMensagem = styled.input`
  width: 230px;
  height: 30px;
  border-radius: 30px;
  border: none;
`;

const Botao = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #c30e0e;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin: 5px;
`;
const TextoMensagem = styled.p`
  color: white;
  display: flex;
  border-radius: 10px;
  word-wrap: break-word;
`;
 const BalaoMensagem = styled.div`
  background-color: #615959;
  border-top: 10px solid #615959;
  border-left: 10px solid transparent;
  background-clip: padding-box;
  padding: 0 10px 10px 10px;
  margin: 10px;
  width: 180px; 
`; 
const ImgEnviar = styled.img`
  width: 100px;
`;

class Mensagem extends React.Component {
  state = {
    pessoas: [
      {
        nome: "",
        mensagem: "",
      },
    ],
    inputNome: "",
    inputMensagem: "",
  };

  adicionaMensagem = () => {
    const novaPessoa = {
      nome: this.state.inputNome,
      mensagem: this.state.inputMensagem,
    };
    const novasPessoas = [...this.state.pessoas, novaPessoa];
    this.setState({ pessoas: novasPessoas, inputNome: "", inputMensagem: "" });
  };
  onChangeInputNome = (event) => {
    this.setState({ inputNome: event.target.value });
  };
  onChangeInputMensagem = (event) => {
    this.setState({ inputMensagem: event.target.value });
  };

  render() {
    const componenteMensagem = this.state.pessoas.map((pessoa) => {
      return (
        <BalaoMensagem>
          <TextoMensagem>
            <strong>{pessoa.nome} </strong>
          </TextoMensagem>
          <TextoMensagem>{pessoa.mensagem}</TextoMensagem>
        </BalaoMensagem>
      );
    });
    return (
      <ContainerMensagem>
        <Bloco>
          <TxtUsuario
            value={this.state.inputNome}
            onChange={this.onChangeInputNome}
            placeholder={"user"}
          />
          <TxtMensagem
            value={this.state.inputMensagem}
            onChange={this.onChangeInputMensagem}
            placeholder={"Mensagem"}
          />
          <Botao onClick={this.adicionaMensagem}>
            <ImgEnviar src={enviar} alt="" />
          </Botao>
        </Bloco>
        {componenteMensagem}
        <Header>
          <Titulo>LabeWhats</Titulo> <IconWhats src={icone} />
        </Header>
      </ContainerMensagem>
    );
  }
}

export default Mensagem;
