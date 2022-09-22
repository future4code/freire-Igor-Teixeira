import { Router } from "express";
import { PostBusinnes } from "../businnes/PostBusinnes";
import { PostController } from "../controller/PostController";
import { PostData } from "../dataBase/PostData";
import { UserData } from "../dataBase/UserData";
import { Autheticator } from "../services/Authenticator";
import { CorrectDate } from "../services/CorrectDate";
import { GenerateId } from "../services/GenerateId";

export const postRouter = Router()

const postController = new PostController(
    new PostBusinnes(
        new UserData(),
        new Autheticator(),
        new GenerateId(),
        new PostData(),
        new CorrectDate()
    )
)

postRouter.post("/create",postController.createPost)

postRouter.get("/feed",postController.getFeed)

postRouter.delete("/delete/:id",postController.deletePost)

postRouter.get("/:id",postController.getPostById)



