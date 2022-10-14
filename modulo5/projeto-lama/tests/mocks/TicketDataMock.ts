import {
  IChecksTicketDTO,
  IDeleteTicketDB,
  OTicketsDTO,
  Ticket,
} from "../../src/models/Tickets";
import { DataBase } from "../../src/dataBase/DataBase";

export class TicketsDataMock extends DataBase {
  public static TABLE_TICKET = "Ticket_lama";

  createTickets = async (input: Ticket) => {
    const ticket: OTicketsDTO = {
      id: input.getId(),
      show_id: input.getShowId(),
      user_id: input.getUserId(),
    };
    return "ticket created successfully";
  };

  deleteTickets = async (input: IDeleteTicketDB) => {
    await this.getConnection()
      .from(TicketsDataMock.TABLE_TICKET)
      .delete()
      .where("show_id", `${input.showId}`)
      .andWhere("user_id", `${input.userId}`);
    return "ticket deleted successfully";
  };

  getTickets = async (input: IChecksTicketDTO): Promise<any> => {
    const result = {
      id: "200",
      show_id: "201",
      user_id: "202,",
    };
    return result;
  };

  getTicketsById = async () => {
    const result: OTicketsDTO[] = await this.getConnection()
      .from(TicketsDataMock.TABLE_TICKET)
      .select("*");
    return result;
  };
}
