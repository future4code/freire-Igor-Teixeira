import { OShowDTO, Show } from "../../src/models/Show";
import { DataBase } from "../../src/dataBase/DataBase";

export class ShowDataMock extends DataBase {
  public static TABLE_SHOWS = "Show_lama";

  createShowDb = async (input: Show): Promise<string> => {
    const create: OShowDTO = {
      id: input.getId(),
      band: input.getBand(),
      starts_at: input.getStarts(),
      tickets: input.getTickets(),
    };
    return "Show created successfully";
  };

  getShowPublic = async (): Promise<OShowDTO[] | undefined> => {
    const result: OShowDTO[] = [
      {
        id: "201",
        band: "Banda teste",
        starts_at:
          "Wed Dec 07 2022 00:00:00 GMT-0300 (Horário Padrão de Brasília)",
        tickets: 5000,
      },
    ];

    return result;
  };

  getShowIdDb = async (input: string): Promise<OShowDTO[] | undefined> => {
    switch (input) {
      case "201":
        const show: OShowDTO[] = [
          {
            id: "201",
            band: "Banda teste",
            starts_at: "26/12/20220",
            tickets: 5000,
          },
        ];
        return show;
      case "202":
        const showSecond: OShowDTO[] = [
          {
            id: "202",
            band: "Banda teste2",
            starts_at: "26/12/20220",
            tickets: 5000,
          },
        ];
      default:
        return undefined;
    }
  };
}
