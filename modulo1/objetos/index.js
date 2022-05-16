//         EXERCICIOS DE INTERPRETAÇÃO DE CODIGO 
/* exercicio 1
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])   Matheus Nachtergaele
console.log(filme.elenco[filme.elenco.length - 1]) Virginia Cavendish
console.log(filme.transmissoesHoje[2])    {canal: 'Globo', horario: '14h'}   */


//exercicio 2 ------------------------------------------------
/*
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)  //nome: 'Juca', idade: 3, raca: 'SRD'
console.log(gato) //nome: 'Juba', idade: 3, raca: 'SRD'
console.log(tartaruga) //nome: 'Jubo', idade: 3, raca: 'SRD' */


//Exercicio 3 --------------------------------------------------
/*
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))   false
console.log(minhaFuncao(pessoa, "altura"))  undefined  */


//--------------------------EXERCICIOS DE ESCRITA DE CODIGO-----------------------------------

const pessoaExercicio = {
    nome: "Lorenzo",
    apelido:["lolo","Loh","Diambou flay"]

}
// a)
function apelidoPessoa(pessoa){
    const novaPessoa = {...pessoa}
    return console.log(`Meu nome e ${novaPessoa.nome} mas pode me chamar de ${novaPessoa.apelido[0]},${novaPessoa.apelido[1]} ou ${novaPessoa.apelido[2]}.`)

}
apelidoPessoa(pessoaExercicio) 

//b)

const pessoaExercicio2 = {
    ...pessoaExercicio,
    apelido: ["sla","fulano","ciclano"]
}

apelidoPessoa(pessoaExercicio2)


// exercicio 2 ----------------------------------------------------------

const dadosPessoa1 = {
    nome: "Marcos",
    idade: 25,
    proficao: "Engenheiro"
}

const dadosPessoa2 = {
    nome: "Marcia",
    idade: 31,
    proficao:"corretora"

}

function arrpessoa(dadosPessoa1,dadosPessoa2){
    const novaPessoa = {...dadosPessoa1,
        ...dadosPessoa2,}
    const arrNovaPessoa = [novaPessoa.nome,novaPessoa.nome.length,novaPessoa.idade,novaPessoa.proficao,novaPessoa.proficao.length]
    return arrNovaPessoa
}
console.log(arrpessoa(dadosPessoa2))


//exercicio 3 -----------------------------------------------------------------

carrinho = []

const fruta1 ={
    nome:"maça",
    disponivel:true
};

const fruta2 ={
    nome:"pera",
    disponivel:true
};

const fruta3 ={
    nome:"abacaxi",
    disponivel:true
};

function compras(fruta){
    const novaFrutas = {
        ...fruta1,
        ...fruta2,
        ...fruta3
    }
    carrinho = [fruta1,fruta2,fruta3]

    return carrinho
}
console.log(compras(carrinho.fruta1))


//  Desafiooo ----------------------------------------------------------

function usuario (){
    let nome = prompt("Qual seu nome ?")
    let idade = Number(prompt("Digite sua idade"))
    let proficao = prompt("Qual a sua profição ?")
    const dadosUsuario = {
        nome: nome ,
        idade: idade,
        proficao:proficao 
    
    }
    console.log(dadosUsuario)
    console.log(typeof dadosUsuario)
}
usuario()

//desafio 2 ---------------------------------------------------------------



const filme1 = {
         nome: 'O senhor dos Anéis',
         ano: 2002,
}

const filme2 = {
    nome : "chernobyl",
    ano : 2021,
}

function ComparaFilmes(filmes){
    filmeprimeiro = filme1.ano > filme2.ano
    filmesegundo = filme1.ano == filme2.ano
    console.log(`O primeiro filme foi lançado antes do segundo? ${filmeprimeiro}`)
    console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${ filmesegundo}`)
}
ComparaFilmes()


function sacolao (fruta1,fruta2,fruta3){
    const frutadisp ={
        ...fruta1,
        ...fruta2,
        ...fruta3,
        disponivel:false
        
    

    }
    
   return frutadisp
}
console.log(sacolao(fruta3))
