import { Router } from "express";
import { TicketsBusinnes } from "../businnes/TicketBusinnes";
import { TicketsControlles } from "../controller/TicketsControlles";
import { ShowData } from "../dataBase/ShowData";
import { TicketsData } from "../dataBase/TicketData";
import { UserData } from "../dataBase/UserData";
import { Autheticator } from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";


export const routerTickets = Router()

const ticketsControlles = new TicketsControlles (
    new TicketsBusinnes(
        new GenerateId(),
        new TicketsData(),
        new Autheticator(),
        new UserData(),
        new ShowData(),
    )
)

routerTickets.post("/create",ticketsControlles.createTickets)

routerTickets.delete("/delete/:id",ticketsControlles.deleteTickets)