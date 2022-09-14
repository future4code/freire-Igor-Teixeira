import { User } from "../models/User"
import { Autheticator } from "../services/Authenticator"
import { DataBase } from "./DataBase"

export class UserData extends DataBase {

  async signUpUser(user: User) {
    try {
      await this.getConnection()
      .from("User")
      .insert({
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
        password: user.getPassword(),
        role: user.getRole(),
      });
      const newtoken = new Autheticator()
        const token = newtoken.generateToken({id:user.getId(),roles:user.getRole()})
        return token
    } catch (error) {
      return error.sqlMesage || error.message
    }
  }

  async loginUser(email:string) {
    try {
     const result = await this.getConnection()
      .select()
      .from("User")
      .where("email","LIKE",`%${email}%`)
      return result
    } catch (error) {
      return error.sqlMesage || error.message;
    }
  }

  async getProfile(id:string) {
    try {
      const result = await this.getConnection()
      .from("User")
      .select("id","name","email")
      .where("id","LIKE",`%${id}%`)
      return result
    } catch (error) {
      return error.sqlMesage || error.message;
    }
  }

  async getProfileById(id:string) {
    try {
      const result = await this.getConnection()
      .from("User")
      .select("id","name","email")
      .where("id","LIKE",`%${id}%`)
      return result
    } catch (error) {
      return error.sqlMesage || error.message;
    }
  }

  async getUserRecipeFeed() {
    try {
      await this.getConnection();
    } catch (error) {
      return error.sqlMesage;
    }
  }

  async deletUser() {
    try {
      await this.getConnection();
    } catch (error) {
      return error.sqlMesage;
    }
  }
}