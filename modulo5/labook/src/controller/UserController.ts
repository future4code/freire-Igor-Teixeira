import { Request, Response } from "express";
import { UserBusinnes } from "../businnes/UserBusinnes";

import { ILoginDTO, ISignupDTO } from "../models/User";

export class UserController {
  constructor(private userBusinnes: UserBusinnes) {}

  signup = async (req: Request, res: Response) => {
    try {
      const newUser: ISignupDTO = req.body;

      const result = await this.userBusinnes.signupBusinnes(newUser);

      res.status(201).send({ Token: result });
    } catch (error) {
      res.status(error.code || 500).send(error.message || error.sqlMessage);
    }
  };

  login = async (req: Request, res: Response) => {
    try {
      const loginUser: ILoginDTO = req.body;

      const result = await this.userBusinnes.loginBusines(loginUser);

      res.status(201).send({ Token: result });
    } catch (error) {
      res.status(error.code || 500).send(error.message || error.sqlMessage);
    }
  };
}
