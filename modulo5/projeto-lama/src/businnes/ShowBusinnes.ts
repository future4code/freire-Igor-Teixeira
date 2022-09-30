import { Console } from "console";
import { ShowData } from "../dataBase/ShowData";
import { TicketsData } from "../dataBase/TicketData";
import { UserData } from "../dataBase/UserData";
import { CustomError } from "../error/CustomError";
import { ICreateShowDTO, OShowDTO, Show } from "../models/Show";
import { OTicketsDTO } from "../models/Tickets";
import { ROLES } from "../models/User";
import { Autheticator } from "../services/Authenticator";
import { CorrectDate } from "../services/CorrectData";
import { GenerateId } from "../services/GenerateId";

export class ShowBusinnes {
  constructor(
    private generateId: GenerateId,
    private userData: UserData,
    private autheticator: Autheticator,
    private showData: ShowData,
    private ticketsData: TicketsData
  ) {}

  createShow = async (input: ICreateShowDTO) => {
    const { token, band, starts } = input;
    const validToken = this.autheticator.getTokenData(token);
    const validUser = await this.userData.getUserByIdDb(validToken.id);
    const validShow = await this.showData.getShowPublic();
    if (!token || !band || !starts) {
      throw new CustomError(422, "Enter all parameters");
    }
    if (!validUser || validToken.roles !== ROLES.ADMIN) {
      throw new CustomError(401, "unauthorized user");
    }
    const date = starts.split("/");
    if (Number(date[0]) < 5 && Number(date[1]) !== 12) {
      throw new CustomError(403, "Date cannot be earlier than December 5th");
    }

    for (const show of validShow) {
      const dateFormatedDB = new CorrectDate()
        .currentDateFormatted(show.starts_at)
        .split("/");
      if (
        Number(date[0]) === Number(dateFormatedDB[0]) &&
        Number(date[1]) === Number(dateFormatedDB[1])
      ) {
        throw new CustomError(404, "there is already a show that day");
      }
    }

    const correctDate = new CorrectDate().sendDateDb(starts);
    const id = this.generateId.generateId();
    const newShow = new Show(id, correctDate, band);
    const result = await this.showData.createShowDb(newShow);
    return result;
  };

  getShow = async () => {
    const response: OShowDTO[] = await this.showData.getShowPublic();
    const ticket: OTicketsDTO[] = await this.ticketsData.getTicketsById();

    const shows = response.map((showDB) => {
      const newTiquet = ticket.filter((tiquetDB) => {
        return showDB.id === tiquetDB.show_id;
      });
      const dateCorrect = new CorrectDate().currentDateFormatted(
        showDB.starts_at
      );
      showDB.tickets = showDB.tickets - newTiquet.length;
      showDB.starts_at = dateCorrect;
      return showDB;
    });
    return shows;
  };
}
