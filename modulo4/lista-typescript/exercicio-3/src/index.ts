//crie uma função que receba todas essas informações como parâmetros( 3 essenciais + 1 opcional) e retorne todas informações organizadas em um type

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}
type returnFilm = {
	nome: string,
	anoLancamento: number,
	genero: GENERO,
	pontuacao?:number,
 
}

const filmCatalog = (nome:string,anoLancamento:number,genero:string,pontuacao?:number):object =>{
	return {
		nome:nome,
		anoLancamento:anoLancamento,
		genero:genero,
		pontuacao:pontuacao
	}
  		
		
  }

console.log(filmCatalog("Duna",2021,GENERO.ACAO,25))

