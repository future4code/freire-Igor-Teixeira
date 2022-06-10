import React from "react";
import styled from "styled-components"
import fundo from "../../img/fundo.jpg"

const ContainerMensagem = styled.div`
    display: flex;
    justify-content: space-around;
    width: 180vw;
    height: 90vh;
    
`
const Bloco = styled.div`
    display: flex;
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
            return <p>{pessoa.nome} - {pessoa.mensagem}</p> 

        })
        return(
            <ContainerMensagem>
                <img src={fundo} alt="" />
                <Bloco>
                    <input
                    value={this.state.inputNome}
                    onChange={this.onChangeInputNome}
                    placeholder={"user"}/>
                    <input
                    value={this.state.inputMensagem}
                    onChange={this.onChangeInputMensagem}
                    placeholder={"Mensagem"} />
                    <button onClick={this.adicionaMensagem}>Enviar</button>
                    <div>{componenteMensagem}</div>
                </Bloco>
            </ContainerMensagem>

        )
    }
}

export default Mensagem