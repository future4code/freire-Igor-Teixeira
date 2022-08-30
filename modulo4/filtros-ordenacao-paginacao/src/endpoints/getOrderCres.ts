import { connection } from "../data/connection"
import {  user } from "../types"
import { Request, Response } from "express"

export const getOrderBycres = async (req:Request,res:Response):Promise<void> => {
   
   try {
    let order = req.query.order
    let sort = req.query.sort
    if(sort !== "name" && sort !== "type"){
        sort = "email"
    }
    if(order !== "asc" && order !== "desc"){
        order = "asc"
    }
      const result = await connection("aula48_exercicio")
      .orderBy(sort,order)
      const users = result.map(toUser)
      res.status(200).send(result)

   } catch (error) {
      res.status(500).send("Internal server error")
   }
}
const toUser = (input: any): user => {
   return {
      id: input.id,
      name: input.name,
      email: input.email,
      type: input.type
   }
}


