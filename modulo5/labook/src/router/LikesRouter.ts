import { Router } from "express";
import { LikesBusinnes } from "../businnes/LikesBusinnes";
import { LikesController } from "../controller/LikesController";
import { LikesData } from "../dataBase/LikesData";
import { PostData } from "../dataBase/PostData";
import { UserData } from "../dataBase/UserData";
import { Autheticator } from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";


export const likeRouter = Router()

const likeController = new LikesController(
    new LikesBusinnes(
        new Autheticator(),
        new UserData(),
        new PostData(),
        new LikesData(),
        new GenerateId()
        
    )
)

likeRouter.post("/like",likeController.like)

likeRouter.delete("/dislike/:id",likeController.dislike)