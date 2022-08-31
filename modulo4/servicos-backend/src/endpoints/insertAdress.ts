import { Request, Response } from "express"
import { connection } from "../data/connection"


import { getAndressInfo } from "../servises/getInfoAddress"


export const insertAddres = async (req: Request, res: Response): Promise<void> => {
    const cep = req.params

    try {
        const result = await getAndressInfo(String(cep))

        if (!result) {
            throw new Error("Erro na requisição de pegar dados do usuário");
        }

        await connection('adrres')
            .insert({
                id:result.id,
                cep:Number(result.cep),
                numero: Number(result.numero),
                complemento: result.complemento,
                bairro: result.bairro,
                cidade: result.cidade,
                estado: result.estado,
                
                
            })

        res.status(200).send("Usuário cadastrado com sucesso!")


    } catch (error: any) {
        if (error instanceof Error) {
            res.send({ error, message: error.message })
        } else {
            res.send({ message: "Erro inesperado" })
        }
    }
}