//                 Exercícios de interpretação de código

/*  Exercicio 1
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))  // 2*5 = 10
console.log(minhaFuncao(10)) // 10*5 = 50

b - Nao imprimiria nada */
 
// exercicio 2---------------------------------------------------

/*let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)*/

//Sua função e transformar letras em minuscula e retornar se contem cenoura na frase 


// -------------- Exercícios de escrita de código ----------------

// Exercicio - 1
 
// a)
function informacaoPessoal(){
    console.log("Eu sou Igor, tenho 29 anos, moro em Santa catarina e sou estudante.")
}

informacaoPessoal() 


// b)
function dadosPessoais(nome,idade,cidade,profissao){
    nome = nome = ("igor :")
    idade = idade = ("29 :")
    cidade = cidade = ("santa catarina :")
    profissao = profissao = ("Desenvolvedor")
    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`
}

console.log(dadosPessoais()) 

//-----------------------------------------------------------------

// Exercicio - 2

//a)
function soma(num1,num2){
    num1 = 5
    num2 = 3
    let resultado = num1 + num2
    
    return resultado
}
console.log(soma())


//b)

function somarNumeros(numero1,numero2){
    numero1 = 2
    numero2 = 6
    numeroMaior = numero1 >= numero2
    return numeroMaior
}
console.log(somarNumeros()) 

//c)

function parImpar(valor1){
    valor1 = 8
    valorPar = valor1 % 2 == 0
    return valorPar
}
console.log(parImpar())

//d)/*

function formatar(mensagem){
    mensagem = "ola tudo bem"
    mensagemMaiscula = mensagem.toUpperCase()
    mensagemnum = mensagem.length

    return `${mensagemnum} ${mensagemMaiscula}`

}
console.log(formatar())

//-----------------------------------------------------------------

// Exercicio - 3

function somar(val1,val2){
    let resposta = val1 + val2
    return resposta

}

function subtração(val1,val2){
    let resposta = val1 - val2
    return resposta   
}

function multiplicacao(val1,val2){
    let resposta = val1 * val2
    return resposta
}

function divisao(val1,val2){
    let resposta = val1 / val2
    return resposta
}
let val1 = 9
let val2 = 8

console.log(`Numeros inseridos ${val1} e ${val2} 
Soma: ${somar(val1,val2)}
Diferença: ${subtração(val1,val2)}
Multiplicação : ${multiplicacao(val1,val2)}
Divisão : ${divisao(val1,val2)}`)

//----------------------------------------------------------------

//Desafio


const desafio = (parametro) => {
    console.log(parametro)
}
desafio("Hello")


const valores = (n1,n2) => n1 + n2 
desafio(valores(5,3)) 

