import React from "react"
import Post from "../Post/Post";
import styled from "styled-components";


const CaixaTxt = styled.input`
 padding: 5px ;
 margin: 5px;
 width: 220px;;
 height: 20px;
 border-radius:20px;
 border: 1px solid #4f8fee;
 display:flex;
 
`
const Botoes = styled.label`
  background-color: #4f8fee;
  color:white;
  width:120px;
  height: 30px;
  border-radius:10px;
  margin: 5px;

  display: flex ;
  align-items: center;
  justify-content: space-around;
`

const ContainerBotoes = styled.div`
  border: 2px solid #4f8fee;
  border-radius: 15px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;

`

class Postar extends React.Component {
  state = {
    postPessoa:[
      {
        fotoUsuario:'https://picsum.photos/50/50',
        nomeUsuario:"Janaina" ,
        fotoPost:'https://picsum.photos/200/150',
      },
      {
        fotoUsuario:'https://picsum.photos/50/56',
        nomeUsuario:"Lucio" ,
        fotoPost:'https://picsum.photos/200/156',
      },
      {
        fotoUsuario:'https://picsum.photos/50/54',
        nomeUsuario:"Marcos" ,
        fotoPost:'https://picsum.photos/200/154',
      },
    ],
    
      inputNome: '',
      inputFotoUsuario: '',
      inputFotoPost: '' ,
      
  };

    adicionaPost = () => {
    const novoArray = {
      nome:this.state.inputNome,
      fotoUsuario:this.state.inputFotoUsuario,
      fotoPost:this.state.inputFotoPost,
    }
    const novoPost = [...this.state.postPessoa, novoArray];
    this.setState({ postPessoa: novoPost,inputNome:"",inputFotoUsuario:"",inputFotoPost:""});
    }

    onChangeInputNome = (event) => {
        this.setState({ inputNome: event.target.value });
      };
    
    onChangeInputFotoUsuario = (event) => {
        this.setState({ inputFotoUsuario: event.target.value });
      };

    onChangeInputFotoPost = (event) => {
        this.setState({ inputFotoPost: event.target.value });
      };

    render(){

    const usuarioComponentes = this.state.postPessoa.map((usuario) => {
      return<Post
          key={usuario.nomeUsuario}
          nomeUsuario={usuario.nomeUsuario}
          fotoUsuario={usuario.fotoUsuario}
          fotoPost={usuario.fotoPost}
        />
    })

    return(
      <div>
        <ContainerBotoes>
        <CaixaTxt
        onChange={this.onChangeInputNome}
        id="nome" placeholder="  Nome.."
        value={this.state.inputNome} />
        <CaixaTxt 
        onChange={this.onChangeInputFotoUsuario} 
          id="fotouser" 
        placeholder="&#128206; Link foto usuario   " 
        value={this.state.inputFotoUsuario}/>
        <CaixaTxt
        onChange={this.onChangeInputFotoPost}
        id="fot post" placeholder="&#128206; Link foto post    " 
        value={this.state.inputFotoPost}/>
        <Botoes onClick={this.adicionaPost}>Adicionar</Botoes>
        </ContainerBotoes>
        <div>{usuarioComponentes}</div>
      </div>
      
    )
  }
}
export default Postar

    


