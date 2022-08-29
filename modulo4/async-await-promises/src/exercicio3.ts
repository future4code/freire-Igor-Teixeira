import axios from "axios"
import {baseUrl} from "./baseUrl"

type user = {
    id: string
    name:string
    email:string
}

const getSubscribers = async (): Promise<user[]> => {
    const response = await axios.get(`${baseUrl}/subscribers`);
    return response.data.map((res: any) => {
      return {
        id: res.id,
        name: res.name,
        email: res.email,
      };
    });
  };


  const main = async (): Promise<void> => {
  try {
    console.log(await getSubscribers())
  } catch (err: any) {
    console.log(err.response?.data || err.message)
  }
}

console.log(main())