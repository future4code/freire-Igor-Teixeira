//                    EXERCICIOS DE INTERPRETAÇÃO 

/*EXERCICIOS DE INTERPRETAÇÃO 1 
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado)

OS DOIS PRIMEIROS VÃO IMPRIMIR FALSE POIS SÃO DIFERENTES O 
O TERCEIRO RETORNA VERDADEIRO POIS 1 E 2 VAI DAR FALSE E RESULTADO TAMBEM
E FALSE O TIPEOF VAI RETORNAR BOOLEAN */

/*----------------------------------------------------------------------
EXERCICIOS DE INTERPRETAÇÃO 2
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

DESSA FORMA ELE IRIA CONCATENAR O NUMERO 

/* -------------------------------------------------------------------------
EXERCICIOS DE INTERPRETAÇÃO 3
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = Number(primeiroNumero) + Number(segundoNumero)

console.log(soma)

sugiro conperter a strin para Number */

//                               EXERCICIOS DE ESCRITA DE CODIGO 


// Exercicio de escrita de codigo 1-----------------------------------------

let idadeUsuario = prompt("Digite sua idade :")
let idadeAmigo = prompt("Qual a idade do seu melhor amigo")
let idadeMaior = Number(idadeUsuario) >= Number(idadeAmigo) 
let idadeDiferenca = idadeUsuario - idadeAmigo
console.log("Sua idade e maior do que a do seu amigo : ",idadeMaior)
console.log("A diferença de idade entre vc e seu amigo e ",idadeDiferenca)

// Exercicio de escrita de codigo 2 ----------------------------------------

let numPar = prompt("Digite um numero par :" )
let numeroPar = Number(numPar)
console.log(numeroPar % 2 )


// Exercicio de escrita de codigo 3 --------------------------------------

let idade = prompt("Quantos anos você tem ?")
let idadeUsuario1 = Number(idade)
let diaUsuario = idadeUsuario * 365
let horasUsuario = diaUsuario * 24

console.log(idadeUsuario1 * 12 )
console.log(diaUsuario)
console.log(horasUsuario)


// Exercicio de escrita de codigo 4 --------------------------------------

let numero1 = prompt("Digite um valor :")
let numero2 = prompt("Digite outro valor :")
let num1 = Number(numero1)
let num2 = Number(numero2)
let maior = (num1 > num2)
let igual = (num1 == num2)
let divisivelSegundo = (num1 % num2 == 0)
let divisivelPrimeiro = (num2 % num1 == 0)

console.log("O primeiro numero é maior que o segundo :", maior )
console.log("O primeiro numero e igual ao segundo :",igual)
console.log("O primeiro numero e divisivel pelo segundo :",divisivelSegundo) 
console.log("O segundo numero e divisivel pelo primeiro :",divisivelPrimeiro)

