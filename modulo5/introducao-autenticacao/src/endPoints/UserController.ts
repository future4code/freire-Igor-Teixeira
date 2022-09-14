import { Response, Request } from "express";
import { GenerateId } from "../services/generateId";
import { UserData } from "../dataBase/UserData";
import { User } from "../models/User";
export class UserController {

  async createrUser(req: Request, res: Response) {
    let errorStatus = 500;
    try {
      const { email, password } = req.body;
      const generateId = new GenerateId();
      const id = generateId.generateId();
      if (!email || !password) {
        errorStatus = 422;
        throw new Error("Digite os parametros necessarios");
      } else if (email.indexOf("@") === -1) {
        errorStatus = 422;
        throw new Error("Formato de email invalido => @");
      } else if (password.length < 6) {
        errorStatus = 422;
        throw new Error("Senha muito curta no minimo 6 digitos");
      }

      const user = new User(id, email, password);
      const userData = new UserData();
      const result = await userData.signUpUser(user);

      res.status(202).send({ Token: result });
    } catch (error) {
      res.status(errorStatus).send(error.sqlMessage || error.message);
    }
}

    async loginUser(req:Request,res:Response){
        let errorStatus = 500
        try {
            const {email,password} = req.body
            
            if(!email || ! password){
                errorStatus = 422;
                throw new Error("Digite os parametros necessarios")
            }
            const userData = new UserData();
            const result = await userData.signUpUser(email);

            res.status(200).send({Result:result})
        } catch (error) {
            res.status(errorStatus).send(error.sqlMessage || error.message)
        }
    }
  

    // async loginUser(req:Request,res:Response){
    //     let errorStatus = 500
    //     try {
    //         if(){

    //         }
    //         res.status(200).send({Result:result})
    //     } catch (error) {
    //         res.status(errorStatus).send(error.sqlMessage || error.message)
    //     }
    // }


}
