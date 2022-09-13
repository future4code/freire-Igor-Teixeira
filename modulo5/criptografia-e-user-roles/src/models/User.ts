export class User {
    constructor(
        private id:string,
        private email:string,
        private password:string,
        private role:string
    ) {
        this.id = id,
        this.email = email,
        this.password = password  
        this.role = role 
    }
    getId(){
        return this.id
    }

    getEmail(){
        return this.email
    }

    getPassword(){
        return this.password
    }

    getRole(){
        return this.role
    }

}