import { IFriendDB, IFriendsDTO, IGetFriendsDTO } from "../models/Friends";
import { DataBase } from "./DataBase";

export class FriendsData extends DataBase {
  protected TABLE_NAME = "Friends_labook";

  getFriends = async (input: IGetFriendsDTO) => {
    const result = await this.getConnection()
      .from(this.TABLE_NAME)
      .where("user_id", "LIKE", `%${input.user_id}%`)
      .andWhere("friend_id", "LIKE", `%${input.friend_id}%`);

    return result;
  };

  makeFriendship = async (input: IFriendsDTO) => {
    const friendshipFirst: IFriendDB = {
      id: input.idFirst,
      user_id: input.user_id,
      friend_id: input.friend_id,
    };
    await this.getConnection().from(this.TABLE_NAME).insert(friendshipFirst);

    const friendshipSecond: IFriendDB = {
      id: input.idSecond,
      user_id: input.friend_id,
      friend_id: input.user_id,
    };

    await this.getConnection().from(this.TABLE_NAME).insert(friendshipSecond);
    return "Amizade adicionada com sucesso";
  };

  unFriends = async (input: IGetFriendsDTO) => {
    await this.getConnection()
      .from(this.TABLE_NAME)
      .delete()
      .where("user_id", "LIKE", `%${input.user_id}%`)
      .andWhere("friend_id", "LIKE", `%${input.friend_id}%`);

    await this.getConnection()
      .from(this.TABLE_NAME)
      .delete()
      .where("user_id", "LIKE", `%${input.friend_id}%`)
      .andWhere("friend_id", "LIKE", `%${input.user_id}%`);

    return "Amizade desfeita com sucesso";
  };
}
