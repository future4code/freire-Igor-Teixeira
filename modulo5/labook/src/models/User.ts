
export interface ISignupDTO{
  name:string,
  email:string,
  password:string
}

export interface ILoginDTO{
  email:string,
  password:string
}

export interface OUserDTO{
  id:string,
  name:string,
  email:string
  
}
export interface InputDTO {
  token:string,
  id:string
}


export class User {
    constructor(
      private id: string,
      private name: string,
      private email: string,
      private password: string,

    ) {}
    getId() {
      return this.id;
    }
  
    getName() {
      return this.name;
    }
  
    getEmail() {
      return this.email;
    }
  
    getPassword() {
      return this.password;
    }

  }
  