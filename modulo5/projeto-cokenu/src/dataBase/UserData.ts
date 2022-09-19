import { format } from "path";
import { User } from "../models/User";
import { Autheticator } from "../services/Authenticator";
import { DataBase } from "./DataBase";

export class UserData extends DataBase {
  async signUpUser(user: User) {
    try {
      await this.getConnection().from("User").insert({
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
        password: user.getPassword(),
        role: user.getRole(),
      });
      const newtoken = new Autheticator();
      const token = newtoken.generateToken({
        id: user.getId(),
        roles: user.getRole(),
      });
      return token;
    } catch (error) {
      return error.sqlMesage || error.message;
    }
  }

  async loginUser(email: string) {
    try {
      const result = await this.getConnection()
        .select()
        .from("User")
        .where("email", "LIKE", `%${email}%`);
      return result;
    } catch (error) {
      return error.sqlMesage || error.message;
    }
  }

  async getProfile(id: string) {
    try {
      const result = await this.getConnection()
        .from("User")
        .select("id", "name", "email")
        .where("id", "LIKE", `%${id}%`);
      return result;
    } catch (error) {
      return error.sqlMesage || error.message;
    }
  }

  async getProfileById(id: string) {
    try {
      const result = await this.getConnection()
        .from("User")
        .select("id", "name", "email")
        .where("id", "LIKE", `%${id}%`);
      return result;
    } catch (error) {
      return error.sqlMesage || error.message;
    }
  }

  async deletUser(token: string) {
    try {
      await this.getConnection()
        .from("Follow")
        .where("user_id", token)
        .orWhere("user_to_follow_id", token)
        .delete();

      await this.getConnection()
        .from("Recipes")
        .where("user_id", token)
        .delete();

      await this.getConnection().from("User").where("id", token).delete();

      return "Conta deletada com sucesso";
    } catch (error) {
      return error.sqlMesage || error.message;
    }
  }
}
