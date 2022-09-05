import app from "./app"
import { AddressInfo } from "net"
import { CreateUser } from "./endpoints/createUser";
import { getAllUsers } from "./endpoints/getAllUsers";
import { createProducts } from "./endpoints/createProduct";
import { getAllProducts } from "./endpoints/getAllProducts";
import { purchaseRegister } from "./endpoints/purchaseRegister";
import { getPurchasesByUser } from "./endpoints/getPurchasesByUser";


const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
})


app.post("/user",CreateUser)

app.get("/users",getAllUsers)

app.post("/products",createProducts)

app.get("/products",getAllProducts)

app.post("/purchases",purchaseRegister)

app.get("/users/:id/purchases",getPurchasesByUser)

