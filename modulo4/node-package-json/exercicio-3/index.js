
const item = process.argv[2]
const toDoList = ["limpar casa","lavar roupa",item]

if(item != undefined ){
    console.log("Tarefa adicionada com sucesso")
    console.log(toDoList)
}