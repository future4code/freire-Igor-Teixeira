import { app } from "./app";
import { AddressInfo } from "net"
import { User,Customer } from "./userClass";
import { Client, Cep,Industry,Residence,Commerce,ResidentialClient,CommercialClient } from "./polimorfismo";


const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
})


//herança

// const user1 = new User("dced","joão@gmail.com","joao","12345")

// const user = new Customer(user1.getName(),user1.getEmail(),user1.getName(),"12345","debito")

// const customer = new Customer(user.getId(),user.getEmail(),user.getName(),user.getCreditCard(),"12345",) // passa os parâmetros corretos


// console.log(customer.introduceYourself())


//polimorfismo -----------------------
//Exercício 1
const newCliente:Client = {
   name:"igor",
   registrationNumber:22,
   consumedEnergy:250,
   calculateBill:()=> 2 
}

console.log(newCliente.calculateBill())

// Exercício 2

//a) Mesmo sabendo que não é possível, tente criar uma instância dessa classe (ou seja: new Place(...)). Qual foi o erro que o Typescript gerou?
// Não é possível criar uma instância de uma classe abstrata.

//b) Pense e responda: o que precisaríamos fazer para conseguir efetivamente criar uma instância dessa classe?

// tive que criar uma nova classe  que extend o que existe na abstrata
// const cep1 = new Cep("2659816")

// console.log(cep1.getCep())


// exercicio 3

// const industry = new Industry(25,"36449841165")

// const commerce = new Commerce(236,"26665585222")

// const residence = new Residence(369,"55625962556525")

// console.log(industry.getCep())
// console.log(commerce.getCep())
// console.log(residence.getCep())

const clien1 = new ResidentialClient("jessica",25,250,"562.156.128.55",33,"55565555")

console.log(clien1.calculateBill())

const client2 =  new CommercialClient("miru",23,630,"23262.2626262.626.2",22,"96253233")
console.log(client2.calculateBill())