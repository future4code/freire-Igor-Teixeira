import { Request, Response } from "express";
import { connection } from "../data/connection";

export const getAllProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  let errstatus = 500;
  let order = req.query.order as string;
  try {
    if (!order || order === "") {
      order = "asc";
    }
    const result = await connection("labecommerce_products")
      .select("*")
      .orderBy("name", order);
    res.status(200).send(result);
  } catch (error: any) {
    res.status(errstatus).send(error.message);
  }
};
