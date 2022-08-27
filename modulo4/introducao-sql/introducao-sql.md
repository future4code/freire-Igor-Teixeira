USE `name`;

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
SHOW DATABASES;
# abre os resultados da table;
DESCRIBE Actor;
#aparece informações da tabela;

#exercicio 2 ;

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
	"009",
	"Gloria pires",
	1200000,
	"1963-08-23",
	"female"
);

INSERT INTO Actor (id, name, salary,birth_date,gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
# erro pois não foi declarado os parametros corretamente

INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  "Debora seco",
  400000,
  "1949-04-18", 
  "male"
);
# erro pois faltou o valor nomme 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female");

# erro pois faltaram as aspas na data
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "tom hancks",
  719333.33,
  "1979-03-26", 
  "male"
);

SELECT * FROM Actor;

SELECT id, salary from Actor ;
 #select com filtro 
 
 SELECT id, name from Actor WHERE gender = "male";
 #retorna somente gender male
 
 SELECT id, name from Actor WHERE gender = "invalid";
 
SELECT id, name, salary from Actor WHERE salary <= 500000;

SELECT id, name from Actor WHERE (name LIKE "A%" OR name  LIKE "j%") AND salary > 300000;
 
 SELECT id, name,salary from Actor WHERE  salary BETWEEN 300000 AND 700000;
 
 # retorna um valor entre os dois atribuidos 
 
  SELECT id, name,salary from Actor WHERE  (name NOT LIKE "A%" ) AND  salary >350000 ;
 # RETORNA NOME COM INICIAL DIFERENTE DE a E SALARIO MAIOR QUE 350000
 
 SELECT id, name,salary from Actor WHERE  (name LIKE "g%" OR name LIKE "G%") ;
 
  SELECT id, name,salary from Actor WHERE (name LIKE "%A%" or name LIKE "%G%" ) AND salary BETWEEN 350000 AND 900000;
  
  CREATE TABLE Filmes(
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
   sinopse VARCHAR(255) NOT NULL,
   dataDeLançamento DATE NOT NULL,
   avaliacao  INT NOT NULL
);


INSERT INTO Filmes (id, name, sinopse, dataDeLançamento, avaliacao) 
VALUES(
	"004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9
);
INSERT INTO Filmes (id, name, sinopse, dataDeLançamento, avaliacao) 
VALUES(
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos.",
    "2006/01/06",
    7
);

INSERT INTO Filmes (id, name, sinopse, dataDeLançamento, avaliacao) 
VALUES(
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela.",
    "2012/12/27",
    10
);

INSERT INTO Filmes (id, name, sinopse, dataDeLançamento, avaliacao) 
VALUES(
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017/11/02",
    8
);

SELECT id,name,avaliacao FROM Filmes WHERE id = "002";

SELECT id, name, sinopse, dataDeLançamento, avaliacao FROM Filmes WHERE name =  "Dona Flor e Seus Dois Maridos";

SELECT id,name,sinopse FROM Filmes WHERE avaliacao >= 7;

SELECT name FROM Filmes WHERE sinopse LIKE "%vida%";

SELECT name , id FROM Filmes WHERE (sinopse LIKE "%uma%") AND avaliacao > 7 ;








 
 
 