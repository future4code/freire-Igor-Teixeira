import { Request, Response } from "express";
import { connection } from "../data/connection";

export const createProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  let errstatus = 500;
  const { name, price, url } = req.body;
  try {
    if (!name || !price || !url) {
      errstatus = 422;
      throw new Error("Dgite os parametros no body");
    }
    const result = await connection("labecommerce_products").insert({
      id: Date.now().toString(),
      name,
      price,
      image_url: url,
    });
    res.status(200).send("Produto cadastrado com sucesso!");
  } catch (error: any) {
    res.status(errstatus).send(error.message);
  }
};
