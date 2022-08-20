import express from "express";
import { AddressInfo } from "net";
import { Afazeres } from "./data";


const app = express();

app.use(express.json());

const CopiaAfazeres = Afazeres
//exercicio 1

app.get("/ping", (req,res)=> req.res?.send("pong"))

//exercicio 4

app.get("/afazeres",(req,res)=>{
    const list = CopiaAfazeres.map(item => {
        if(item.completed === true){
            return item
        }
    })
    res.send(list).status(200)
    
})

// exercicio 5

app.post("/tarefas",(req,res)=>{
    const id = Number(req.headers.authorization)
    const title:string = req.body
    if(!id){res.status(400).send("ID inválido")}

    CopiaAfazeres.push({
        userId: id,
        id: Date.now(),
        title,
        completed: false
    })
    res.status(200).send({CopiaAfazeres})  
})

// exercicio 6 
app.put("/altera/tarefa",(req,res) =>{
    const idTarefa = Number(req.headers.authorization)
    CopiaAfazeres.map(item =>{
        if(item.id === idTarefa){
          item.completed = !item.completed
          return item
        }
    })
    if(!idTarefa){
        res.send("Id invalido")
    }else{
        res.send(CopiaAfazeres).status(200)
    }
})

// exercicio 7

app.delete("/deleta/:tarefa",(req,res)=>{
    const idParams = Number(req.params.tarefa)
    const list = CopiaAfazeres.map(item=> {
        if(item.id != idParams){
            return item
        }
    })
    if(!idParams){
        res.send("ida invalido").status(400)
    }else{
        res.send(list).status(200)
    }
})

//exercicio 8

app.get("/tarefas/:id/",(req,res)=>{
    const idParams = Number(req.params.id)
    const listTarefas = CopiaAfazeres.filter(item =>{
        if(idParams === item.userId){
            return item
        }
    })
    res.send(listTarefas).status(200)
})

//exercicio 9

// link documentação : https://documenter.getpostman.com/view/21555253/VUjTmPGy


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;