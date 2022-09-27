import { Request, Response } from "express";
import { LikesBusinnes } from "../businnes/LikesBusinnes";

import { IInputDTO } from "../models/Likes";

export class LikesController {
  constructor(private likesbusinnes: LikesBusinnes) {}

  like = async (req: Request, res: Response) => {
    try {
      const input: IInputDTO = req.body;
      const result = await this.likesbusinnes.like(input);
      res.status(201).send({ result: result });
    } catch (error) {
      res.status(500).send(error.message || error.sqlMessage);
    }
  };

  dislike = async (req: Request, res: Response) => {
    try {
      const input: IInputDTO = {
        id: req.params.id,
        token: req.headers.authorization,
      };
      const result = await this.likesbusinnes.dislike(input);
      res.status(201).send({ result: result });
    } catch (error) {
      res.status(500).send(error.message || error.sqlMessage);
    }
  };
}
