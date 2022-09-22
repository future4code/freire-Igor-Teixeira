import { PostData } from "../dataBase/PostData";
import { UserData } from "../dataBase/UserData";
import { CustomError } from "../error/CustomError";
import { InputDTO, ROLE } from "../models/User";
import { ICreatePostDTO, OCreatePostDTO, Post } from "../models/Post";
import { Autheticator } from "../services/Authenticator";
import { CorrectDate } from "../services/CorrectDate";
import { GenerateId } from "../services/GenerateId";

export class PostBusinnes {
  constructor(
    private userData: UserData,
    private authenticator: Autheticator,
    private generateId: GenerateId,
    private postData: PostData,
    private correctDate: CorrectDate
  ) {}

  createPost = async (token: string, input: ICreatePostDTO) => {
    const validToken = this.authenticator.getTokenData(token);
    const id = this.generateId.generateId();
    const validId = await this.userData.getUserById(validToken.id);
    if (!input.content) {
      throw new CustomError(422, "Digite os parametros necessários");
    }
    console.log(validToken);
    if (!token || !validToken) {
      throw new CustomError(401, "Digite um toquem valído");
    }
    if (validId.length < 1 ) {
      throw new CustomError(401, "token inválido");
    }
    const date = new Date().toLocaleDateString("pt-BR");
    const newData = this.correctDate.sendDateToDB(date);
    const newPost = new Post(id, input.content, newData, validToken.id);
    const result = await this.postData.Create(newPost);

    return result;
  };

  getPostById = async (input: InputDTO) => {
    const validToken = this.authenticator.getTokenData(input.token);
    const user = await this.userData.getUserById(validToken.id);

    if (!input.token || !input.id) {
      throw new CustomError(422, "digite os parametros necessários");
    }
    if (user.length < 0) {
      throw new CustomError(401, "token invalido");
    }
    const [post] = await this.postData.getPostById(input.id);
    const newDate = this.correctDate.currentDateFormatted(post.create_date);
    const result: OCreatePostDTO = {
      id: post.id,
      content: post.content,
      create_date: newDate,
      user_id: post.user_id,
      likes: post.likes,
    };
    return result;
  };

  getFeed = async (token: string) => {
    const validToken = this.authenticator.getTokenData(token);
    const user = await this.userData.getUserById(validToken.id);

    if (!token) {
      throw new CustomError(422, "digite os parametros necessários");
    }
    if (user.length < 0) {
      throw new CustomError(401, "token invalido");
    }

    const post = await this.postData.getFeed(validToken.id);

    const result = post.map((item) => {
      const newDate = this.correctDate.currentDateFormatted(item.create_date);
      item.create_date = newDate;
      return item;
    });

    return result;
  };

  deletePost = async (input: InputDTO) => {
    const validToken = this.authenticator.getTokenData(input.token);
    const user = await this.userData.getUserById(validToken.id);
    const Validpost = await this.postData.getPostById(input.id);
    if (!input.token || !input.id) {
      throw new CustomError(422, "digite os parametros necessários");
    }
    if (user.length < 0) {
      throw new CustomError(401, "token invalido");
    }
    if (Validpost.length < 1) {
      throw new CustomError(404, "Post não existe digite id valído");
    }

    const [post] = await this.postData.getPostById(input.id);

    if (validToken.id === post.user_id || validToken.roles === ROLE.ADMIN) {
      const result = await this.postData.deletePost(input.id);
      return result;
    } else {
      throw new CustomError(
        401,
        "Usuario não autorizado somente ADM ou quem criou pode apagar"
      );
    }
  };
}
