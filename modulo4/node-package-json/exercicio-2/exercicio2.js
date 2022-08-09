// exercicio 2 ------------------------------------------------------

const operation = process.argv[2]
const firstNum= Number(process.argv[3])
const secondNum = Number(process.argv[4])


if(operation && firstNum && secondNum != undefined){
 switch (operation) {
    case "add":
       return console.log(`\u001b[34m Resultado = ${firstNum + secondNum}`) ;
    case "sub":
        return console.log(`\u001b[34m Resultado = ${firstNum - secondNum}`) ;
    case "mult":
        return console.log(`\u001b[34m Resultado = ${firstNum * secondNum}`);
    case "div":
        return  console.log(`\u001b[34m Resultado = ${firstNum / secondNum}`);
    default:
        break;
}
}else{
    console.log("\u001b[31m Erro digite todos argumentos")
}