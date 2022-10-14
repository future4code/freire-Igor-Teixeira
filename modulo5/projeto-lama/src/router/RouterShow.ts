import { Router } from "express";
import { ShowBusinnes } from "../businnes/ShowBusinnes";
import { ShowControlles } from "../controller/ShowController";
import { ShowData } from "../dataBase/ShowData";
import { TicketsData } from "../dataBase/TicketData";
import { UserData } from "../dataBase/UserData";
import { Autheticator } from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";


export const routerShow = Router()

const showController = new ShowControlles(
    new ShowBusinnes(
        new GenerateId(),
        new UserData(),
        new Autheticator(),
        new ShowData(),
        new TicketsData(),
    )
)

routerShow.post("/create",showController.createShow)

routerShow.get("/",showController.getshow)