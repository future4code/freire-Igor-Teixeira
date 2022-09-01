import { Request, Response } from "express";
import { connection } from "../data/connection";

export const purchaseRegister = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { userId, productId, quantity } = req.body;
  let errstatus = 500;
  try {
    if (!userId || !productId || !quantity) {
      errstatus = 422;
      throw new Error("Digite os parametros esperados no body");
    }
    const result = await connection("labecommerce_products")
      .select("price")
      .where("id", "like", productId);
    console.log(result);
    const total = Number(result[0].price) * Number(quantity);
    await connection("labecommerce_purchases").insert({
      id: Date.now().toString(),
      user_id: userId,
      product_id: productId,
      quantity,
      total_price: total,
    });
    res.status(200).send("Compra registrada com sucesso!");
  } catch (error: any) {
    res.status(errstatus).send(error.message);
  }
};
