//      EXERCICIOS DE INTERPRETAÇÃO DE CODIGO 

/*  EXERCICIO - 1 
let array
console.log('a. ', array)  //undefined

array = null
console.log('b. ', array) // null 

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)  //11

let i = 0
console.log('d. ', array[i]) //3

array[i+1] = 19
console.log('e. ', array) //[3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor) // 9

EXERCICIO - 2 -----------------------------------------------------

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
// SUBI NUM ÔNIBUS EM MIRROCOS 27 */



//                EXERCÍCIO DE ESCRITA DE CÓDIGO 
//exercicio - 1

let nomeDoUsuario = prompt("Digite seu nome :")
let emailDoUsuario = prompt("Digite seu email :")
console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso.Seja bem-vinda(o),${nomeDoUsuario}`)

//exercicio - 2

let comidasFavoritas = ["churrasco","lazanha","frango","sushi","doritos"]
console.log(comidasFavoritas)
console.log(`Essas são minhas comidas favritas :`)
console.log(`${comidasFavoritas[0]}
${comidasFavoritas[1]}
${comidasFavoritas[2]}
${comidasFavoritas[3]}
${comidasFavoritas[4]}`)
let comidaUsuario = prompt("Digite sua comida preferida")
comidasFavoritas.splice(1,1)
console.log(`${comidasFavoritas[0]}
${comidaUsuario}
${comidasFavoritas[1]}
${comidasFavoritas[2]}
${comidasFavoritas[3]}`) 

//exercicio - 3

let listaDeTarefas = []
let primeiroItem = prompt("Digite a primeira:")
let segundoItem = prompt("Digite o segundo:")
let terceiroItem = prompt("Digite o terceiro:")
listaDeTarefas.push(primeiroItem,segundoItem,terceiroItem)
console.log(listaDeTarefas)
let indiceLista = prompt("Digite o índice da tarfefa realizada ex: [0,1,2]")
listaDeTarefas.splice(indiceLista,1)
console.log(listaDeTarefas)



//  DESAFIO 

// desafio - 1
let texto = []
let textoDigitado = prompt("Digite uma frase")
let textoFinal = textoDigitado.split(" ")
console.log(textoFinal)


// desafio -2

let listadefrutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
let frutaEscolhida = listadefrutas.indexOf("Abacaxi")
console.log(`A fruta Abacaxi esta na posição ${frutaEscolhida} em uma array com ${listadefrutas.length} indices.`)

