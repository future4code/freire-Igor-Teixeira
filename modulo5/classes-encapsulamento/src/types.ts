// exercicio 2
export class Transaction {
   private date: string;
   private value: number;
   private description: string;
   
   constructor(date: string, value: number, description: string) {
      console.log("Chamando o construtor da classe transaction")
     this.date = date;
     this.value = value;
     this.description = description
   }
 }

export class UserAccount {
   private cpf: string;
   private name: string;
   private age: number;
   private balance: number = 0;
   private transactions: Transaction[] = [];
 
   constructor(
      cpf: string,
      name: string,
      age: number,
   ) {
      console.log("Chamando o construtor da classe UserAccount")
      this.cpf = cpf;
      this.name = name;
      this.age = age;
   }
   public getCpf():string{
      return this.cpf
   }

   public getName():string {
      return this.name
   }
  public setTransactions(newTransiaction: Transaction){
   this.transactions.push(newTransiaction)
  }

 }

 // exercicio 3

 export class Bank {
   private accounts: UserAccount[]=[]
   constructor(accounts: UserAccount[]) {
      this.accounts = accounts
   }
   public getAcconts(): UserAccount[]{
      return this.accounts 
   }
   public setAccounts(accounts:UserAccount){
      this.accounts.push(accounts)
  }
 }