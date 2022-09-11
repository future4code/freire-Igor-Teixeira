import { connection } from "../data/connection"
import {  user } from "../types"
import { Request, Response } from "express"

export const getUserbyPag = async (req:Request,res:Response):Promise<void> => {
    let size: number = Number(req.query.size)
    let page: number = Number(req.query.page)
    if (page < 1 || isNaN(page)) {
        page = 1
    }
    let offset = size * (page - 1)
   try {
      const result = await connection("aula48_exercicio").limit(size).offset(offset)
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


