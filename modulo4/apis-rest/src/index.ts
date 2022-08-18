import express from "express";
import { Data,users } from "./data";

import { AddressInfo } from "net";

const app = express();

app.use(express.json());

//exercicio 1

app.get("/users",(req,res)=>{
  const token = req.headers.authorization === "igor"
  const type: string = req.query.type as string
  const novoType = type != undefined ? users.map(item => item.type) : users.map(item =>item)
  // const allUsers = users.map(item => item)
  try{
    if(!token){
      res.status(401)
      throw new Error("headers authorization invalid");
    }else if (type !== String(novoType)){
      res.status(401)
      throw new Error("Enter a valid type ");
    }

    res.status(200).send(novoType)

  }catch(error:any){
    res.send(error.message)
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