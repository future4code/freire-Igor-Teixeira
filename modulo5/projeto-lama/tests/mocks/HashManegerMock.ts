import { genSalt, hash, compare } from "bcryptjs";

export class HashManagerMock {
  public hash = async (plaintext: string) => {
    let result:string = ""
    if(plaintext === "igortest"){
        result = "igortest-hash"
    }
    return result;
  };

  public compareHash = async (plaintext: string, hash: string) => {
    if(plaintext === "igortest" && hash === "igortest-hash"){
        return true
    }
    return false
  };
}
