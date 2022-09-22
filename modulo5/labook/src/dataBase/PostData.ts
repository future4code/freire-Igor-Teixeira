import { inputUpdate } from "../models/Likes";
import { InputDTO, IPostDb, OCreatePostDTO, Post } from "../models/Post";
import { DataBase } from "./DataBase";

export class PostData extends DataBase {
  protected TABLE_NAME = "Post_labook";
  
  Create = async (input: Post) => {
    const userDB: IPostDb = {
      id: input.getId(),
      content: input.getContent(),
      create_date: input.getCreateDate(),
      user_id: input.getUserId(),
    };
    await this.getConnection().from(this.TABLE_NAME).insert(userDB);
    return "successfully created";
  };

  getPostById = async (id: string) => {
    const result: OCreatePostDTO[] = await this.getConnection()
      .from(this.TABLE_NAME)
      .select()
      .where("id", "LIKE", `${id}`);
    return result;
  };

  getFeed = async (id: string) => {
    const result = await this.getConnection().from(this.TABLE_NAME).select("*");

    return result;
  };

  deletePost = async (input: string) => {
    await this.getConnection()
      .from(this.TABLE_NAME)
      .delete()
      .where("id", "LIKE", `${input}`);
    // .andWhere("user_id","LIKE",`${input.token}`)
    // .orWhere("role","LIKE",`${ROLE.ADMIN}`)
    return "Post deletado com sucesso";
  };

  updatePost = async (input:inputUpdate) =>{
    await this.getConnection()
    .from(this.TABLE_NAME)
    .update("likes",`${input.likes}`)
    .where("id",`${input.postId}`)
    
  }
  
}
