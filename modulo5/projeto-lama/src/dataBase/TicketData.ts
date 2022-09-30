import {
  IChecksTicketDTO,
  IDeleteTicketDB,
  OTicketsDTO,
  Ticket,
} from "../models/Tickets";
import { DataBase } from "./DataBase";

export class TicketsData extends DataBase {
  public static TABLE_TICKET = "Ticket_lama";

  createTickets = async (input: Ticket) => {
    await this.getConnection().from(TicketsData.TABLE_TICKET).insert({
      id: input.getId(),
      show_id: input.getShowId(),
      user_id: input.getUserId(),
    });
    return "ticket created successfully";
  };

  deleteTickets = async (input: IDeleteTicketDB) => {
    await this.getConnection()
      .from(TicketsData.TABLE_TICKET)
      .delete()
      .where("show_id", `${input.showId}`)
      .andWhere("user_id", `${input.userId}`);
    return "ticket deleted successfully";
  };

  getTickets = async (input: IChecksTicketDTO) => {
    const result = await this.getConnection()
      .from(TicketsData.TABLE_TICKET)
      .select("*")
      .where("show_id", `${input.showId}`)
      .andWhere("user_id", `${input.userId}`);
    return result;
  };

  getTicketsById = async () => {
    const result: OTicketsDTO[] = await this.getConnection()
      .from(TicketsData.TABLE_TICKET)
      .select("*");
    return result;
  };
}
