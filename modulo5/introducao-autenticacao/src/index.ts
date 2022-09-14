import app from "./app";
import { AddressInfo } from "net"
import { UserController } from "./endPoints/UserController";

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
})

const user = new UserController()

app.post("/user/signup",user.createrUser)

app.post("/user/login",user.loginUser)