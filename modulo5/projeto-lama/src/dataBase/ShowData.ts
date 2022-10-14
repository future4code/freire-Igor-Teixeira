import { OShowDTO, Show } from "../models/Show";
import { DataBase } from "./DataBase";

export class ShowData extends DataBase {
  public static TABLE_SHOWS = "Show_lama";

  createShowDb = async (input: Show): Promise<string> => {
    await this.getConnection().from(ShowData.TABLE_SHOWS).insert({
      id: input.getId(),
      band: input.getBand(),
      starts_at: input.getStarts(),
      tickets: input.getTickets(),
    });
    return "Show created successfully";
  };

  getShowPublic = async (): Promise<OShowDTO[] | undefined> => {
    const result: OShowDTO[] = await this.getConnection()
      .from(ShowData.TABLE_SHOWS)
      .select("*");
    return result;
  };

  getShowIdDb = async (input: string): Promise<OShowDTO[] | undefined> => {
    const result: OShowDTO[] = await this.getConnection()
      .from(ShowData.TABLE_SHOWS)
      .select("*")
      .where("id", `${input}`);
    return result;
  };
}
