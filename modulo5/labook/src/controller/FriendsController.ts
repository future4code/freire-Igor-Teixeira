import { Request, Response } from "express";
import { Friendsbusinnes } from "../businnes/FriendsBusinnes";
import { InputDTO } from "../models/Friends";

export class FriendsController {
  constructor(private friendsBusinnes: Friendsbusinnes) {}

  makeFriendship = async (req: Request, res: Response) => {
    try {
      const input: InputDTO = {
        token: req.body.token,
        id: req.body.id,
      };
      const result = await this.friendsBusinnes.makeFriendship(input);

      res.status(201).send({ Result: result });
    } catch (error) {
      res.status(500).send(error.message || error.sqlMessage);
    }
  };

  unfriend = async (req: Request, res: Response) => {
    try {
      const input: InputDTO = {
        token: req.headers.authorization,
        id: req.params.id,
      };
      const result = await this.friendsBusinnes.unfriend(input);
      res.status(201).send({ Result: result });
    } catch (error) {
      res.status(500).send(error.message || error.sqlMessage);
    }
  };
}
