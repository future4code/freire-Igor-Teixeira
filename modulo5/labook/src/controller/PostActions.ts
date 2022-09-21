import {Request,Response} from "express"

class PostActionsController {

    like = async (req:Request,res:Response)=>{
        try {
            
        } catch (error) {
            res.status(500).send(error.message || error.sqlMessage) 
        }
    }

    dislike = async (req:Request,res:Response)=>{
        try {
            
        } catch (error) {
            res.status(500).send(error.message || error.sqlMessage) 
        }
    }

    commentsPost = async (req:Request,res:Response)=>{
        try {
            
        } catch (error) {
            res.status(500).send(error.message || error.sqlMessage) 
        }
    }

}