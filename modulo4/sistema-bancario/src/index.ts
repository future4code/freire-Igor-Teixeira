import express from "express";
import { AddressInfo } from "net";


import { userAccount, NewUser, MOVEMENT } from "./data";

const app = express();

app.use(express.json());

const currentYear = new Date();
const dayCurrent = String(currentYear.getDate()).padStart(2, "0");
const monthCurrent = String(currentYear.getMonth() + 1).padStart(2, "0");
const yearCurrent = currentYear.getFullYear();
const newcurrentYear = String(
  dayCurrent + "/" + monthCurrent + "/" + yearCurrent
);

// Cria usuario -----------------------------
app.post("/user", (req, res) => {
  const { name, cpf, birthDate } = req.body;

  const currentYear: number = new Date().getFullYear();
  const year: number = Number(birthDate.substr(6, 10));
  const ofAge = currentYear - year;
  const cpfValid = userAccount.map((item) => item.cpf);
  try {
    if (!name || !cpf || !birthDate) {
      res.status(422);
      throw new Error("Please enter all parameters");
    } else if (ofAge < 18) {
      res.status(422);
      throw new Error("You need to be over 18 years old");
    } else if (String(cpfValid) === String(cpf)) {
      res.status(409);
      throw new Error("CPF already registered");
    } else if (birthDate.length < 10 || birthDate.length > 10) {
      res.status(422);
      throw new Error("Required date format 00/00/0000");
    }
    userAccount.push({
      id: Date.now(),
      name,
      cpf,
      birthDate,
      balance: 0,
      extract: [],
    });
    res.send(userAccount);
  } catch (error: any) {
    res.send(error.message);
  }
});

//Mostra saldo da conta ----------------------
app.get("/user/saldo", (req, res) => {
  const name: string = req.query.name as string;
  const cpf: string = req.query.cpf as string;
  let errorStatus: number = 401;
  const cpfValid = userAccount.find((item) => item.cpf === cpf);
  const nameValid = userAccount.find((item) => item.name === name);
  const list = userAccount.map((item) => {
    let balance: number = 0;
    if (item.name === name) {
      balance = Number(item.balance);
      return balance;
    }
    return balance;
  });

  try {
    if (!name || !cpf) {
      errorStatus = 422;
      throw new Error("enter the parameters name and cpf");
    } else if (!cpfValid) {
      errorStatus = 422;
      throw new Error("Cpf invalid");
    } else if (!nameValid) {
      errorStatus = 422;
      throw new Error("Name invalid");
    }
    res.status(200).send(`Your balance and R$${list}`);
  } catch (error: any) {
    res.status(errorStatus).send(error.message);
  }
});

// Deposito -----------------------------------
app.put("/user/deposit", (req, res) => {
  let errorStatus: number = 401;
  const name: string = req.query.name as string;
  const cpf: string = req.query.cpf as string;
  const newBalance = req.query.balance as string;
  const cpfValid = userAccount.find((item) => item.cpf === cpf);
  const nameValid = userAccount.find((item) => item.name === name);
  try {
    if (!name || !cpf) {
      errorStatus = 422;
      throw new Error("enter the parameters name and cpf");
    } else if (!cpfValid) {
      errorStatus = 422;
      throw new Error("Cpf invalid");
    } else if (!nameValid) {
      errorStatus = 422;
      throw new Error("Name invalid");
    } else if (!newBalance) {
      errorStatus = 422;
      throw new Error("enter the parameters balance");
    }
    let total: number = 0;
    const extract = userAccount.map((item) => {
      if (item.name === name) {
        total = item.balance;
        item.extract.push({
          id: String(Date.now()),
          value: Number(newBalance),
          date: newcurrentYear,
          description: "Depósito de dinheiro",
          movement: MOVEMENT.DEPOSIT,
        });
      }
    });
    total = total + Number(newBalance);
    res
      .status(200)
      .send(`success deposit ${newBalance} current balance ${total}`);
  } catch (error: any) {
    res.status(errorStatus).send(error.message);
  }
});

// Pagar conta --------------------------------
app.post("/user/pay", (req, res) => {
  let errorStatus: number = 401;
  const cpf: string = req.query.cpf as string;
  let { value, date, description } = req.body;
  date ? date : (date = newcurrentYear);
  const cpfValid = userAccount.find((item) => item.cpf === cpf);
  let newBalance = 0;
  const balance = userAccount.find((item) => {
    if (item.cpf === cpf) {
      newBalance = item.balance;
    }
  });
  const newdate = date.split("/");
  const day: number = Number(newdate[0]);
  const month: number = Number(newdate[1]);
  const year: number = Number(newdate[2]);
  try {
    if (!cpfValid) {
      errorStatus = 422;
      throw new Error("Cpf invalid");
    } else if (!value) {
      errorStatus = 422;
      throw new Error("Enter the parameter value");
    } else if (!description) {
      errorStatus = 422;
      throw new Error("enter the parameters  description");
    } else if (newBalance < Number(value)) {
      errorStatus = 422;
      throw new Error("insufficient funds");
    } else if (
      (month < Number(monthCurrent) && year <= yearCurrent) ||
      (day < Number(dayCurrent) &&
        month <= Number(monthCurrent) &&
        year <= yearCurrent)
    ) {
      errorStatus = 422;
      throw new Error("invalid date");
    }
    const extract = userAccount.map((item) => {
      if (item.cpf === cpf) {
        item.extract.push({
          id: String(Date.now()),
          value: Number(value),
          date: date,
          description,
          movement: MOVEMENT.SPENDING,
        });
      }
    });
    const pay = newBalance - value;
    const newMessage =
      date === newcurrentYear
        ? `account paid with current balance R$${pay}`
        : `Payment successfully scheduled`;
    res.status(200).send(newMessage);
  } catch (error: any) {
    res.status(errorStatus).send(error.message);
  }
});

//atualizar saldo ------------------------
app.put("/user/balance/:cpf", (req, res) => {
  const cpf = req.params.cpf as string
  let errorStatus = 500;
  const validCpf = userAccount.find((item) => item.cpf === cpf)?.cpf
  const users = userAccount;
  let bankBalance;
  let bankStatement;
  let updatedBalance;
  console.log(validCpf,cpf)
  try {
   if (typeof(validCpf) === "undefined" ){
      errorStatus = 422;
      throw new Error("invalid cpf");
    }
    for (let i = 0; i < users.length; i++) {
      if (users[i].cpf === cpf) {
        bankStatement = users[i].extract;
        bankBalance = users[i].balance;
      }
    }
    let returnBalance;
    let returnBalanceDeposit;
    for (let i = 0; i < users.length; i++) {
      if (users[i].cpf === cpf) {
        returnBalance = bankStatement?.filter((item) => {
          const dateOPeration = item.date;
          const newdate = dateOPeration.split("/");
          const day: number = Number(newdate[0]);
          const month: number = Number(newdate[1]);
          const year: number = Number(newdate[2]);
          if (item.movement !== MOVEMENT.DEPOSIT &&
            year <= Number(yearCurrent) &&
            month <= Number(monthCurrent) &&
            day < Number(dayCurrent)) {
            return item.value;
          }else if(item.movement === MOVEMENT.DEPOSIT){
            returnBalanceDeposit = Number(item.value)
          }
        });
      }
    }
    console.log(returnBalanceDeposit)
    let contasPagas: any = returnBalance
      ?.map((item) => item.value)
      .reduce((prev, curr) => prev + curr, 0);
    
    updatedBalance = (bankBalance as number) - contasPagas;
    for (let i = 0; i < users.length; i++) {
      if (users[i].cpf === cpf) {
        updatedBalance = updatedBalance + Number(returnBalanceDeposit)
        users[i].balance = updatedBalance
      }
    }
    res.status(200).send({ saldo: `R$ ${updatedBalance}` });
  } catch (error: any) {
    res.status(errorStatus).send(error.message);
  }
});

// tranferencia
app.post("/user/tranfer", (req, res) => {
  let errorStatus = 500;
  const { name, cpf, value } = req.body;
  const nameDest = req.query.nameDest as string;
  const cpfDest = req.query.cpfDest as string;
  const validCpf = userAccount.find((item) => item.cpf.includes(cpf))?.cpf;
  const validCpfDest = userAccount.find((item) =>
    item.cpf.includes(cpfDest)
  )?.cpf;
  const validName = userAccount.find((item) => item.name.includes(name))?.name;
  const validNameDest = userAccount.find((item) =>
    item.name.includes(nameDest)
  )?.name;

  try {
    if (!name || !cpf || !value || !nameDest || !cpfDest) {
      errorStatus = 422;
      throw new Error("Complete all parameters");
    } else if (cpf.length != 14 || cpfDest.length != 14) {
      errorStatus = 422;
      throw new Error("invalid cpf format, 000-000-000.00 ");
    } else if (
      cpf != validCpf ||
      name != validName ||
      cpfDest != validCpfDest ||
      nameDest != validNameDest
    ) {
      errorStatus = 422;
      throw new Error("invalid account data");
    } else if (value < 0) {
      errorStatus = 422;
      throw new Error("value must be greater than 0");
    } else if (cpf === validCpf) {
      userAccount.map((item) => {
        if (item.balance < value) {
          errorStatus = 422;
          throw new Error("insufficient funds");
        }
      });
    }
    const newTranfer = userAccount.map((item) => {
      if (cpf === item.cpf && name === item.name) {
        item.extract.push({
          id: String(Date.now()),
          value,
          date: newcurrentYear,
          description: "transfer",
          movement: MOVEMENT.SPENDING,
        });
        return item.extract[item.extract.length - 1];
      }
    });
    const newDeposit = userAccount.map((item) => {
      if (cpfDest === item.cpf && nameDest === item.name) {
        item.extract.push({
          id: String(Date.now()),
          value,
          date: newcurrentYear,
          description: "received transfer",
          movement: MOVEMENT.DEPOSIT,
        });
        return item.extract[item.extract.length - 1];
      }
    });
    res.status(200).send({ newTranfer, newDeposit });
  } catch (error: any) {
    res.status(errorStatus).send(error.message);
  }
});

// documentação = https://documenter.getpostman.com/view/21555253/VUqpscbL

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
