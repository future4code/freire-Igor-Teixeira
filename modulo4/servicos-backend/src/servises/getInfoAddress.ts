import { Address } from "../types/typeAddress"
import axios from "axios"
const baseUrl = "https://viacep.com.br/ws"

export const getAndressInfo = async (cep: string): Promise<Address | null> => {
    try {
        const result = await axios.get(`${baseUrl}/${cep}/json`)

        const endereco: Address = {
            id:String(Date.now()),
            cep: result.data.cep,
            numero: Date.now(),
            complemento: result.data.bairro,
            bairro: result.data.bairro,
            cidade: result.data.localidade,
            estado: result.data.uf,
    
        }
        
  
        return endereco

    } catch (error: any) {
        return error.message || null
    }
}
