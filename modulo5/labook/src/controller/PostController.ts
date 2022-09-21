import {Request,Response} from "express"
import { ICreatePostDTO } from "../models/Post"
import {PostBusinnes} from "../businnes/PostBusinnes"
import { InputDTO } from "../models/User"

export class PostController {
    constructor(
        private postBusinnes:PostBusinnes
    ){}

    createPost = async (req:Request,res:Response) => {
        try {
            const token = req.headers.authorization
            const newPost:ICreatePostDTO = req.body
            const result = await this.postBusinnes.createPost(token,newPost)
            res.status(200).send({Result:result})
        } catch (error) {
            res.status(error.code || 500).send(error.message || error.sqlMessage) 
        }
    }

    getPostById = async (req:Request,res:Response) => {
        try {
            const input:InputDTO={
             token:req.headers.authorization,
             id:req.params.id
            }
            const result = await this.postBusinnes.getPostById(input)
            res.status(200).send({Result:result})
        } catch (error) {
            res.status(error.code || 500).send(error.message || error.sqlMessage) 
        }
    }

    getFeed = async (req:Request,res:Response) => {
        try {
            
        } catch (error) {
            res.status(error.code || 500).send(error.message || error.sqlMessage) 
        }
    }

    getPostByType = async (req:Request,res:Response) => {
        try {
            
        } catch (error) {
            res.status(error.code || 500).send(error.message || error.sqlMessage) 
        }
    }


}