const minhaString:string = "oi"
//a não aceita numeros 

const meuNumero:number | string = "oii"


enum Cores {
    VERMELHA = "vermelha",
    LARANJA = "Laranja",
    AMARELO = "Amarela",
    VERDE = "Verde",
    AZULESCURO = "Azul Escuro",
    ROXA = "Roza"
}

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

const pessoa1: Pessoa = {
    nome: "igor",
    idade: 29,
    corFavorita: Cores.VERDE
}

const pessoa2: Pessoa ={
    nome: "miguel",
    idade: 8,
    corFavorita:Cores.VERMELHA
}

const pesso3: Pessoa = {
    nome: "Lorenzo",
    idade: 5,
    corFavorita:Cores.VERDE
}
