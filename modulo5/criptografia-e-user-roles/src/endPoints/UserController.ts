import { Response, Request } from "express";
import { GenerateId } from "../services/GenerateId";
import { UserData } from "../dataBase/UserData";
import { User } from "../models/User";
import { HashManager } from "../services/HashManeger";
import { Autheticator } from "../services/Authenticator";
import { USER_ROLE } from "../types/types";

export class UserController {
  async signUpUser(req: Request, res: Response) {
    let errorStatus = 500;
    try {
      const { email, password,role } = req.body;
      //GERAR ID
      const generateId = new GenerateId();
      const id = generateId.generateId();

      if (password.length < 6 || !password) {
        errorStatus = 422;
        throw new Error(
          "password invalido, digite um valor valido com no minimo 6 digitos"
        );
      }
      if (!email || !email.includes("@") || !email.includes(".com")) {
        errorStatus = 422;
        throw new Error("Email invalido aaa@aaa.com");
      }
      if(!role){
        errorStatus = 422;
            throw new Error('Role inválido, por gentileza informa um role')
        }
      

      const user = new User(id, email, password,role);
      const userData = new UserData();
      const result = await userData.signUpUser(user);

      res.status(202).send({ Token: result });
    } catch (error) {
      res.status(errorStatus).send(error.sqlMessage || error.message);
    }
  }

  async loginUser(req: Request, res: Response) {
    let errorStatus = 500;
    try {
      const { email, password } = req.body;

      if (!email || !email.includes("@") || !email.includes(".com")) {
        errorStatus = 422;
        throw new Error("Formato de email inválido aaa@aaa.com.");
      }

      const userData = new UserData();
      const [result] = await userData.loginUser(email, password);


      const validPassword = new HashManager();
      const passwordValid = await validPassword.compareHash(
        password,
        result.password
      );

      console.log(passwordValid, password, result.password);

      if (!password || password.length < 6 || !passwordValid) {
        errorStatus = 422;
        throw new Error("Password inválido.");
      }

      const newtoken = new Autheticator();
      const token = newtoken.generateToken({ id: result.id,roles:result.role });

      res.status(200).send({ Result: token });
    } catch (error) {
      res.status(errorStatus).send(error.sqlMessage || error.message);
    }
  }

  async getProfile(req:Request,res:Response){
      let errorStatus = 500
      const token = req.headers.authorization as string
      console.log(token,"tokem aquiiii")
    try {
     
        const  tokenData= new Autheticator()
        const validToken = tokenData.getTokenData(token)
        console.log(validToken.roles,"nao foi ou foi ")
        if(validToken.roles !== USER_ROLE.NOMAL){
          errorStatus = 403
            throw new Error("Usuário sem permissão, somente usuário com role = NORMAL, podem ter acesso a esse edpoint")
        }
        const [result] = await new UserData().getProfile()
        const user = {
          id:result.id,
          email:result.email,
          role:result.role
        }
        res.status(200).send({reesult:user})  
    } catch (error) {
      res.status(errorStatus).send(error.sqlMessage || error.message);
    }
  }

}
