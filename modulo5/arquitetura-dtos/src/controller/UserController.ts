import { Request,Response } from "express"
import { UserBusinnes } from "../businnes/UserBusinnes"
import { CreateUser } from "../models/User"
export class UserController {
    async signup(req:Request,res:Response){
        try {
            const {name,email,password,role} = req.body
            const newUser:CreateUser = {
                name,
                email,
                password,
                role,
            }
            const result = await new UserBusinnes().create(newUser)            
            res.status(201).send({token:result})
        } catch (error) {
            res.status(500).send(error.message || error.sqlMessage)
        }

    }

    async login(req:Request,res:Response){
        try {
            const {email,password} = req.body 
            const result = await new UserBusinnes().login(email,password)          
            res.status(201).send({token:result})
        } catch (error) {
            res.status(500).send(error.message || error.sqlMessage)
        }

    }

    async getUser(req:Request,res:Response){
        try {
            const token = req.headers.authorization
            const name = req.query.name as string
            const result = await new UserBusinnes().getUser(token,name)         
            res.status(201).send({result:result})
        } catch (error) {
            res.status(500).send(error.message || error.sqlMessage)
        }

    }

    async deleteUser(req:Request,res:Response){
        try {
            const token = req.headers.authorization
            const id = req.params.id
            const result = await new UserBusinnes().deleteUser(token,id)       
            res.status(201).send({result:result})
        } catch (error) {
            res.status(500).send(error.message || error.sqlMessage)
        }

    }


}