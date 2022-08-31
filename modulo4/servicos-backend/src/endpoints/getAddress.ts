import axios from "axios";
import { Request, Response } from "express";
import { Address } from "../types/typeAddress";

export const getAddress = async (req: Request, res: Response) => {
  const cep: String | undefined = req.params.cep;

  try {
    const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

    const addres = {
      logradouro: result.data.logradouro,
      bairro: result.data.bairro,
      cidade: result.data.localidade,
      estado: result.data.uf,
    };
    

    res.status(200).send(result.data);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};
