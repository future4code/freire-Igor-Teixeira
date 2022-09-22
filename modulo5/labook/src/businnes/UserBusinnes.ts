import { UserData } from "../dataBase/UserData";
import { CustomError } from "../error/CustomError";
import { ILoginDTO, ISignupDTO, User } from "../models/User";
import { Autheticator } from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";
import { HashManager } from "../services/HashManeger";

export class UserBusinnes {
  constructor(
    private userData: UserData,
    private generateId: GenerateId,
    private authenticator: Autheticator,
    private hash: HashManager
  ) {}

  signupBusinnes = async (input: ISignupDTO) => {
    const { name, email, password,roles } = input;

    const validEmail = await this.userData.getUserByEmail(email);
    console.log(name, email);

    if (!name || !email || !password || !roles) {
      throw new CustomError(422, "Digite os parametros necessarios");
    }
    if (!email.includes("@") || !email.includes(".com") || !email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) || typeof(email)!== "string" ) {
      throw new CustomError(422, "Formato de email invalido");
    }
    if (validEmail.length > 0) {
      throw new CustomError(409, "Email ja cadastrado");
    }
    if (password.length < 6 || typeof(password)!== "string") {
      throw new CustomError(422,"erro, Digite pasword tipo (string) e com no minimo 6 digitos");
    }
    if(name.length < 3 || typeof(name)!== "string"){
      throw new CustomError(422,"name invalido :(string com no minimo 3 caracteries")
    }
    const id = this.generateId.generateId();
    const newPassword = await this.hash.hash(password);
    const newUser = new User(id, name, email, newPassword,roles);
    await this.userData.signup(newUser);

    const token = this.authenticator.generateToken({ id,roles });

    return token;
  };

  loginBusines = async (input: ILoginDTO) => {
    const { email, password } = input;

    const [validUser] = await this.userData.getUserByEmail(email);
    if (!email || !password) {
      throw new CustomError(422, "Digite os parametros necessarios");
    }
    if (!email.includes("@") || !email.includes(".com") || !email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
      throw new CustomError(422, "Formato de email invalido");
    }
    if (!validUser) {
      throw new CustomError(409, "Email não cadastrado");
    }
    if (password.length < 6 || typeof(password)!== "string") {
      throw new CustomError(422, "erro, Digite pasword tipo (string) e com no minimo 6 digitos");
    }
    const validPassword = await this.hash.compareHash(
      password,
      validUser.password
    );
    if (!validPassword) {
      throw new CustomError(401, "senha invalida");
    }
    const token = this.authenticator.generateToken({ id: validUser.id,roles:validUser.roles });

    return token;
  };
}
