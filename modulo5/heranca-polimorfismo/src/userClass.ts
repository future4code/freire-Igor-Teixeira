

//exercicio 1
export class User {
     constructor(
      private id: string,
      private email: string,
      private name: string,
      private password: string,
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }

      public introduceYourself():string{
        return `ola ${this.name} . Bom dia`
      }
  }

  //a) Seria possível imprimir a senha (password) atrelada a essa instância?
  //não pois nao foi atribuida uma função get a ele  

  //b) *Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal?*
  // Somente 1 vez


  // exercicio 2

  //a) Quantas vezes a mensagem "Chamando o construtor da classe Customer" foi impressa no terminal? 
// 1vez

//b) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal? Por quê?
// 2 vezes por que chama a primeira para contruir e depois quando retorna em customer

  export class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }
  }