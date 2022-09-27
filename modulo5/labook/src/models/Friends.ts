export interface InputDTO {
  token: string;
  id: string;
}

export interface IGetFriendsDTO {
  user_id: string;
  friend_id: string;
}

export interface IFriendDB {
  id: string;
  user_id: string;
  friend_id: string;
}

export interface IFriendsDTO {
  idFirst: string;
  idSecond: string;
  user_id: string;
  friend_id: string;
}
