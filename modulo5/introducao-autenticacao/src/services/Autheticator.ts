import { AuthenticationData } from "../type.ts/AuthentionData";
import * as jwt from "jsonwebtoken";



export class Autheticator{
  generateToken(input: AuthenticationData): string {
  const token = jwt.sign({ id: input.id }, process.env.JWT_KEY as string, {
    expiresIn: '24h',
  });
  return token;
  }

}
