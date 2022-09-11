import { getAllUsers } from "./endpoints/getAllUsers";
import express from "express"
import cors from "cors"
import { AddressInfo } from "net"
import { getUserByName } from "./endpoints/getUserByName";
import { getByType } from "./endpoints/getByType";
import { getOrderBycres } from "./endpoints/getOrderCres";
import { getUserbyPag } from "./endpoints/getUserbyPag";

export const app = express()

app.use(express.json())
app.use(cors())


app.get("/users", getAllUsers)

app.get("/user", getUserByName)

app.get("/user/:type", getByType)

app.get("/order", getOrderBycres)

app.get("/users/page", getUserbyPag)



const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
})