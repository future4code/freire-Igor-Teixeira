import { Request, Response } from "express";
import { connection } from "../data/connection";

export const CreateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  let errstatus = 500;
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      errstatus = 422;
      throw new Error("Dgite os parametros indicados no body");
    }
    const result = await connection("labecommerce_user").insert({
      id: Date.now().toString(),
      name,
      email,
      password,
    });
    res.status(200).send("Usuario criado com sucesso !");
  } catch (error) {
    res.status(errstatus).send(error.message);
  }
};
