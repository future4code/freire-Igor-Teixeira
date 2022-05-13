// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura,largura) {
  altura = Number(prompt("digite um a altura do retangulo"))
  largura = Number(prompt("digite um a altura do retangulo"))
  let = resultado = altura * largura
  console.log(resultado)
}


// EXERCÍCIO 02
function imprimeIdade() {
  anoAtual = Number(prompt("digite o ano atual:"))
  anoNascimento = Number(prompt("digite seu ano de nascimento :"))
  let resultado = anoAtual - anoNascimento
  console.log(resultado)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  imc = peso / (altura*altura)
  return imc
}


// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome,idade,email) {
  nome = prompt("Digite seu nome:")
  idade = Number(prompt("Digite sua idade:"))
  email = prompt("Digite seu nome:")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  cor1 = prompt("Digite uma cor")
  cor2 = prompt("Digite uma cor")
  cor3 = prompt("Digite uma cor")
  resultado = [cor1,cor2,cor3]
  console.log(resultado)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  stringMaiuscula = string.toUpperCase()
  return stringMaiuscula

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  resultado = custo / valorIngresso
  return resultado

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  resposta = string1.length == string2.length
  return resposta

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  resultado = array[0]
  return resultado
  

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  let resultado = array.length
  let resul = resultado -1
  return array[resul]
  

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let arrayUltimo = array[array.length-1]
  let arrayPrimeiro = array[0]
  array[0] = arrayUltimo
  array[array.length-1] = arrayPrimeiro
  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  let stringmaior1 = string1.toUpperCase()
  let stringmaior2 = string2.toUpperCase()
  let resultado = stringmaior1 == stringmaior2
  return resultado
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  let anoAtual = Number(prompt("digite o ano atual"))
  let anoNascimento = Number(prompt("digite o ano de nascimento"))
  let anoCarteira = Number(prompt("digite o ano que sua indentidade foi emitida :"))
  let valorAno = anoAtual - anoNascimento
  let carteira = anoAtual - anoCarteira

  let menos = valorAno <= 20 && carteira >= 5 
  let medio = valorAno > 20 && valorAno <= 50 && carteira >= 10 
  let velho = valorAno > 50 && carteira >= 15
  
  console.log(menos||medio||velho)
 

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {

 let resultado =  ano % 400 == 0 || ano %  4 == 0 && ano % 100 != 0
  
  return resultado
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  let maiorIdade = prompt("vc e maior de idade ?")
  let escolaridade = prompt(" vc tem ensino medio ?")
  let disponibilidade = prompt("Vc possui disponibilidade de horario ?")
  
  let resultado = maiorIdade == "sim" && escolaridade == "sim" && disponibilidade == "sim"
  console.log(resultado)
  


}