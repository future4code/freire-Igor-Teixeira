import { InputDTO } from "../models/Friends";
import { IInputDTO, ILikesDB } from "../models/Likes";
import { DataBase } from "./DataBase";

export class LikesData extends DataBase {
  protected TABLE_NAME = "Likes_labook";
  protected TABLE_POST = "Post_labook";

  like = async (input: ILikesDB) => {
    await this.getConnection().from(this.TABLE_NAME).insert(input);
    return "Post curtido com sucesso";
  };

  disLike = async (input: InputDTO) => {
    await this.getConnection()
      .from(this.TABLE_NAME)
      .delete()
      .where("user_id", "LIKE", `${input.token}`)
      .andWhere("post_id", "LIKE", `${input.id}`);
    return "Deletado com sucesso";
  };

  getLike = async (input: IInputDTO) => {
    const result = await this.getConnection()
      .from(this.TABLE_NAME)
      .select()
      .where("user_id", "LIKE", `${input.token}`)
      .andWhere("post_id", "LIKE", `${input.id}`);
    return result;
  };
}
