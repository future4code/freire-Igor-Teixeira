import { GenerateId } from "../services/GenerateId";
import { DataBase } from "./DataBase";

export class FollowerData extends DataBase {
  async followUser(id: string, userToFollowId: string) {
    try {
      const result = await this.getConnection()
        .from("Follow")
        .select()
        .where("user_id", "LIKE", `%${id}%`)
        .andWhere("user_to_follow_id", "LIKE", `%${userToFollowId}%`);

      if (result.length > 0) {
        throw new Error("{message: Você ja segue essa pessoa}");
      }
      const idFollow = new GenerateId().generateId();
      await this.getConnection().from("Follow").insert({
        id: idFollow,
        user_id: id,
        user_to_follow_id: userToFollowId,
      });
      const message: object = { message: "Followed successfully" };
      return message;
    } catch (error) {
      return error.message || error.sqlMessage;
    }
  }

  async unfollowUser(id: string, userToFollowId: string) {
    try {
      const result = await this.getConnection()
        .from("Follow")
        .select()
        .where("user_id", "LIKE", `%${id}%`)
        .andWhere("user_to_follow_id", "LIKE", `%${userToFollowId}%`);

      if (result.length === 0) {
        throw new Error("{message: Você não segue essa pessoa}");
      }
      await this.getConnection()
        .from("Follow")
        .delete()
        .where("user_id", "LIKE", `%${id}%`)
        .andWhere("user_to_follow_id", "LIKE", `%${userToFollowId}%`);

      const message: object = { message: "Unfollowed successfully" };
      return message;
    } catch (error) {
      return error.message || error.sqlMessage;
    }
  }
}
