//  Exercícios de interpretação de código
/*
//exercicio 1

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)  // 10

//exercicio 2

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}
//a) 19 21 23 25 27 30
//b) sim lista.length


//Exercicio 3

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}   // * - ** - *** - ****

*/


// --------------Exercícios de escrita de código--------------
// exercicio 1


let arrAnimais = []
let i = 0

animaisEstimação = Number(prompt("Quantos animais de estimação vc tem ?"))

if(animaisEstimação == 0){
    console.log("Que pena! você pode adotar um pet!")
}else if (animaisEstimação > 0){
    while (i < animaisEstimação) {
        nomes = prompt("Qual os nomes deles ?")
        arrAnimais.push(nomes) 
        i++
        
    }

}
console.log(arrAnimais)  



//Exercicio 2 ---------------------------------------------------

let arrayOriginal= [20,30,61,50,81,]

//a)
function imprime(array){
    for(array of array)
    console.log(array)
}
imprime(arrayOriginal)

//b)
function divisiveis10(array){
    for(array of array)
    console.log(array/10)
}
divisiveis10(arrayOriginal)

//c)
function nova(array){
    for(array of array)
    if(array % 2 == 0)
    console.log(array)

}
nova(arrayOriginal)

//d)

function string(array){
    for (let i = 0;i < array.length;i++){

        console.log(`o indice ${i} tem o valor ${array[i]}`) 
    }
}
    
string(arrayOriginal)


//e)
let maior = 0
let menor = 0
function menorMaior(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] > maior){
            maior = array[i]
            menor = maior  
        }if(array[i] < menor){
            menor = array[i]
        }
    }
    
    console.log(maior)
    console.log(menor)   
}
menorMaior(arrayOriginal)



