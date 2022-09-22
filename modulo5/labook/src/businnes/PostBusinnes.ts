import { PostData } from "../dataBase/PostData"
import { UserData } from "../dataBase/UserData"
import { CustomError } from "../error/CustomError"
import { InputDTO } from "../models/User"
import { ICreatePostDTO, OCreatePostDTO, Post } from "../models/Post"
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
        
        const {content} = input
        const validToken = this.authenticator.getTokenData(token) 
        const id = this.generateId.generateId()
        if(!content){
            throw new CustomError(422,"Digite os parametros necessários")
        }
        if(!token || !validToken){
            throw new CustomError(401,"Digite um toquem valído");
            
        }
        const date = new Date().toLocaleDateString("pt-BR")
        const newData = this.correctDate.sendDateToDB(date)
        const newPost = new Post(
            id,
            content,
            newData,
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
            content:post.content,
            create_date:newDate,
            user_id:post.user_id,
            likes:post.likes
        } 
        return result 

    }

    getFeed = async () => {
      
    }

    getPostByType = async () => {
      
    }


}