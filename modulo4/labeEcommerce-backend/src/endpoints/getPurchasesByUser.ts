import { Request, Response } from "express";
import { connection } from "../data/connection";

export const getPurchasesByUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  let errstatus = 500;
  const id = req.params.id;
  try {
    if (!id) {
      errstatus = 422;
      throw new Error("Dgite o id");
    }
    const result = await connection("labecommerce_purchases").select("*").where("user_id","LIKE",id);
     
    const purchases = result.map(item => item)

    res.status(200).send(purchases);
  } catch (error) {
    res.status(errstatus).send(error.sqlMessage || error.message);
  }
};
