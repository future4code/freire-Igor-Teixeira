import React from "react";
import styled from "styled-components"
import fundo from "../../img/fundo.jpg"
import enviar from "../../img/enviar2.png"

const ContainerMensagem = styled.div`
    background: url(${fundo}) no-repeat center;
    width: 400px;
    height: 60vh;
    margin: 0 auto;

    display: flex;
    flex-direction: column-reverse;
     
`
const Bloco = styled.div`
    display: flex;
    align-items: center;
    gap: 2px;
    
    
`
const TxtUsuario = styled.input`
    width:100px;
    height: 30px;
    border-radius:30px;
    border: none;
`
const TxtMensagem = styled.input`
    width: 230px;
    height: 30px;
    border-radius:30px;
    border: none;
    
`

const Botao = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #c30e0e ;
    border-radius:50%;
    width: 40px;
    height: 40px;
    margin:5px;
    

`
const TextoMensagem = styled.p`
    background-color: white;
    border-radius: 10px;
    color:black;
    word-wrap:break-word;
    width:100px;
`
const BalaoMensagem = styled.div`
    margin-left:10px;
    display: flex;
    width: 40px;
    word-wrap:10;
`
const ImgEnviar = styled.img`
    width: 100px;
`
class Mensagem extends React.Component{
    state = {
        pessoas:[
            {
                nome:"",
                mensagem:"",
            }
        ],
        inputNome:"",
        inputMensagem:"",
    }

    adicionaMensagem= ()=>{
        const novaPessoa ={
            nome: this.state.inputNome,
            mensagem: this.state.inputMensagem,
        }
        const novasPessoas = [...this.state.pessoas, novaPessoa]
        this.setState({pessoas: novasPessoas,inputNome:"",inputMensagem:""})
        
    }
    onChangeInputNome = (event) => {
        this.setState({inputNome : event.target.value})
    }
    onChangeInputMensagem = (event)=> {
        this.setState({inputMensagem : event.target.value})
    }

    render(){

        const componenteMensagem = this.state.pessoas.map((pessoa)=>{
            return <BalaoMensagem>
                <TextoMensagem>{pessoa.nome} </TextoMensagem>
                <TextoMensagem>{pessoa.mensagem} </TextoMensagem>

            </BalaoMensagem> 
            

        })
        return(
            <ContainerMensagem>
                
                <Bloco>
                    <TxtUsuario
                    value={this.state.inputNome}
                    onChange={this.onChangeInputNome}
                    placeholder={"user"}/>
                    <TxtMensagem
                    value={this.state.inputMensagem}
                    onChange={this.onChangeInputMensagem}
                    placeholder={"Mensagem"} />
                    <Botao onClick={this.adicionaMensagem}><ImgEnviar src={enviar} alt="" /></Botao>  
                </Bloco>
                {componenteMensagem}
                
            </ContainerMensagem>

        )
    }
}

export default Mensagem