export interface ICreateTicketDTO {
  token: string;
  showId: string;
}

export interface IDeleteTicketDTO {
  token: string;
  showId: string;
}

export interface IDeleteTicketDB {
  userId: string;
  showId: string;
}

export interface IChecksTicketDTO {
  userId: string;
  showId: string;
}

export interface OTicketsDTO {
  id: string;
  show_id: string;
  user_id: string;
}

export class Ticket {
  constructor(
    private id: string,
    private showId: string,
    private userId: string
  ) {}
  getId() {
    return this.id;
  }
  getShowId() {
    return this.showId;
  }
  getUserId() {
    return this.userId;
  }
}
