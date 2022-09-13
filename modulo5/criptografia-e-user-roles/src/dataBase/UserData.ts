import { User } from "../models/User"
import { Autheticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManeger"
import { DataBase } from "./DataBase"


export class UserData extends DataBase{
    async signUpUser(user:User){
        
        try{
            const newPassword:string = await new HashManager().hash(user.getPassword())
         await this.getConnection()
        .from("user")
        .insert({
            id:user.getId(),
            email:user.getEmail(),
            password:newPassword,
            role:user.getRole()
        })
        const newtoken = new Autheticator()
        const token = newtoken.generateToken({id:user.getId(),roles:user.getRole()})
        return token
    }catch(error){
       return error.sqlMessage
    }
    }

    async loginUser(email:string,password:string){
        try{
        const result =  await this.getConnection()
        .from("user")
        .select("*")
        .where("email","LIKE",`%${email}%`)
        return result
    }catch(error){
       return error.sqlMessage
    }
    }

    async getProfile(){
        try{
        const result =  await this.getConnection()
        .from("user")
        .select("*")
        return result
    }catch(error){
       return error.sqlMessage
    }
    }


}