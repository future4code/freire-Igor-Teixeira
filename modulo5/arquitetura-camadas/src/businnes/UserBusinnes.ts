import { UserData } from "../dataBase/UserData";
import { CreateUser, NewUser, ROLES } from "../models/User";
import { Autheticator } from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";
import { HashManager } from "../services/HashManeger";

const hash = new HashManager()
const generateId = new GenerateId()
const authentication = new Autheticator()
const userData = new UserData()

export class UserBusinnes {
    async create(user:CreateUser){
        const {name,email,password,role} = user
        const id = generateId.generateId()

        if(!name || !email || !role || !password){
            throw new Error("Digite parametros necessarios");
        }
        if(!email.includes("@") || !email.includes(".com")){
            throw new Error("Formato de email invalído");   
        }
        const validEmail = await userData.getuserByEmail(email)

        if(validEmail.length > 0){
            throw new Error("Email ja cadastrado");
        }
        if(password.length <6){
            throw new Error("Digite senha com pelo menos 6 digitos");   
        }
        const newPassword = await hash.hash(password)
        const newUser = new NewUser(id,name,email,newPassword,role)
        await userData.createUser(newUser)
        const token =  authentication.generateToken({id,role})
        return token 
    }
    async login(email:string,password:string){
        if(!email || !password){
            throw new Error("Digite os parametros necessarios");  
        }
        if(password.length < 6){
            throw new Error("Senha invalida minimo 6 digitos");
4        }
        if(!email.includes("@") || !email.includes(".com")){
            throw new Error("Formato de email invalído");   
        }
        const [user] = await userData.getuserByEmail(email)

        if(user.length > 0){
            throw new Error("Email ja cadastrado");
        }
        const newPassword =await hash.compareHash(password, user.password);
        if (!newPassword) {
          throw new Error("Senha inválida");
        }
        console.log(user.id)
        const token =  authentication.generateToken({id:user.id,role:user.role})
        return token 
    }

    async getUser(token:string,name?:string){
        const validToken = authentication.getTokenData(token)
        if(!token ){
            throw new Error("Digite um token");
        }
        const user = await userData.getuserById(validToken.id)
        if(user.length < 1){
            throw new Error("Token invalido");  
        }
        const allUsers = await userData.getuser() 
           const result = allUsers.filter(item => {
                if(name === item.name){
                    return item 
                }else if (!name){
                    return item
                }
            })
        return result
    }

    async deleteUser(token:string,id:string){
        const validToken = authentication.getTokenData(token)
        if(!token ){
            throw new Error("Digite um token");
        }
        const validIdToken= await userData.getuserById(validToken.id)
        if(validIdToken.length < 1){
            throw new Error("Token invalido");  
        }
        const user = await userData.getuserById(id)
        if(user.length < 1){
            throw new Error("id invalido");  
        }
        if(validToken.role !== ROLES.ADMIN){
            throw new Error("Somente administradores podem deletar usuarios");
        }
        const result =  await userData.deleteUser(id)

        return result
        


    }
}