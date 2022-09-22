import { LikesData } from "../dataBase/LikesData";
import { PostData } from "../dataBase/PostData";
import { UserData } from "../dataBase/UserData";
import { CustomError } from "../error/CustomError";
import { IInputDTO, ILikesDB, inputUpdate } from "../models/Likes";
import { ROLE } from "../models/User";
import { Autheticator } from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";

export class LikesBusinnes {
  constructor(
    private autheticator: Autheticator,
    private userData: UserData,
    private postData: PostData,
    private likesData: LikesData,
    private idGenerate: GenerateId
  ) {}

  like = async (input: IInputDTO) => {
    const validToken = this.autheticator.getTokenData(input.token);
    const validUser = await this.userData.getUserById(validToken.id);
    const validPost = await this.postData.getPostById(input.id);

    const getLikeDB: IInputDTO = { id: input.id, token: validToken.id };

    const validLikes = await this.likesData.getLike(getLikeDB);

    if (!input.id || !input.token) {
      throw new CustomError(422, "Digite os parametros necessários");
    }
    if (validUser.length < 1) {
      throw new CustomError(401, "Token invalido");
    }
    if (validPost.length < 1) {
      throw new CustomError(404, "Post não encontrado");
    }
    if (validLikes.length > 0) {
      throw new CustomError(409, "Like já existente");
    }
    const id = this.idGenerate.generateId();
    const newLike: ILikesDB = {
      id: id,
      user_id: validToken.id,
      post_id: input.id,
    };
    const [updateLike] = validPost.map((item) => {
      const newLike: number = Number(item.likes) + 1;
      return newLike;
    });
    const inputUpdateDB: inputUpdate = {
      idUser: validToken.id,
      postId: input.id,
      likes: updateLike,
    };

    const result = await this.likesData.like(newLike);
    await this.postData.updatePost(inputUpdateDB);
    return result;
  };

  dislike = async (input: IInputDTO) => {
    const validToken = this.autheticator.getTokenData(input.token);
    const validUser = await this.userData.getUserById(validToken.id);
    const validPost = await this.postData.getPostById(input.id);

    const getLikeDB: IInputDTO = { id: input.id, token: validToken.id };

    const validLikes = await this.likesData.getLike(getLikeDB);

    if (!input.id || !input.token) {
      throw new CustomError(422, "Digite os parametros necessários");
    }
    if (validUser.length < 1) {
      throw new CustomError(401, "Token invalido");
    }
    if (validPost.length < 1) {
      throw new CustomError(404, "Post não encontrado");
    }
    if (validLikes.length < 1) {
      throw new CustomError(409, "Você não curtiu esse post");
    }
    const id = this.idGenerate.generateId();
    const newLike: IInputDTO = {
      token: validToken.id,
      id: input.id,
    };

    const [updateLike] = validPost.map((item) => {
      const newLike: number = Number(item.likes) - 1;
      return newLike;
    });
    const inputUpdateDB: inputUpdate = {
      idUser: validToken.id,
      postId: input.id,
      likes: updateLike,
    };
    await this.postData.updatePost(inputUpdateDB);
    const result = await this.likesData.disLike(newLike);
    return result;
  };
}
