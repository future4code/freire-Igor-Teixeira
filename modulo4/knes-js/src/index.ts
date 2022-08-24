import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";

const app = express();
app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

export default app
//exercicio 1 

// b) Faça uma função que busque um ator pelo nome;

const searchActor = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = "${name}"
    `)
    return result
  }

  //c) Faça uma função que receba um gender retorne a quantidade de itens na tabela Actor com esse gender. Para atrizes, female e para atores male.

  const countActors = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);
    const count = result[0][0].count;
    return count;
  };

// exercicio 2 

//a) Uma função que receba um salário e um id e realiza a atualização do salário do ator em questão

const updateActor = async (id: string, salary: number): Promise<any> => {
    await connection("Actor")
      .update({
        salary: salary,
      })
      .where("id", id);
  };

//b) Uma função que receba um id e delete um ator da tabela

const deleteActor = async (id: string): Promise<void> => {
    await connection("Actor")
      .delete()
      .where("id", id);
  }; 

  //c) Uma função que receba um gender e devolva a média dos salários de atrizes ou atores desse gender

  const avgSalary = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
      .avg("salary ")
      .where({ gender });
  
    return result[0].salary;
  };

  //exercicio 3

  app.get("/actor/:id", async (req ,res) => {
    try {
      const id = req.params.id;
      const result = await connection("Actor")
      .where({id:id})
      res.status(200).send(result)
    } catch (error:any) {
      res.status(400).send(error.sqlMessage || error.message);
    }
  });


app.get("/actor",async (req,res) =>{
    try{
        const gender = req.query.gender
        const result = await connection("Actor")
        .where({gender,}).count() 
        res.status(200).send(result)
    }catch(error:any){
        res.status(400).send(error.sqlMessage || error.message);
    }
})



// exercicio 4

app.post("/actor", async (req,res)=>{
    try{
        const result = await connection("Actor")
        .insert ({
        id : String(Date.now()),
        name: req.body.name,
        salary: req.body.salary,
        birth_date: req.body.birth_date,
        gender: req.body.gender
        })
        res.status(200).send("sucess")
    }catch(error:any){
        res.status(400).send(error.sqlMessage || error.message);
    }
})


app.put("/actor/salary/:id", async (req,res)=>{
    try{
        const salary = req.params.id
        const result = await connection("Actor")
        .update ({
        salary,
        })
        res.status(200).send("Sucess")
    }catch(error:any){
        res.status(400).send(error.sqlMessage || error.message);
    }
})

app.delete("/actor/:name", async (req,res)=>{
    try{
        const name = req.params.name
        const result = await connection("Actor")
        .where({name:name}).del()      
        res.status(200).send("Sucess")    
    }catch(error:any){
        res.status(400).send(error.sqlMessage || error.message);
    }
})