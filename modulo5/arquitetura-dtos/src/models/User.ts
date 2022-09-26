export enum ROLES {
    ADMIN = "ADMIN",
    NOMAL = "NORMAL",
  }

  export interface CreateUser{
     name: string,
     email: string,
     password: string,
     role: ROLES
  }
  

  export class NewUser {
    constructor(
      private id: string,
      private name: string,
      private email: string,
      private password: string,
      private role: ROLES
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
  
    getRole() {
      return this.role;
    }
  }
  