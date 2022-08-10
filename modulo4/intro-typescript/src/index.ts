//exercicio 1 --------------------------------

function checaTriangulo(a:number, b:number, c:number) : string {
  if (a !== b && b !== c) {
    return "Escaleno";
  } else if (a === b && b === c) {
    return "Equilátero";
  } else {
    return "Isósceles";
  }
}

console.log(checaTriangulo(5,3,6))


//exercicio 2 ---------------------------------------

function imprimeTresCoresFavoritas():void {
  const cor1:string = process.argv[2]
  const cor2:string = process.argv[3]
  const cor3:string = process.argv[4]
  console.log([cor1, cor2, cor3])
}

//exercicio 3 ---------------------------------------

function checaAnoBissexto(ano:number) {
  const cond1 = ano % 400 === 0
  const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
  return cond1 || cond2
}

console.log(checaAnoBissexto(2022))

// exercico 4 ------------------------------------------

function comparaDoisNumeros(num1:number, num2:number) {
  let maiorNumero;
  let menorNumero;

  if (num1 > num2) {
    maiorNumero = num1;
    menorNumero = num2;
  } else {
    maiorNumero = num2;
    menorNumero = num1;
  }

  const diferenca = maiorNumero - menorNumero;

  return diferenca 
}

console.log(comparaDoisNumeros(5,9))

//exercicio 5 --------------------------------------

function checaRenovacaoRG(anoAtual:number, anoNascimento:number, anoEmissao:number ) {
  let idade:number = anoAtual - anoNascimento
  let tempoCarteira:number = anoAtual - anoEmissao
 
   if(idade <= 20 ) {
       return tempoCarteira >= 5 ? "passou dos 5 anos precisa renovar" : "ainda não passou os 5 anos"
     
    }else if(idade >= 20 || idade <= 50) {
       return tempoCarteira >= 10 ? "passou dos 10 anos precisa renovar" : "ainda não passou os 10 anos"
     
    }else if(idade > 50) {
       return tempoCarteira >=15 ? "passou dos 15 anos precisa renovar" : "ainda não passou os 15 anos"
     
     }else {
         return "error"
     }
 }

console.log(checaAnoBissexto(2022,1993,2010,))

// Desafios 
//exercicio 6 ------------------------------------------------------

function operacao ():void{
  const num1:number = Number(process.argv[2])
  const num2:number = Number(process.argv[3])

  const soma:number = num1 + num2 
  const subtracao:number = num1 > num2 ? num1 - num2 : num2 - num1
  const mutiplicacao:number = num1 * num2
  
  console.log(`Soma = ${soma}`, `Subtração = ${subtracao}`, `Multiplicação = ${mutiplicacao}`)
  if(num1 > num2){
      console.log(`O ${num1} é o maior número`)
  }else{
      console.log(`O ${num2} é o maior número`)
  }
}
operacao()

//exercicio 7 -------------------------------------------------------
const frase:string = "ATTGCTGCGCATTAACGACGCGTA"


 function seresVivos () {
  const arrFrase = frase.split("")
  const mapArrFrase = arrFrase.map((item)=>{
    if(item === "A"){
      return "U"
    }else if(item === "T"){
      return "A"
    }else if (item === "C"){
      return "G"
    }else if (item === "G"){
      return "C"
    }

  })
  .join("")
  return mapArrFrase
}
 
console.log(seresVivos())
    
// exercicio 8 -------------------------------------


function reverseFrase (frase:string){
  const novaFrase:string[] = frase.split('')
  const invertida: string[] = novaFrase.reverse()
  const fraseString: string = invertida.join('')

  return fraseString

}

console.log(reverseFrase("Bom dia"))

// exercicio 9 -------------------------------------


function validaEstudante (idade:number,escolaridade:boolean,horasPorSemana:number,turno:string) {
   if(turno.toUpperCase() === "NOTURNO" && idade > 18 && escolaridade === true && horasPorSemana >= 20){
    return true
   }else if ( turno.toUpperCase() === "INTEGRAL" && idade > 18 && escolaridade === true && horasPorSemana >= 40){
    return true
   }else{
    return false
   }
}

console.log(validaEstudante(22,true,11,"noturno"))
  

 





