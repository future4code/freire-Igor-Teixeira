import { UserBusiness } from "../src/business/UserBusiness";
import { HashManager } from "./mocks/HashManegerMocks";
import { AuthenticatorMock } from "./mocks/AuthenticatorMocks";
import { IdGeneratorMock } from "./mocks/IdGenerateMocks";
import { UserDatabaseMock } from "./mocks/UserDataMocks";
import {
  ILoginInputDTO,
  ILoginOutputDTO,
  ISignupInputDTO,
} from "../src/models/User";
import { BaseError } from "../src/errors/BaseError";


describe("Testando a UserBusiness", () => {
  const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new HashManager(),
    new AuthenticatorMock()
  );

  test("tokem restornado com sucesso", async () => {
    const input: ISignupInputDTO = {
      email: "fulano@gmail.com",
      name: "Fulano",
      password: "fulano123",
    };

    const response: ILoginOutputDTO = await userBusiness.signup(input);
    expect(response.message).toBe("Cadastro realizado com sucesso");
    expect(response.token).toBe("token-mock-normal");
  });

  test("um token retorna quando sucesso", async () => {
    const input: ILoginInputDTO = {
      email: "astrodev@gmail.com",
      password: "bananinha",
    };

    const response: ILoginOutputDTO = await userBusiness.login(input);
    expect(response.message).toBe("Login realizado com sucesso");
    expect(response.token).toBe("token-mock-admin");
  });


    test ("erro no password no signup numero de caracteries invalido", async()=>{
      try {
          const input: ISignupInputDTO = {
          email: "fulano@gmail.com",
          name: "Fulano",
          password: "fulano123",
        };
        await userBusiness.signup(input)
        
      } catch (error) {
        if(error instanceof BaseError){
          expect(error.statusCode).toBe(400)
          expect(error.message).toBe("Parâmetro 'password' inválido: mínimo de 6 caracteres")
        }

      }
    })

    test("erro de parametro, email invalido no login ",async()=>{
      try {
        const input: ILoginInputDTO = {
          email: "astrodevgmail.com",
          password: "bananinha",
        };
        await userBusiness.login(input)
      } catch (error) {
        if(error instanceof BaseError){
          expect(error.statusCode).toBe(400)
          expect(error.message).toBe("Parâmetro 'email' inválido")

        }
      }
    
    })

    



});
