import app from "./controller/app";
import { friendsRouter } from "./router/FriendsRouter";
import { postRouter } from "./router/PostRouter";
import { userRouter } from "./router/UserRouter";

app.use("/user",userRouter)

app.use("/post",postRouter)

app.use("/friends",friendsRouter)
