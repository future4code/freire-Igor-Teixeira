
  export interface ICreatePostDTO{
    content:string,
  }
  
  export interface InputDTO {
    token:string,
    id:string
  }

  export interface IPostDb{
    id:string,
    content:string,
    create_date:string,
    user_id:string,
 }



  export interface OCreatePostDTO{
    id:string,
    content:string,
    create_date:string,
    user_id:string,
    likes?:number 
 }

  export class Post{
    constructor(
    private id:string,
    private content:string,
    private createDate:string,
    private userId:string, 
    ) {}

    getId(){
        return this.id
    }
    getContent(){
        return this.content
    }
    getCreateDate(){
        return this.createDate
    }
    getUserId(){
        return this.userId
    }

  }