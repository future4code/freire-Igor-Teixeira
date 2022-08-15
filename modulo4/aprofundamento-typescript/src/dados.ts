type Data = {
  id: number;
  name: string;
  phone: string;
  email: string;
  website: string;
  post: Post[];
};
type Post = {
  postId: number;
  title: string;
  body: string;
  userId: number;
};

export const PersonalData: Data[] = [
  {
    id: 1,
    name: "joão",
    phone: "999653265",
    email: "joão@gmail.com",
    website: "joão.net",
    post: [
      {
        postId: 1,
        title: "Sabadou",
        body: "Sabadou galera bora curtir o find .",
        userId: 1,
      },
    ],
  },
  {
    id: 2,
    name: "Rodrigo",
    phone: "999569823",
    email: "rodriguo@gmail.com",
    website: "rodrigo/moveis.net",
    post: [
      {
        postId: 2,
        title: "Trilha",
        body: "Bom dia pessoal,no feriado vai rolar uma trilha ,partiu se conectar com a natureza. ",
        userId: 2,
      },
    ],
  },
  {
    id: 3,
    name: "Marcela",
    phone: "999963486",
    email: "marcela@net.com",
    website: "marcela/personal.net",
    post: [
      {
        postId:3,
        title: "Bom dia",
        body: "A maior prova de que você pode fazer o impossível, é superar circunstâncias difíceis.",
        userId:3,
      },
    ],
  },
  {
    id: 4,
    name: "Joana",
    phone: "99959632147",
    email: "joana@recruter.com",
    website: "joana/rh.net",
    post: [
      {
        postId: 4,
        title: "Superação",
        body: "Da mesma forma que a felicidade não dura para sempre, a tristeza também não ",
        userId: 4,
      },
      {
        postId: 5,
        title: "Boa tarde",
        body: "Diazão bora aproveitar",
        userId: 4,
      },
    ],
  },
];
