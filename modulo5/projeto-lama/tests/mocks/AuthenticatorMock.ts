import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../../src/models/Autenticator";
import { ROLES } from "../../src/models/User";

export class AutheticatorMock {
  public generateToken = (payload: AuthenticationData) => {
    let token = "";
    if (payload.roles === ROLES.ADMIN) {
      token = "token-mock-admin";
    } else if (payload.roles === ROLES.NOMAL) {
      token = "token-mock-nomal";
    }
    return token;
  };

  public getTokenData = (token: string): AuthenticationData => {
    switch (token) {
      case "token-mock-admin":
        const adminPayload: AuthenticationData = {
          id: "id-mock",
          roles: ROLES.ADMIN,
        };

        return adminPayload;

      case "token-mock-normal":
        const normalPayload: AuthenticationData = {
          id: "id-mock",
          roles: ROLES.NOMAL,
        };

        return normalPayload;

      default:
        return null;
    }
  };
}
