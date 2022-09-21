import { User } from "../models/User";
import { DataBase } from "./DataBase";

export class UserData extends DataBase {
  protected TABLE_NAME = "User_labook"
   signup = async (input: User) => {
     await this.getConnection()
      .from(this.TABLE_NAME)
      .insert({
        id: input.getId(),
        name: input.getName(),
        email: input.getEmail(),
        password: input.getPassword(),
    });
  }

   getUserById = async (id:string) => {
    const result = await this.getConnection()
    .from(this.TABLE_NAME)
    .select("id","name","email")
    .where("id", "LIKE", `${id}`);
    return result;
  }

   getUserByEmail = async (input: string) => {
    const result = await this.getConnection()
      .from(this.TABLE_NAME)
      .select()
      .where("email", "LIKE", `${input}`);
    return result;
  }
}
