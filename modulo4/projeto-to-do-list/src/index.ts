import express from "express";
import connection from "./connection";
import { AddressInfo } from "net";

const app = express();

app.use(express.json());



const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;

const correctDate = (data: string) => {
  let newDate = data.split('/')
  return `${newDate[2]}-${newDate[1]}-${newDate[0]}`
}

const currentDateFormatted = (data: string) => {
  let newDate: Date = new Date(data)
  const newFormattedDate: string = ((newDate.getDate())) + "/" + ((newDate.getMonth() + 1)) + "/" + newDate.getFullYear()
  return newFormattedDate
}

// exercicio 6 todos users
app.get("/user/all", async (req, res) => {
  let errStatus = 500
  const token = req.headers.authorization
  try {
    if (!token) {
      errStatus = 401
      throw new Error("Digite authorization");
    }
    const result = await connection("ListUser").select("*")
    res.status(200).send({ users: result })
  } catch (error: any) {
    res.status(errStatus).send(error.sqlMessage || error.message)
  }
})

//exercicio 2 user por id 
app.get("/user/:id", async (req, res) => {
  let errStatus = 500
  const id = req.params.id
  try {
    if (!id) {
      errStatus = 401
      throw new Error("Entre com params id por favor ");
    }
    const result = await connection("ListUser").select("id", "nickname").where({ id: id })
    res.status(200).send(result)
  } catch (error: any) {
    res.status(400).send(error.sqlMessage || error.message)
  }
})

// exercicio 1 cadastra user
app.post("/user", async (req, res) => {
  const { name, nickname, email } = req.body
  let errStatus = 500
  try {
    if (!name || !nickname || !email) {
      errStatus = 422
      throw new Error("Digite todos os parametros");
    }
    await connection("ListUser").insert({
      id: String(Date.now()),
      name,
      nickname,
      email
    })
    res.status(201).send("Usuario cadastrado com sucesso")
  } catch (error: any) {
    res.status(errStatus).send(error.message || error.sqlMessage)
  }
})

// exercicio 3 edita user
app.put("/user/edit/:id", async (req, res) => {
  let errStatus = 500
  const id = req.params.id
  const { name, nickname } = req.body

    ()
  try {
    if (!id) {
      errStatus = 401
      throw new Error("Entre com params id por favor ");
    } else if (!name || !nickname) {
      errStatus = 401
      throw new Error("Entre com parametros por favor");
    }
    const result = await connection("ListUser").select("*").where({ id: id })
      .update({
        name,
        nickname
      })
    res.status(200).send("Dados alterados com sucesso !")
  } catch (error: any) {
    res.status(errStatus).send(error.sqlMessage || error.message)
  }
})

//exercicio 4  cria tarefa
app.post("/task", async (req, res) => {
  let errStatus = 500
  let { title, description, limitDate, userId } = req.body
  limitDate = correctDate(limitDate)
  try {
    if (!title || !description || !limitDate || !userId) {
      errStatus = 401
      throw new Error("Entre com os parametros");
    }
    await connection("ListTask").insert({
      id: String(Date.now()),
      title,
      description,
      status: "to_do",
      limit_date: limitDate,
      user_id: userId
    })
    res.status(201).send("Tarefa cadastrada com sucesso")

  } catch (error: any) {
    res.status(errStatus).send(error.sqlMessage || error.message)
  }
})

//exercicio 5 e 11 tarefa por id 
app.get("/task/:id", async (req, res) => {
  let errStatus = 500
  const id = req.params.id
  try {
    if (!id) {
      errStatus = 401
      throw new Error("Digite um id valido ");
    }
    const creatorUser = await connection('ListTask')
      .select('*', 'ListUser.name')
      .innerJoin('ListUser', 'ListUser.id', 'ListTask.user_id')
      .where('ListTask.id', id)

    const responsibleUsers = await connection('ListTask').select('ListUser.id', 'ListUser.nickname')
      .leftJoin('ListResponsibleUserRelation', 'ListTask.id', 'ListResponsibleUserRelation.task_id')
      .innerJoin('ListUser', 'ListUser.id', 'ListResponsibleUserRelation.responsible_user_id')
      .where('ListTask.id', id)
    const result = creatorUser.map((item) => {
      return ({
        taskId: item.id,
        title: item.title,
        description: item.description,
        limitDate: currentDateFormatted(item.limit_date),
        status: item.status,
        creatorUserId: item.user_id,
        creatorUserNickname: item.name,
        responsibleUsers: responsibleUsers
      })
    })
    res.status(200).send(result)

  } catch (error: any) {
    res.status(errStatus).send(error.sqlMessage || error.message)
  }
})

// exercicio 7 tarefa por query e 13 tarefa por status
app.get("/task", async (req, res) => {
  let errStatus = 500
  const token = req.headers.authorization
  const id = req.query.creatorUserId as string
  const status = req.query.status as string
  try {
    if (!token) {
      errStatus = 401
      throw new Error("Digite token ");
    }

    if (id && !status) {
      const tableJoin = await connection("ListTask")
        .select(
          "ListTask.id",
          "title",
          "description",
          "limit_date",
          "user_id",
          "status",
          "ListUser.nickname"
        )
        .innerJoin(
          "ListUser",
          "ListUser.id",
          "user_id"
        )
        .where("ListUser.id", id);

      const result = tableJoin.map(item => {
        item.limit_date = currentDateFormatted(item.limit_date)
        return item
      })
      res.status(200).send(result)
    } else if (status && !id) {
      const tableJoin = await connection("ListTask").select("ListTask.id",
        "title",
        "description",
        "limit_date",
        "user_id",
        "status",
        "ListUser.nickname").join('ListUser', 'ListUser.id', 'ListTask.user_id').where({ status: status })
      const result = tableJoin.map(item => {
        item.limit_date = currentDateFormatted(item.limit_date)
        return item
      })

      res.status(200).send(result)
    }
  } catch (error: any) {
    res.status(errStatus).send(error.sqlMessage || error.message)
  }
})

// exercicio 8 user por query
app.get("/user", async (req, res) => {
  let errStatus = 500
  const id = req.query.query
  try {
    if (!id) {
      errStatus = 401
      throw new Error("Entre com query id por favor ");
    }
    const result = await connection("ListUser").select("id", "nickname").where({ id: id })
    res.status(200).send({ user: result })
  } catch (error: any) {
    res.status(400).send(error.sqlMessage || error.message)
  }
})

// exercicio 9 atribui responsavel por tarefa
app.post("/task/responsible", async (req, res) => {
  let errStatus = 500
  const { id, responsible } = req.body
  try {
    if (!id || !responsible) {
      errStatus = 422
      throw new Error("Digite os parametros necessarios");
    }
    await connection("ListResponsibleUserRelation")
      .insert({
        task_id: id,
        responsible_user_id: responsible
      })

    res.status(201).send("Responsavel adicionado com sucesso !")

  } catch (error: any) {
    res.status(errStatus).send(error.sqlMessage || error.message)
  }
})

// exercicio 10 responsavel pela tarefa por id
app.get("/task/:id/responsible", async (req, res) => {
  const id = req.params.id as string
  let errorCode: number = 400;
  try {
    if (!id) {
      errorCode = 401;
      throw new Error("Digite um id valido ");
    }
    const result = await connection("ListTask")
      .select("ListUser.id", "ListUser.nickname")
      .innerJoin(
        "ListResponsibleUserRelation",
        "ListTask.id",
        "ListResponsibleUserRelation.task_id"
      )
      .innerJoin(
        "ListUser",
        "ListResponsibleUserRelation.responsible_user_id",
        "ListUser.id"
      )
      .where("ListTask.id", id);
    if (result.length === 0) {
      res.status(200).send("Essa terefa ainda não possui ninguém responsável por executá-la");
    }
    res.status(201).send({ user: result })
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message || error.sqlMessage });
  }
});


// exercicio 12 atualiza status da tarefa
app.put("/task/status/:id", async (req, res) => {
  let errStatus = 500
  const status = req.body.status
  const id = req.params.id
  try {
    if (!status) {
      errStatus = 401
      throw new Error("Digite o parametro no body");
    }
    await connection("ListTask")
      .update({
        status,
      }).where({ id: id })
    res.status(201).send("Atualizado com sucesso")
  } catch (error: any) {
    res.status(errStatus).send(error.sqlMessage || error.message)
  }
})
//Documentação:
// https://documenter.getpostman.com/view/21555253/VUxKSUAt