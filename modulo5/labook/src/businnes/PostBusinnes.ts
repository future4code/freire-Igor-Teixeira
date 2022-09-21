import { PostData } from "../dataBase/PostData"
import { UserData } from "../dataBase/UserData"
import { CustomError } from "../error/CustomError"
import { InputDTO } from "../models/User"
import { ICreatePostDTO, OCreatePostDTO, Post, TYPEPOST } from "../models/Post"
import { Autheticator } from "../services/Authenticator"
import { CorrectDate } from "../services/CorrectDate"
import { GenerateId } from "../services/GenerateId"

export class PostBusinnes {
    constructor(
        private userData:UserData,
        private authenticator:Autheticator,
        private generateId:GenerateId,
        private postData:PostData,
        private correctDate:CorrectDate
    ){}

    createPost = async (token:string,input:ICreatePostDTO) => {
        
        const {photo,description,type} = input
        const validToken = this.authenticator.getTokenData(token) 
        const id = this.generateId.generateId()
        if(!photo || !description  || !type){
            throw new CustomError(422,"Digite os parametros necessários")
        }
        if(!token || !validToken){
            throw new CustomError(401,"Digite um toquem valído");
            
        }
        if(type !== TYPEPOST.NORMAL && type !== TYPEPOST.EVENTO){
            throw new CustomError(422,"Digite um type valído");  
        }
        const date = new Date().toLocaleDateString("pt-BR")
        const newData = this.correctDate.sendDateToDB(date)
        const newPost = new Post(
            id,
            photo,
            description,
            newData,
            type,
            validToken.id
        )
        const result = await this.postData.Create(newPost)

        return result
    }

    getPostById = async (input:InputDTO) => {

        const validToken =  this.authenticator.getTokenData(input.token)
        const user = await this.userData.getUserById(validToken.id)

        if(!input.token || !input.id){
            throw new CustomError(422,"digite os parametros necessários")
        }
        if(user.length < 0){
            throw new CustomError(401,"token invalido")
        }
        const [post] =  await this.postData.getPostById(input.id)
        const newDate = this.correctDate.currentDateFormatted(post.create_date)
        const result:OCreatePostDTO = {
            id:post.id,
            photo:post.photo,
            description:post.description,
            create_date:newDate,
            type_post:post.type_post,
            user_id:post.user_id
        } 
        return result 

    }

    getFeed = async () => {
      
    }

    getPostByType = async () => {
      
    }


}