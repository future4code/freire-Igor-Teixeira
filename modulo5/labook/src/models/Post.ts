export enum TYPEPOST {
    EVENTO = "EVENTO",
    NORMAL = "NORMAL",
  }

  export interface ICreatePostDTO{
     photo:string,
     description:string,
     createDate:string,
     type:TYPEPOST 
  }

  export interface OCreatePostDTO{
    id:string,
    photo:string,
    description:string,
    create_date:string,
    type_post:TYPEPOST,
    user_id:string 
 }

  export class Post{
    constructor(
    private id:string,
    private photo:string,
    private description:string,
    private createDate:string,
    private typePost:TYPEPOST,
    private userId:string
    ) {}

    getId(){
        return this.id
    }
    getPhoto(){
        return this.photo
    }
    getDescription(){
        return this.description
    }
    getCreateDate(){
        return this.createDate
    }
    getTypePost(){
        return this.typePost
    }
    getUserId(){
        return this.userId
    }
  }