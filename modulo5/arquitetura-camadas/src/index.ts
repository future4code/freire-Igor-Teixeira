import app from "./controller/app";
import { UserController } from "./controller/UserController";

const userController = new UserController()

app.post("/signup",userController.signup)

app.post("/login",userController.login)

app.get("/user",userController.getUser)

app.delete("/delete/:id",userController.deleteUser)