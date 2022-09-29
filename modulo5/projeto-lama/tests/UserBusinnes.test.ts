import {UserBusinnes} from "../src/businnes/UserBusinnes"
import { IloginDTO, ISignupDTO, ROLES } from "../src/models/User"
import {UserDataMock} from "./mocks/UserDataMock"
import {HashManagerMock} from "./mocks/HashManegerMock"
import {GenerateIdMock} from "./mocks/GenerateIdMock"
import {AutheticatorMock} from "./mocks/AuthenticatorMock"

 

describe("negocios de user ",()=> {
    const userBusinnes = new UserBusinnes(
        new UserDataMock(),
        new HashManagerMock(),
        new GenerateIdMock(),
        new AutheticatorMock()
    )

    test("retorna token se cadastro for feito com sucesso signup", async ()=>{
        const input:ISignupDTO ={
          name: "joao",
          email: "joao@gmail.com",
          password: "123456",
          roles: ROLES.ADMIN,
        }
        const response = await userBusinnes.signupBusinnes(input)
        expect(response).toBe("token-mock-admin")
    })

    test("retorna token se cadastro for feito com sucesso login",async()=>{
        const input:IloginDTO={
            email:"igor@gmail.com",
            password: "igortest"
        }
        const response = await userBusinnes.loginBusinnes(input)
        expect(response).toBe("token-mock-admin")

    })



        
})