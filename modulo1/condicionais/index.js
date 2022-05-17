//------------Exercícios de interpretação de código------------

//exercicio 1 

/*
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
} */

// a) ele testa se o numero e multiplo de 2
// b) para todos numeos que o resto da divisão forem diferentes de 0

// axercicio 2 ---------------------------------------------
/*
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco) */

//a) para mostrar respectivo falor de cada fruta
//b) o preço da fruta maça é R$ 2.25
//c) o preço da fruta pera e R$ 5

//exercicio 3 --------------------------------------------
/*
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem) */

//a) guardando uma variavel tipo num
//b) esse numero passou no teste -10 seria undefin
//c) sim nao lera mensagem pois esta encapisulada no bloco do if 







//------------Exercícios de escrita de código-----------------
//exercicio 1

let idadeUsuario = Number(prompt("Digite sua idade"))

if(idadeUsuario >= 18){
    console.log("Você pode dirigir .")
}else{
    console.log("Você não pode dirigir.")
}


// Exercicio 2   ----------------------------------------------

let aluno = prompt("Em que turno você estuda matutino,vespertino ou noturno ? [M - V - N]")
aluno = aluno.toUpperCase()
if(aluno === "M" ){
    console.log("Bom dia!")
}else if(aluno === "V"){
    console.log("Boa tarde!")
}else if(aluno === "N"){
    console.log("Boa noite!")
}else{console.log("Digite turno valido [M - V - N]")} 

// exercicio 3 ------------------------------------------------


let turnoAluno = prompt("Em que turno você estuda matutino,vespertino ou noturno ? [M - V - N]")
turnoAluno = turnoAluno.toUpperCase()
switch (turnoAluno) {
    case "M":
        console.log("Bom dia!")
        break
    case "V":
        console.log("Boa tarde!")
        break
    case "N":
        console.log("Boa noite!")
        break;

    default:
        break;
} 


//Exercicio 4 + desafio 1 ---------------------------------


let filmeGenero = prompt("Qual genero do filme que vai assitir ?")
let filmeValor = Number(prompt("Qual o valor do ingresso do filme ?"))
let filmeLanche = prompt("Qual lanche você vai comprar ?")
filmeGenero = filmeGenero.toUpperCase()

if (filmeGenero === "FANTASIA" && filmeValor < 15 ){
    console.log(`Bom filme ! Aproveite seu ${filmeLanche}`)
}else {
    console.log("Escolha outro filme :( ")
}
 



//Desafios --------------------------------- 


