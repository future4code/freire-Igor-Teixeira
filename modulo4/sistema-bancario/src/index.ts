import express from "express";
import { AddressInfo } from "net";
import { userAccount,NewUser, MOVEMENT } from "./data";

const app = express();

app.use(express.json());

const currentYear = new Date();
const dayCurrent = String(currentYear.getDate()).padStart(2, '0');
const monthCurrent = String(currentYear.getMonth() + 1).padStart(2, '0');
const yearCurrent = currentYear.getFullYear();
const newcurrentYear = String(dayCurrent + '/' + monthCurrent + '/' + yearCurrent);

// Cria usuario -----------------------------
app.post("/user",(req,res)=>{
  const {name,cpf,birthDate} = req.body

  const currentYear: number = new Date().getFullYear();
  const year:number= Number(birthDate.substr(6,10))
  const ofAge = currentYear - year

  const cpfValid = userAccount.map(item => item.user.cpf)
  const newUser:NewUser = {
      id:Date.now(),
      name,
      cpf,
      birthDate,
  }
  try{
    if(!name || !cpf || !birthDate){
      res.status(422)
      throw new Error("Please enter all parameters")
    }else if (ofAge < 18){
      res.status(422)
      throw new Error("You need to be over 18 years old")
    }else if (String(cpfValid) === String(cpf)){
      res.status(409)
      throw new Error("CPF already registered")
    }else if(birthDate.length < 10 || birthDate.length > 10){
      res.status(422)
      throw new Error("Required date format 00/00/0000")
    }
    userAccount.push({
      user:newUser,
      extract:[]
    })
    res.send(userAccount)
  }catch(error: any){
    res.send(error.message)
  }
 
})

//Mostra saldo da conta ----------------------
app.get("/user/saldo",(req,res)=>{
    const name: string = req.query.name as string;
    const cpf: string = req.query.cpf as string;
    let errorStatus: number = 401;
    const cpfValid = userAccount.find((item) => item.user.cpf === cpf);
    const nameValid = userAccount.find((item) => item.user.name === name);
    const list = userAccount.map((item) => {
      let balance: number = 0;
      if (item.user.name === name) {
        item.extract.map((item) => (balance = item.balance));
      }
      return balance;
    });
    
  try{
    if(!name || !cpf){
      errorStatus = 422
      throw new Error("enter the parameters name and cpf");
    }else if(!cpfValid){
      errorStatus = 422
      throw new Error("Cpf invalid");
    }else if (!nameValid){
      errorStatus = 422
      throw new Error("Name invalid");
    }
  res.status(200).send(`Your balance and R$${list}` )
    
  }catch(error:any){
    res.status(errorStatus).send(error.message)
  }

})

// Deposito -----------------------------------
app.put("/user/deposit",(req,res)=>{
  let errorStatus:number = 401
  const name:string = req.query.name as string
  const cpf:string = req.query.cpf as string
  const newBalance = req.query.balance as string
  const cpfValid = userAccount.find(item =>  item.user.cpf === cpf ) 
  const nameValid = userAccount.find(item=> item.user.name === name )  
try{
  if(!name || !cpf){
    errorStatus = 422
    throw new Error("enter the parameters name and cpf");
  }else if(!cpfValid){
    errorStatus = 422
    throw new Error("Cpf invalid");
  }else if (!nameValid){
    errorStatus = 422
    throw new Error("Name invalid");
  }else if (!newBalance){
    errorStatus = 422
    throw new Error("enter the parameters balance");
  }
  let total = 0
  const extract = userAccount.map(item =>{
    if(item.user.name === name){
       const newExtract = item.extract.map(item => {
        total = (item.balance + Number(newBalance))
        item.balance = (item.balance + Number(newBalance))
        item.spen.push({
          id:String(Date.now()),
          value:Number(newBalance),
          date:newcurrentYear,
          description: "Depósito de dinheiro",
          movement:MOVEMENT.DEPOSIT
        })
        return  item.spen[item.spen.length - 1] 
      })
      return newExtract
    }
  }) 
  res.status(200).send(`success deposit ${newBalance} current balance ${total}`)
}catch(error:any){
  res.status(errorStatus).send(error.message)
}
})

// Pagar conta --------------------------------
app.post("/user/pay",(req,res)=>{
  let errorStatus:number = 401
  const cpf:string = req.query.cpf as string
  let {value,date,description} = req.body 
  date ? date : date = newcurrentYear
  const cpfValid = userAccount.find(item =>  item.user.cpf === cpf )
  let newBalance = 0
  const balance = userAccount.find(item =>{
    if(item.user.cpf === cpf){
       item.extract.find(item =>newBalance = item.balance)
    }
  })  
    const newdate = date.split("/")
    const day:number =  Number(newdate[0])
    const month:number = Number(newdate[1])
    const year:number = Number(newdate[2])
try{

  if(!cpfValid){
    errorStatus = 422
    throw new Error("Cpf invalid");
  }else if (!value){
    errorStatus = 422
    throw new Error("Enter the parameter value");
  }else if (!description){
    errorStatus = 422
    throw new Error("enter the parameters  description");
  }else if (newBalance < Number(value)){
    errorStatus = 422
    throw new Error("insufficient funds");
  }else if (month < Number(monthCurrent) && year <= yearCurrent || day < Number(dayCurrent) && month <= Number(monthCurrent) && year <= yearCurrent){
    errorStatus = 422
    throw new Error("invalid date");
  }
  const extract = userAccount.map(item =>{
    if(item.user.cpf === cpf){
       const newExtract = item.extract.map(item => {
        item.spen.push({
          id:String(Date.now()),
          value:Number(value),
          date: date,
          description,
          movement:MOVEMENT.SPENDING
        })
      })
    }
  }) 
  const pay = newBalance - value
  const newMessage = date === newcurrentYear ? `account paid with current balance R$${pay}` : `Payment successfully scheduled`
  res.status(200).send(newMessage) 
}catch(error:any){
  res.status(errorStatus).send(error.message)
}
})

//atualizar saldo ------------------------
app.put("/user/balance/:cpf", (req,res) => {


})





const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});




