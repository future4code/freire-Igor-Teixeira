import { FriendsData } from "../dataBase/FriendsData";
import { UserData } from "../dataBase/UserData";
import { CustomError } from "../error/CustomError";
import { IFriendsDTO, IGetFriendsDTO, InputDTO } from "../models/Friends";
import { Autheticator } from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";

export class Friendsbusinnes {
  constructor(
    private authenticator: Autheticator,
    private userData: UserData,
    private friendData: FriendsData,
    private id: GenerateId
  ) {}

  makeFriendship = async (input: InputDTO) => {
    if (!input.id || !input.token) {
      throw new CustomError(422, "Digite os parametros necessários");
    }
    const validToken = this.authenticator.getTokenData(input.token);
    const validFriendId = await this.userData.getUserById(input.id);
    const validUserId = await this.userData.getUserById(validToken.id);

    if (validFriendId.length < 1) {
      throw new CustomError(401, "Id inválido");
    }
    if (validUserId.length < 1) {
      throw new CustomError(401, "token inválido ");
    }

    const friendship: IGetFriendsDTO = {
      user_id: validToken.id,
      friend_id: input.id,
    };
    const getFriend = await this.friendData.getFriends(friendship);

    if (getFriend.length > 0) {
      throw new CustomError(409, "Você ja e amigo dessa pessoa");
    }

    const friends: IFriendsDTO = {
      idFirst: this.id.generateId(),
      idSecond: this.id.generateId(),
      user_id: validToken.id,
      friend_id: input.id,
    };
    const result = await this.friendData.makeFriendship(friends);
    return result;
  };

  unfriend = async (input: InputDTO) => {
    if (!input.id || !input.token) {
      throw new CustomError(422, "Digite os parametros necessários");
    }
    const validToken = this.authenticator.getTokenData(input.token);
    const validFriend = await this.userData.getUserById(input.id);
    const validUser = await this.userData.getUserById(validToken.id);

    if (validFriend.length < 1) {
      throw new CustomError(401, "Id inválido");
    }
    if (validUser.length < 1) {
      throw new CustomError(401, "token inválido ");
    }

    const friendship: IGetFriendsDTO = {
      user_id: validToken.id,
      friend_id: input.id,
    };
    const getFriend = await this.friendData.getFriends(friendship);

    if (getFriend.length < 1) {
      throw new CustomError(409, "Você não e amigo dessa pessoa");
    }

    const friends: IGetFriendsDTO = {
      user_id: validToken.id,
      friend_id: input.id,
    };
    const result = await this.friendData.unFriends(friends);
    return result;
  };
}
