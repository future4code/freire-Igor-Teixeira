// exercicio 1

const myName = process.argv[2]
const age =  Number(process.argv[3])
const newAge = age + 7

// acessar parametros no node process.argv[]

if(myName && age && newAge != undefined){
console.log(`\u001b[34m Olá, ${myName} ! Você tem ${age
} anos. Em sete anos você tera ${newAge} .`)
}else {
    console.log("\u001b[31m Erro digite todos argumentos ")
}











