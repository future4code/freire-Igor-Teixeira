import { Request, Response } from "express";
import { connection } from "../data/connection";



export const getPurchases = async (id:string) => {
    const result = await connection("labecommerce_purchases").select("*").where("user_id","LIKE",id);
     return result
   
};

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  let errstatus = 500;
  try {
   
    const result = await connection('labecommerce_user').select("*")
    for (let i = 0; i < result.length; i++) {
      result[i].purchases = await getPurchases(result[i].id)
  }
    res.status(200).send(result);
  } catch (error: any) {
    res.status(errstatus).send(error.message);
  }
};
