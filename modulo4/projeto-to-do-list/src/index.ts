import express from "express";
import connection from "./connection";
import { AddressInfo } from "net";

const app = express();

app.use(express.json());



const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;

const correctDate = (data: string) => {
  let newDate = data.split('/')
  return `${newDate[2]}-${newDate[1]}-${newDate[0]}`
}

const currentDateFormatted = (data: string) => {
  let newDate: Date = new Date(data)
  const newFormattedDate: string = ((newDate.getDate())) + "/" + ((newDate.getMonth() + 1)) + "/" + newDate.getFullYear()
  return newFormattedDate
}

// exercicio 6
app.get("/user/all",async (req,res)=>{
  let errStatus = 500
  const token = req.headers.authorization
  try{
    if(!token){
      errStatus = 401
      throw new Error("Digite authorization");
    }
    const result = await connection("ListUser").select("*")
    res.status(200).send({users: result})
  }catch(error:any){
    res.status(errStatus).send(error.sqlMessage || error.message)
  }
})

//exercicio 2 
app.get("/user/:id",async (req,res)=>{
  let errStatus = 500
  const id = req.params.id
  try{
    if(!id){
      errStatus = 401
      throw new Error("Entre com params id por favor ");
    }
    const result = await connection("ListUser").select("id","nickname").where({id:id})
    res.status(200).send(result)
  }catch(error:any){
    res.status(400).send(error.sqlMessage || error.message)
  }
})

// exercicio 1
app.post("/user", async (req,res)=>{
  const {name,nickname,email} = req.body
  let errStatus = 500
    try{
      if(!name || !nickname || !email){
        errStatus = 422
        throw new Error("Digite todos os parametros");
      }
      await connection("ListUser").insert({
        id:String(Date.now()),
        name,
        nickname,
        email
      })
      res.status(201).send("Usuario cadastrado com sucesso")
    }catch (error:any){
      res.status(errStatus).send( error.message || error.sqlMessage )
    }
})

// exercicio 3
app.put("/user/edit/:id",async (req,res)=>{
  let errStatus = 500
  const id = req.params.id
  const {name,nickname} = req.body

  ()
  try{
    if(!id){
      errStatus = 401
      throw new Error("Entre com params id por favor ");
    }else if (!name || !nickname){
      errStatus = 401
      throw new Error("Entre com parametros por favor");
    }
    const result = await connection("ListUser").select("*").where({id:id})
    .update({
      name,
      nickname
    })
    res.status(200).send("Dados alterados com sucesso !")
  }catch(error:any){
    res.status(errStatus).send(error.sqlMessage || error.message)
  }
})

//exercicio 4 
app.post("/task",async (req,res)=>{
  let errStatus = 500
  let {title,description,limitDate,userId} = req.body
  limitDate = correctDate(limitDate)
  try{
    if(!title || !description || !limitDate || !userId){
      errStatus = 401
      throw new Error("Entre com os parametros");
    }
    await connection("ListTask").insert({
      id: String(Date.now()),
      title,
      description,
      status: "to_do",
      limit_date: limitDate,
      user_id: userId
    })
    res.status(201).send("Tarefa cadastrada com sucesso")

  }catch(error:any){
    res.status(errStatus).send(error.sqlMessage || error.message)
  }
})

//exercicio 5
app.get("/task/:id",async (req,res)=>{
  let errStatus = 500
  const id = req.params.id
  try{
    if(!id){
      errStatus= 401
      throw new Error("Digite um id valido ");
    }
    const result = await connection("ListTask").select("*").where({id:id})
    const newresult = result.map(item => {
      item.limit_date = currentDateFormatted(item.limit_date)
      return item
    })
    res.status(200).send(newresult)

  }catch(error:any){
    res.status(errStatus).send(error.sqlMessage || error.message)
  }
})

// exercicio 8
app.get("/user/:id",async (req,res)=>{
  let errStatus = 500
  try{

  }catch(error:any){
    res.status(errStatus).send(error.sqlMessage || error.message)
  }
})

// exercicio 7
app.get("/task?creatorUserId=id",async (req,res)=>{
  let errStatus = 500
  const id = req.query.creatorUserId as string
  try{
    if(!id){
      errStatus= 401
      throw new Error("Digite um id valido ");
    }
    const result = await connection("ListTask").select("*").where("user_id",id)
    // select("id","title","description","limit_date","user_id","status","ListUser.nickname").where("ListUser.id",id)
    res.status(200).send(result)
  }catch(error:any){
    res.status(errStatus).send(error.sqlMessage || error.message)
  }
})