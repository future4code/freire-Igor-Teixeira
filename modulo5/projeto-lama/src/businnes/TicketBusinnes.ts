import { ShowData } from "../dataBase/ShowData";
import { TicketsData } from "../dataBase/TicketData";
import { UserData } from "../dataBase/UserData";
import { CustomError } from "../error/CustomError";
import {
  IChecksTicketDTO,
  ICreateTicketDTO,
  IDeleteTicketDB,
  IDeleteTicketDTO,
  Ticket,
} from "../models/Tickets";

import { ROLES } from "../models/User";
import { Autheticator } from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";

export class TicketsBusinnes {
  constructor(
    private generateId: GenerateId,
    private ticketData: TicketsData,
    private authenticator: Autheticator,
    private userData: UserData,
    private showData: ShowData
  ) {}

  createTickets = async (input: ICreateTicketDTO) => {
    const { token, showId } = input;
    const validToken = this.authenticator.getTokenData(token);
    const getUser = await this.userData.getUserByIdDb(validToken.id);
    const getShow = await this.showData.getShowIdDb(showId);
    const checkTicket: IChecksTicketDTO = {
      userId: validToken.id,
      showId: showId,
    };
    const validTicket = await this.ticketData.getTickets(checkTicket);
    if (!token || !showId) {
      throw new CustomError(422, "Enter all parameters");
    }
    if (!getShow) {
      throw new CustomError(404, "show not found");
    }
    if (
      !getUser ||
      (validToken.roles !== ROLES.NOMAL && validToken.roles !== ROLES.ADMIN)
    ) {
      throw new CustomError(401, "unauthorized user");
    }

    if (validTicket.length > 0) {
      throw new CustomError(404, "not authorized only one booking per person");
    }
    const id = this.generateId.generateId();
    const newticket = new Ticket(id, showId, validToken.id);

    const result = await this.ticketData.createTickets(newticket);
    return result;
  };

  deleteTickets = async (input: IDeleteTicketDTO) => {
    const { token, showId } = input;
    const validToken = this.authenticator.getTokenData(token);
    const getUser = await this.userData.getUserByIdDb(validToken.id);
    const getShow = await this.showData.getShowIdDb(showId);
    const checkTicket: IChecksTicketDTO = {
      userId: validToken.id,
      showId: showId,
    };
    const validTicket = await this.ticketData.getTickets(checkTicket);
    if (!token || !showId) {
      throw new CustomError(422, "Enter all parameters");
    }
    if (!getUser) {
      throw new CustomError(401, "unauthorized enter token valid");
    }
    if (!getShow) {
      throw new CustomError(404, "show not found");
    }
    if (validTicket.length < 1) {
      throw new CustomError(401, "You don't have a reservation for this show");
    }
    const deleteReservation: IDeleteTicketDB = {
      userId: validToken.id,
      showId,
    };

    const result = await this.ticketData.deleteTickets(deleteReservation);
    return result;
  };
}
