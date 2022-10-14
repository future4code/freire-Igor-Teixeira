import { ShowBusinnes } from "../src/businnes/ShowBusinnes";
import { AutheticatorMock } from "./mocks/AuthenticatorMock";
import { GenerateIdMock } from "./mocks/GenerateIdMock";
import { UserDataMock } from "./mocks/UserDataMock";
import { ShowDataMock } from "./mocks/ShowDataMock";
import { TicketsDataMock } from "./mocks/TicketDataMock";
import { ICreateShowDTO, IShowDTO, OShowDTO } from "../src/models/Show";
import { CustomError } from "../src/error/CustomError";

describe("teste Negocios shows", () => {
  const showBussines = new ShowBusinnes(
    new GenerateIdMock(),
    new UserDataMock(),
    new AutheticatorMock(),
    new ShowDataMock(),
    new TicketsDataMock()
  );

  test("teste create show retorna sucesso", async () => {
    const input: ICreateShowDTO = {
      token: "token-mock-admin",
      band: "banda teste",
      starts: "26/12/2022",
    };
    const response = await showBussines.createShow(input);
    expect(response).toBe("Show created successfully");
  });

  test("teste getShow pega todos shows e retona sucesso", async () => {
    const input: OShowDTO[] = [
      {
        id: "201",
        starts_at: "7/12/2022",
        band: "Banda teste",
        tickets: 5000,
      },
    ];
    const response = await showBussines.getShow();
    expect(response).toEqual(input);
  });

  // teste de erros

  test("restorna sucesso caso starts seja antes do festival de show", async () => {
    try {
      const input: ICreateShowDTO = {
        token: "token-mock-admin",
        band: "Banda teste",
        starts: "26/05/2022",
      };
    } catch (error) {
      if (error instanceof CustomError) {
        expect(error.code).toBe(403);
        expect(error.message).toBe("Date cannot be earlier than December 5th");
      }
    }
  });

  test("rettona sucesso se data ja existir show cadastrado", async () => {
    try {
      const input: ICreateShowDTO = {
        token: "token-mock-admin",
        band: "Banda teste",
        starts: "07/12/2022",
      };
    } catch (error) {
      if (error instanceof CustomError) {
        expect(error.code).toBe(404);
        expect(error.message).toBe("there is already a show that day");
      }
    }
  });
});
