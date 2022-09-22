export interface ILikeDTO{
    userId:string,
    postId:string
}

export interface ILikesDB{
    id:string,
    user_id:string,
    post_id:string
}

export interface IInputDTO{
    id:string,
    token:string
}

export interface inputUpdate{
    idUser:string,
    postId:string,
    likes:number
}