import { NewUser } from "../models/User";
import { DataBase } from "./DataBase";

export class UserData extends DataBase{
    async createUser(user:NewUser){
        await this.getConnection()
        .from("User_table")
        .insert({
            id:user.getId(),
            name:user.getName(),
            email:user.getEmail(),
            password:user.getPassword(),
            role:user.getRole()
        })
    }

   async getuserByEmail(email:string){
       const result = await this.getConnection()
        .from("User_table")
        .select()
        .where("email", `${email}`)
        return result
    }
    async getuserById(id:string){
        const result = await this.getConnection()
         .from("User_table")
         .select("name","email","role")
         .where("id", `${id}`)
         return result
     }

     async getuser(){
        const result = await this.getConnection()
         .from("User_table")
         .select("id","name","email","role")
         return result
     }

     async deleteUser(id:string){
        await this.getConnection()
        .from("User_table")
        .delete()
        .where("id", `${id}`)
        return "Usuario deletado com sucesso"
     }
}