import express from "express";
import { PersonalData } from "./dados";

import { AddressInfo } from "net";
import { send } from "process";

const app = express();

app.use(express.json());

//teste
app.get("/", (req, res) => {  
    res.status(200 )        
    res.send("requisição ok ")
})

// retorna usuarios
app.get("/users",(req,res)=>{
  if(req.headers.key === "igor"){
    res.status(200)
    const listUser  = PersonalData.map((item)=> item )
    res.send(listUser)
  }else{
    res.send("header invalido")
    res.status(401)
  }
}) 

app.get("/users/posts",(req,res)=>{
  if(req.headers.key === "igor"){
    const listaPost = PersonalData.map((item)=> item.post)
    res.send(listaPost)
    res.status(200 )
  }else{
    res.send("erro")
    res.status(401)
    
  }
})

app.get("/users/:postId",(req,res)=>{
  
  const listaPost = PersonalData.map((item)=>{
    if(Number(req.params.postId) === item.id){
       return item.post   
    }else{
      return undefined
    }
  })
  if(listaPost != undefined){
    return res.send(listaPost)
  }else {
    res.send("Erro id invalido")
  } 
})

app.delete("/users/deletepost", (req, res) => {
  const post = PersonalData.map((item)=>item?.post).flat(1)
  const id = Number(req.query.id)
  if (!id) res.status(400).send("ID inválido")
  const deletePost = post.filter((item) => {
      if (item.postId !== id) {
        console.log(post)
          return post
      }else {
        return undefined
      }
  })

  deletePost != undefined ? res.status(200).send(deletePost) : res.send("id invalido")
})

// exercicio 10

app.delete("/users/deleteUser", (req, res) => {
  const id = Number(req.query.id)
  if (!id) res.status(400).send("ID inválido")
  const deleteUser = PersonalData.filter((user) => {
      if (user.id !== id) {
          return user
      }else{
        return undefined
      }
  })
  deleteUser != undefined ? res.status(200).send(deleteUser): res.send("Id invalido")
})


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;