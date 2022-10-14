import { UserBusinnes } from "../src/businnes/UserBusinnes";
import { IloginDTO, ISignupDTO, ROLES } from "../src/models/User";
import { UserDataMock } from "./mocks/UserDataMock";
import { HashManagerMock } from "./mocks/HashManegerMock";
import { GenerateIdMock } from "./mocks/GenerateIdMock";
import { AutheticatorMock } from "./mocks/AuthenticatorMock";
import { CustomError } from "../src/error/CustomError";

describe("negocios de user ", () => {
  const userBusinnes = new UserBusinnes(
    new UserDataMock(),
    new HashManagerMock(),
    new GenerateIdMock(),
    new AutheticatorMock()
  );

  test("retorna token se cadastro for feito com sucesso signup", async () => {
    const input: ISignupDTO = {
      name: "joao",
      email: "joao@gmail.com",
      password: "123456",
      roles: ROLES.ADMIN,
    };
    const response = await userBusinnes.signupBusinnes(input);
    expect(response).toBe("token-mock-admin");
  });

  test("retorna token se cadastro for feito com sucesso login", async () => {
    const input: IloginDTO = {
      email: "igor@gmail.com",
      password: "igortest",
    };
    const response = await userBusinnes.loginBusinnes(input);
    expect(response).toBe("token-mock-admin");
  });

  //testes erros login e signup

  test("retorna sucesso se usuario ja tiver cadastro", async () => {
    try {
      const input: ISignupDTO = {
        name: "igor",
        email: "igor@gmail.com",
        password: "igortest-hash",
        roles: ROLES.ADMIN,
      };
      await userBusinnes.signupBusinnes(input);
    } catch (error) {
      if (error instanceof CustomError) {
        expect(error.code).toBe(401);
        expect(error.message).toBe("E-mail already registered");
      }
    }
  });

  test("retorna sucesso se email estiver com formato  invalido", async () => {
    try {
      const input: ISignupDTO = {
        name: "igor",
        email: "igorgmail.com",
        password: "igortest-hash",
        roles: ROLES.ADMIN,
      };
      await userBusinnes.signupBusinnes(input);
    } catch (error) {
      if (error instanceof CustomError) {
        expect(error.code).toBe(422);
        expect(error.message).toBe("invalid email format");
      }
    }
  });

  test("retorna sucesso se password tiver menos que 6 caracteries ou diferente de string ", async () => {
    try {
      const input: ISignupDTO = {
        name: "joao",
        email: "joao@gmail.com",
        password: "igowdwdwwd",
        roles: ROLES.ADMIN,
      };
      await userBusinnes.signupBusinnes(input);
    } catch (error) {
      if (error instanceof CustomError) {
        expect(error.code).toBe(401);
        expect(error.message).toBe(
          "invalid password format = (string 6 characters)"
        );
      }
    }
  });
});
