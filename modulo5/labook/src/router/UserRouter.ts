import { Router } from "express";
import { UserBusinnes } from "../businnes/UserBusinnes";
import { UserController } from "../controller/UserController";
import { UserData } from "../dataBase/UserData";
import { Autheticator } from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";
import { HashManager } from "../services/HashManeger";

export const userRouter = Router();

export const userController = new UserController(
  new UserBusinnes(
    new UserData(),
    new GenerateId(),
    new Autheticator(),
    new HashManager()
  )
);

userRouter.post("/signup", userController.signup);
userRouter.post("/login", userController.login);
