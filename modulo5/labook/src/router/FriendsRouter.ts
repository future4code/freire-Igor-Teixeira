import { Router } from "express";
import { Friendsbusinnes } from "../businnes/FriendsBusinnes";
import { FriendsController } from "../controller/FriendsController";
import { FriendsData } from "../dataBase/FriendsData";
import { UserData } from "../dataBase/UserData";
import { Autheticator } from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";

export const friendsRouter = Router();

const friendsControlles = new FriendsController(
  new Friendsbusinnes(
    new Autheticator(),
    new UserData(),
    new FriendsData(),
    new GenerateId()
  )
);

friendsRouter.post("/done", friendsControlles.makeFriendship);

friendsRouter.delete("/undone/:id", friendsControlles.unfriend);
