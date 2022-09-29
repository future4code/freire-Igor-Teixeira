import { Request, Response } from "express";
import { ShowBusinnes } from "../businnes/ShowBusinnes";
import { ICreateShowDTO } from "../models/Show";

export class ShowControlles {
  constructor(private showBusinnes: ShowBusinnes) {}

  createShow = async (req: Request, res: Response) => {
    try {
      const input: ICreateShowDTO = {
        token: req.headers.authorization,
        band: req.body.band,
        starts: req.body.starts,
      };
      const result = await this.showBusinnes.createShow(input);
      res.status(201).send({ Result: result });
    } catch (error) {
      res.status(error.code || 500).send(error.message || error.sqlMessage);
    }
  };

  getshow = async (req: Request, res: Response) => {
    try {
      const result = await this.showBusinnes.getShow();
      res.status(200).send({ Result: result });
    } catch (error) {
      res.status(error.code || 500).send(error.message || error.sqlMessage);
    }
  };
}
