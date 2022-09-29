import { Request, Response } from "express";
import { UserBusinnes } from "../businnes/UserBusinnes";
import { IloginDTO, ISignupDTO } from "../models/User";

export class UserController {
  constructor(private userBusinnes: UserBusinnes) {}

  signup = async (req: Request, res: Response) => {
    try {
      const input: ISignupDTO = req.body;
      const result = await this.userBusinnes.signupBusinnes(input);
      res.status(201).send({ Token: result });
    } catch (error) {
      res.status(error.code || 500).send(error.message || error.sqlMessage);
    }
  };

  login = async (req: Request, res: Response) => {
    try {
      const input: IloginDTO = req.body;
      const result = await this.userBusinnes.loginBusinnes(input);
      res.status(201).send({ Token: result });
    } catch (error) {
      res.status(error.code || 500).send(error.message || error.sqlMessage);
    }
  };
}
