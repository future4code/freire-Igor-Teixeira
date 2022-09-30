export interface ICreateShowDTO {
  token:string
  band:string,
  starts:string
}
export interface OShowDTO{
    id: string,
    starts_at: string,
    band: string,
    tickets:number,
}

export interface IShowDTO{
  id: string,
  starts_at: string,
  band: string,
  tickets:number,
}



export class Show {
  constructor(
    private id: string,
    private starts: string,
    private band: string,
    private tickets:number = 5000
  ) {}

  getId() {
    return this.id;
  }
  getStarts() {
    return this.starts
  }
  getBand() {
    return this.band;
  }
  getTickets() {
    return this.tickets;
  }
 

}
