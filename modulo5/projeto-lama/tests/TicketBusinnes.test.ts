import { TicketsBusinnes } from "../src/businnes/TicketBusinnes";
import { ICreateTicketDTO, IDeleteTicketDTO } from "../src/models/Tickets";
import { AutheticatorMock } from "./mocks/AuthenticatorMock";
import { GenerateIdMock } from "./mocks/GenerateIdMock";
import { ShowDataMock } from "./mocks/ShowDataMock";
import { TicketsDataMock } from "./mocks/TicketDataMock";
import { UserDataMock } from "./mocks/UserDataMock";

describe("Testes tickets businnes", () => {
  const ticketBusinnes = new TicketsBusinnes(
    new GenerateIdMock(),
    new TicketsDataMock(),
    new AutheticatorMock(),
    new UserDataMock(),
    new ShowDataMock()
  );

  test("teste create ticket retorna sucesso", async () => {
    const input: ICreateTicketDTO = {
      token: "token-mock-admin",
      showId: "201",
    };
    const response = await ticketBusinnes.createTickets(input);
    expect(response).toBe("ticket created successfully");
  });

  test("teste delete ticket retorna sucesso", async () => {
    const input: IDeleteTicketDTO = {
      token: "token-mock-admin",
      showId: "201",
    };
    const response = await ticketBusinnes.deleteTickets(input);
    expect(response).toBe("ticket deleted successfully");
  });
});
