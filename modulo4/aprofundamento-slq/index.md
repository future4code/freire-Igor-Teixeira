SET SQL_SAFE_UPDATES = 0;
# Exercicio 1
ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";

ALTER TABLE Actor DROP COLUMN salary;
# a ) esse comando apagaria o type salary

ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
# b )  nesse caso gender passaria a ter o type sex

ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
# c - d ) ecaso o nome nao mudaria pois e o mesmo nome mas agora so aceita 100 caracteries na string

# exercicio 2
#  a) Escreva uma query que atualize o nome e a data de nascimento do ator com o id 00
UPDATE Actor 
SET birth_date = "1993/04/26", name="Moacyr Franco"
WHERE id = "003";

# b ) Escreva uma query que atualize o nome da atriz Juliana Paes para JULIANA PAES. Então, escreva outra query para voltar ao nome anterior.
UPDATE Actor 
SET name = "JULIANA PAES"
WHERE name = "Juliana paes";

UPDATE Actor 
SET name = "juliana paes"
WHERE name = "JULIANA PAES";

# c) *Escreva uma query que atualize todas as informações do ator com o id `005`*

UPDATE Actor
SET name = "ingrid guimarães",salary = 500000, birth_date= "1972/06/05",gender = "female"
WHERE id = "005";

# exercicio 3
# a) Escreva uma query que apague a atriz com o nome Fernanda Montenegro
DELETE FROM Actor
WHERE name = "Fernanda Montenegro";

# exercicio 4
# a) Escreva uma query que pegue o maior salário de todos os atores e atrizes
SELECT MAX(salary) FROM Actor;

# b) Escreva uma query que pegue o menor salário das atrizes
SELECT MIN(salary) FROM Actor;

# c) *Escreva uma query que pegue a quantidade de atrizes*
SELECT COUNT(gender = "female") AS "quantidadeDeAtrizes"FROM Actor;

# d) Escreva uma query que pegue a soma de todos os salários

SELECT SUM(salary) FROM Actor;

# exercicio 5
# a) Releia a última query. Teste-a. Explique o resultado com as suas palavras
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

# b) Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética
SELECT id,name FROM Actor
ORDER BY name DESC;

# c) Faça uma query que retorne todos os atores ordenados pelo salário
SELECT * FROM Actor 
ORDER BY salary ;

# d) Faça uma query que retorne os atores com os três maiores salarios
SELECT * FROM Actor 
ORDER BY salary DESC
LIMIT 3;

# e) Faça uma query que retorne a média de salário por gênero
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

#EXERCICIO 6

#  a) Altere a tabela de Movie e adicione um novo parâmetro: playing_limit_date que indique a data limite em que o filme será passado no cinema. 

ALTER TABLE Filmes ADD playing_limit_date DATE;

# c) *Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído*Filmes

UPDATE Filmes
SET	playing_limit_date = "2020-12-31"
WHERE id = "002";

# d) Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.

DELETE FROM Filmes WHERE id = "001";


UPDATE Filmes
SET sinopse = "Hello world"
WHERE ID = "001";

SELECT avaliacao FROM Filmes
WHERE avaliacao >  7.5;


SELECT * FROM Filmes;
