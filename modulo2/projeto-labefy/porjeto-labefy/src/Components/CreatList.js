import React from "react";
import axios from "axios";

export class CreatList extends React.Component {
  state = {
    inputName: "",
    playlists: [],
  };

  onChangeInputName = (e) => {
    this.setState({ inputName: e.target.value });
  };

createPlaylist = () => {
  const body = {
    name: this.state.inputName, 
  };
  axios
    .post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
      body,
      {
        headers: {
          Authorization: "igor-rodrigues-freire",
        },
      }
    )
    .then(() => {
      alert("sucesso");
      this.setState({inputName: "" });
    })
    .catch((erro) => {
      console.log(erro.data);
      alert(
        "Não foi possível realizar o cadastro. playlist com esse nome ja existe"
      );
    });
};

  render() {
    return (
      <div>
        <h2>cria lista </h2>
        <p>{this.state.playlists}</p>
        <input
          type="text"
          onChange={this.onChangeInputName}
          placeholder={"Digite nome da playlist"}
          value={this.state.inputName}
        />
        <button onClick={this.createPlaylist}>Adicionar playlist</button>
      </div>
    );
  }
}
