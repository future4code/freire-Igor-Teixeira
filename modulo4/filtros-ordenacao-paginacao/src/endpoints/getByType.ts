import { connection } from "../data/connection"
import {  user } from "../types"
import { Request, Response } from "express"

export const getByType = async (req:Request,res:Response):Promise<void> => {
   const type = req.params.type
   try {
      const result = await connection("aula48_exercicio").select("*").where("type","LIKE",`%${type}%`)

      const users = result.map(toUser)

      res.status(200).send(users)

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


