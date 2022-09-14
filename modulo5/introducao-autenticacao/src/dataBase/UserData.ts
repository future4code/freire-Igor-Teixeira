import { User } from "../models/User"
import { Autheticator } from "../services/Autheticator"
import { DataBase } from "./DataBase"


export class UserData extends DataBase{
    async signUpUser(user:User){
        try{
        await this.getConnection()
        .from("user")
        .insert({
            id:user.getId(),
            email:user.getEmail(),
            password:user.getPassword()
        })

        const newtoken = new Autheticator()
        const token = newtoken.generateToken({id:user.getId()})
        console.log(token)
        return token
    }catch(error){
       return error.sqlMessage
    }
    }

    async loginUser(email:string){
        try{
        const result = await this.getConnection()
        .from("user")
        .select("*")
        .where("email","LIKE",`%${email}%`)

        const user = result
        const newtoken = new Autheticator()
        const token = newtoken.generateToken({id:user[0]})
            console.log(result,user)
        return {result,token}
    }catch(error){
       return error.sqlMessage
    }
    }




}



