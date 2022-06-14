import React, {Component} from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
	flex-direction: column;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
	display: flex;
`
const Comentou = styled.div`
	width:50%;
	border: 1px solid ;
	
`
const CaixaComentario = styled.div`
	display: flex;
`
export class SecaoComentario extends Component {
	state = {
		comentario:"",

	}
	adicionacomentario = () => {
		const novoArray = {
		  nome: this.state.comentario,
		};
	}

	onChangeComentario = (event)=> {
		this.setState({comentario : event.target.value})
		console.log(event.target.value)

	}

	render() {
		
		return <CommentContainer>
			
				<CaixaComentario>
					<InputComentario
						placeholder={'Comentário'}
						value={this.state.comentario}
						onChange={this.onChangeComentario}
					/>
					<button onClick={this.props.aoEnviar}>Enviar</button>
				</CaixaComentario>
			
	
			<Comentou>
				<p>{this.state.comentario}</p>
			</Comentou>
			
			
			
		</CommentContainer>
		
	}
}
