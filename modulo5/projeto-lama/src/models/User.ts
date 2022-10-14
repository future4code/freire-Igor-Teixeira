export enum ROLES {
    ADMIN = "ADMIN",
    NOMAL = "NORMAL"
  }

  export interface ISignupDTO{
    name:string,
    email:string,
    password:string,
    roles:ROLES
  }


  
  export interface ICreateDTO{
    id:string,
    name:string,
    email:string,
    password:string,
    roles:ROLES
  }
  export interface IloginDTO{
    email:string,
    password:string
  }
  
  
  export class User {
    constructor(
      private id: string,
      private name: string,
      private email: string,
      private password: string,
      private roles: ROLES
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
  
    getRoles() {
      return this.roles;
    }
  }
  