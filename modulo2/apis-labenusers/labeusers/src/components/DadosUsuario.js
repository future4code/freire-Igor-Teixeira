import React from "react";
import styled from "styled-components";
import axios from "axios";

const Cadastro = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 300px;
  padding: 10px;
  margin-top: 30px;
  background-color: white;
`;
const Inputs = styled.input`
  margin-bottom: 10px;
  border-radius: 10px;
  border: none;
  border-bottom: 1px solid gray;
`;

class DadosUsuario extends React.Component {
  state = {
    nome: "",
    email: "",
  };

  //-------------------------------------------------------
  onChangeNome = (event) => {
    this.setState({ nome: event.target.value });
  };
  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  //--------------------CRIAR UM NOVO USUARIO---------
  CriarUsuario = () => {
    const body = {
      name: this.state.nome,
      email: this.state.email,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "igor-rodrigues-freire",
          },
        }
      )
      .then(() => {
        alert("sucesso");
        this.setState({ nome: "" });
        this.setState({ email: "" });
      })
      .catch((erro) => {
        console.log(erro.data);
        alert(
          "Não foi possível realizar o cadastro. Por favor, verifique todos os campos e tente novamente"
        );
      });
  };
  render() {
    return (
      <div>
        <Cadastro>
          <h2>Cadastro</h2>
          <Inputs
            placeholder={"Nome"}
            value={this.state.nome}
            onChange={this.onChangeNome}
          />
          <Inputs
            placeholder={"email"}
            value={this.state.email}
            onChange={this.onChangeEmail}
          />
          <button onClick={this.CriarUsuario}>Cadastro</button>
        </Cadastro>
      </div>
    );
  }
}

export default DadosUsuario;
