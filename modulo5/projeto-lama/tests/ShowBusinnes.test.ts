import {ShowBusinnes} from "../src/businnes/ShowBusinnes"
import { AutheticatorMock } from "./mocks/AuthenticatorMock"
import { GenerateIdMock } from "./mocks/GenerateIdMock"
import { UserDataMock } from "./mocks/UserDataMock"
import {ShowDataMock} from "./mocks/ShowDataMock"
import { TicketsDataMock } from "./mocks/TicketDataMock"


describe("teste Negocios shows",()=>{
    const showBussine = new ShowBusinnes(
        new GenerateIdMock(),
        new UserDataMock(),
        new AutheticatorMock(),
        new ShowDataMock(),
        new TicketsDataMock(),
    )

})