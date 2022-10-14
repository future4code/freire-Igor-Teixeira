import { ICreateDTO, ISignupDTO, ROLES, User } from "../../src/models/User";
import { DataBase } from "../../src/dataBase/DataBase";

export class UserDataMock extends DataBase {
  public static TABLE_USER = "User_lama";

  signUpDb = async (input: User) => {
    const userDB: ICreateDTO = {
      id: input.getId(),
      name: input.getName(),
      email: input.getEmail(),
      password: input.getPassword(),
      roles: input.getRoles(),
    };
    return "User created successfully";
  };

  getEmailDb = async (email: string) => {
    switch (email) {
      case "igor@gmail.com":
        const adminUser: ICreateDTO = {
          id: "id-mock",
          name: "igor",
          email: "igor@gmail.com",
          password: "igortest-hash",
          roles: ROLES.ADMIN,
        };
        return adminUser;
      case "normal@gmail.com":
        const normalUser: ICreateDTO = {
          id: "id-mock",
          name: "normal",
          email: "normal@gmail.com",
          password: "igortest-hash",
          roles: ROLES.NOMAL,
        };
        return normalUser;
      default:
        return undefined;
    }
  };

  getUserByIdDb = async (id: string) => {
    switch (id) {
      case "id-mock":
        const adminUser: ICreateDTO = {
          id: "id-mock",
          name: "igor",
          email: "igor@gmail.com",
          password: "123456",
          roles: ROLES.ADMIN,
        };
        return adminUser;
      default:
        return undefined;
    }
  };
}
