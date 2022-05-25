
  // EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'


    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    //console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
   // console.log(carta.valor) //imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10) */ 

const cartaUsuario1 = comprarCarta()
const cartaUsuario2 = comprarCarta()
const cartaComputado1 = comprarCarta()
const cartaComputado2 = comprarCarta()
const somaValoresComputador = cartaUsuario1.valor+cartaUsuario2.valor
const somaValoresUsuario = cartaComputado1.valor+cartaComputado2.valor

alert("Bem vindo(a) ao jogo de Blackjack!")

let usuario = confirm("Deseja iniciar Uma nova rodada ?")

if(usuario === false){
   console.log("O jogo acabou !")
}else if (usuario === true) {
      console.log("Bem vindo(a) ao jogo de Blackjack!")
      console.log(`usuario cartas :  ${cartaUsuario1.texto} ${cartaUsuario2.texto} pontuação = ${somaValoresUsuario}`)
      console.log(`Computador cartas: ${cartaComputado1.texto} ${cartaComputado2.texto} pontuação = ${somaValoresComputador}`)
   
   }if(somaValoresComputador > somaValoresUsuario){
      console.log("O computador venceu!")

   }else if(somaValoresComputador === somaValoresUsuario){
      console.log("Empatou !!")
   }else{
      console.log("O usario venceu")
   }