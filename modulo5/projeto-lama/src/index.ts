import app from "./controller/app";
import { routerTickets } from "./router/RouterTickets";
import { routerShow } from "./router/RouterShow";
import { userRouter } from "./router/RouterUser";

app.use("/user",userRouter)

app.use("/Ticket",routerTickets)

app.use("/show",routerShow)

