import express from "express";
import { Produtos,Itens } from "./data";
import { AddressInfo } from "net";

import { send } from "process";
import { userInfo } from "os";

const app = express();

app.use(express.json());

const produtos = Produtos

//exercicio 1

app.get("/test", (req,res)=> res.send("A API esta funcionando").status(200))

// exercicio 3 e 7

app.post("/produtos/novo",(req,res)=>{
  const  {name , price} = req.body
  try{ 
  if (!name || !price) { 
    res.status(422) ; throw new Error("informar name e price.")
  } else if (typeof name !== "string") {
     res.status(422); throw new Error("O campo name, deve ser informado como string")
  } else if (typeof price !== "number") {
     res.status(422); throw new Error("O campo price, deve ser informado como number")
  } else if (typeof price !== "number") {
     res.status(422); throw new Error("O campo price, deve ser informado como number")
  } else if (price <= 0) {
    res.status(422);throw new Error("O preço deve ser maior que 0")
  }else{
      produtos.push({
        id:String(Date.now()),
        name,
        price
      })
      res.status(200).send({produtos})
    }
  }catch (error: any){
    error.message ? res.send(error.message) :  res.status(500)
}
})

// exercicio 4 e desafio 10

app.get("/produtos",(req,res)=>{
    const token = req.headers.authorization === "igor"
    const  name  = req.query.key
    const results  = name != undefined ? produtos.filter(user => user.name.includes(String(name))) : produtos.map(item=>item)
    
    try{
      if(!token){
        res.status(402)
        throw new Error()
      }
      res.send(results).status(200)
    


      // if(!name){
      //   res.status(200).send(results)
      // }else{
      //   res.status(200).send(results)
      // }
        
      

    }catch{
      res.status(401).send("Erro authorization")
    }
   
})

// exercicio 5 , 8 e ddESAFIO 11

app.put("/produtos/:id",(req,res)=>{
  const token = req.headers.authorization === "igor"
  const idProduto = String(req.params.id)
  const price = Number(req.body.price)
  const name = req.body.name
  const idArr = produtos.map(item => item.id)
  try{
    if(!token){
      res.status(422)
      throw new Error("Digite seu token no headers")
    }else if ((typeof price !== "number")){
      res.status(422)
      throw new Error("o parametro price precisa ser do tipo number"); 
    }else if(price <= 0){
      res.status(422)
      throw new Error("Price precisa ser maior que 0");
    }else if(!idArr.includes(idProduto) || !idProduto){
      res.status(422)
      throw new Error("Id invalido "); 
    }else if(!name && !price){
      res.status(422)
      throw new Error("Digite os parametros: name e price ");
    }else{
      produtos.map(item =>{
        if(item.id === idProduto){
          name ? item.name = name : item.name
          price ? item.price = price : item.price
          return item
        }
      })
      res.status(200).send(produtos)
    }
  }catch (error:any){
    error.message ? res.send(error.message) :  res.status(500)
  }
})

// exercicio 6 e 9

app.delete("/produtos/delete/:id",(req,res)=>{
  const token = req.headers.authorization === "igor"
  const idProduto = req.params.id
  const idArr = produtos.map(item => item.id)
  try{
    if( !token){
      res.status(401)
     throw new Error("digite um token valido ")
    }else if(!idArr.includes(idProduto) || !idProduto) {
      res.status(422)
      throw new Error("Digite um id de produto valido ");
    }else{
      const novo = produtos.map(item=>{
        if(item.id != idProduto){
          return item
        }
      })
      res.status(200).send(novo)
    }
  }catch(error:any){
    error.message ? res.send(error.message) :  res.status(500)
  }
})

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;