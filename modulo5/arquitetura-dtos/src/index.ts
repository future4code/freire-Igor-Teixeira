import app from "./controller/app";
import { UserController } from "./controller/UserController";
import { userRouter } from "./router/UserRouter";

const userController = new UserController()

app.use("/user",userRouter)


