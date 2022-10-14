import { PostBusiness } from "../src/business/PostBusiness";
import { BaseError } from "../src/errors/BaseError";
import {
  IAddLikeInputDTO,
  IAddLikeOutputDTO,
  ICreatePostInputDTO,
  IGetPostsInputDTO,
  ILikeDB,
  IRemoveLikeInputDTO,
  IRemoveLikeOutputDTO,
  Post,
} from "../src/models/Post";
import { AuthenticatorMock } from "./mocks/AuthenticatorMocks";
import { IdGeneratorMock } from "./mocks/IdGenerateMocks";
import { PostDatabaseMock } from "./mocks/PostDataMocks";
describe("testando postBusiness", () => {
  const postBusiness = new PostBusiness(
    new PostDatabaseMock(),
    new IdGeneratorMock(),
    new AuthenticatorMock()
  );

  test("Lista de posts", async () => {
    const input: IGetPostsInputDTO = {
      token: "token-mock-normal",
    };
    const response = await postBusiness.getPosts(input);
    expect(response.posts.length).toBe(3);
    expect(response.posts[0]).toBeInstanceOf(Post);
  });

  test("criar novo post", async () => {
    const input: ICreatePostInputDTO = {
      token: "token-mock-normal",
      content: "Teste do mock",
    };

    const response = await postBusiness.createPost(input);
    expect(response.message).toBe("Post criado com sucesso");
    expect(response.post).toBeInstanceOf(Post);
    expect(response.post.getId()).toBe("id-mock");
    expect(response.post.getContent()).toBe("Teste do mock");
    expect(response.post.getLikes()).toBe(0);
    expect(response.post.getUserId()).toBe("id-mock");
  });

  test("dar like", async () => {
    const input: IAddLikeInputDTO = {
      token: "token-mock-admin",
      postId: "202",
    };
    const mensagem: IAddLikeOutputDTO = {
      message: "Like realizado com sucesso",
    };
    const response = await postBusiness.addLike(input);
    expect(response.message).toBe(mensagem.message);
  });

  test("dislike", async () => {
    const input: IRemoveLikeInputDTO = {
      token: "token-mock-admin",
      postId: "201",
    };
    const mensagem: IRemoveLikeOutputDTO = {
      message: "Like removido com sucesso",
    };

    const response = await postBusiness.removeLike(input);
    expect(response.message).toBe(mensagem.message);
  });

  test("createPost content menor que 1 caracter", async () => {
    try {
      const input: ICreatePostInputDTO = {
        token: "token-mock-normal",
        content: "",
      };
      await postBusiness.createPost(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400);
        expect(error.message).toBe(
          "Parâmetro 'content' inválido: mínimo de 1 caracteres"
        );
      }
    }
  });

  test("teste no get post se token e valido ", async () => {
    try {
      const input: ICreatePostInputDTO = {
        token: "token-mock",
        content: "Teste do mock",
      };
      await postBusiness.getPosts(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(401);
        expect(error.message).toBe("Credenciais inválidas");
      }
    }
  });
});
