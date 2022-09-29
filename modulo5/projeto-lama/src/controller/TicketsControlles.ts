import { Request, Response } from "express";
import { TicketsBusinnes } from "../businnes/TicketBusinnes";
import { ICreateTicketDTO, IDeleteTicketDTO } from "../models/Tickets";

export class TicketsControlles {
  constructor(private ticketsBusinnes: TicketsBusinnes) {}

  createTickets = async (req: Request, res: Response) => {
    try {
      const input: ICreateTicketDTO = {
        token: req.headers.authorization,
        showId: req.body.showId,
      };
      const result = await this.ticketsBusinnes.createTickets(input);
      res.status(201).send({ Result: result });
    } catch (error) {
      res.status(error.code || 500).send(error.message || error.sqlMessage);
    }
  };

  deleteTickets = async (req: Request, res: Response) => {
    try {
      const input: IDeleteTicketDTO = {
        token: req.headers.authorization,
        showId: req.params.id,
      };
      const result = await this.ticketsBusinnes.deleteTickets(input);
      res.status(200).send({ Result: result });
    } catch (error) {
      res.status(error.code || 500).send(error.message || error.sqlMessage);
    }
  };
}
