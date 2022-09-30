import { User } from "../models/User";
import { DataBase } from "./DataBase";

export class UserData extends DataBase {
  public static TABLE_USER = "User_lama";
  signUpDb = async (input: User) => {
    await this.getConnection().from(UserData.TABLE_USER).insert({
      id: input.getId(),
      name: input.getName(),
      email: input.getEmail(),
      password: input.getPassword(),
      roles: input.getRoles(),
    });
    return "User created successfully";
  };

  getEmailDb = async (email: string) => {
    const [result] = await this.getConnection()
      .from(UserData.TABLE_USER)
      .select("*")
      .where({ email });
    return result;
  };

  getUserByIdDb = async (id: string) => {
    const [result] = await this.getConnection()
      .from(UserData.TABLE_USER)
      .select("*")
      .where({ id });
    return result;
  };
}
