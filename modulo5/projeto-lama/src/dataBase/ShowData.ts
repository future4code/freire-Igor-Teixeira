import { OShowDTO, Show } from "../models/Show";
import { DataBase } from "./DataBase";

export class ShowData extends DataBase {
  protected TABLE_SHOWS = "Show_lama";

  createShowDb = async (input: Show): Promise<string> => {
    await this.getConnection().from(this.TABLE_SHOWS).insert({
      id: input.getId(),
      band: input.getBand(),
      starts_at: input.getStarts(),
      tickets: input.getTickets(),
    });
    return "Show created successfully";
  };

  getShowPublic = async () => {
    const result = await this.getConnection()
      .from(this.TABLE_SHOWS)
      .select("*");
    return result;
  };

  getShowIdDb = async (input: string) => {
    const result = await this.getConnection()
      .from(this.TABLE_SHOWS)
      .select("*")
      .where("id", `${input}`);
    return result;
  };
}
