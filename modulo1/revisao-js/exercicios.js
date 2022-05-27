// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a, b) => a - b);
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let numerosElevados2 = [];
  for (let i = 0; i < array.length; i++)
    if (array[i] % 2 == 0) {
      numerosPares.push(array[i]);
    }
  return numerosPares;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let numerosElevados = [];
  for (let i = 0; i < array.length; i++)
    if (array[i] % 2 == 0) {
      let numElevados = array[i] ** 2;
      numerosElevados.push(numElevados);
    }
  return numElevados;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let numeroMaior = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > numeroMaior) {
      numeroMaior = array[i];
    }
  }
  return numeroMaior;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  const exercicio7 = {};
  let menorNumero = 0;
  let maiorNumero = 0;
  let maiorDivisivelPorMenor = 0;

  if (num1 > num2) {
    maiorNumero = num1;
    menorNumero = num2;
  } else {
    maiorNumero = num2;
    menorNumero = num1;
  }
  if (maiorNumero % menorNumero == 0) {
    maiorDivisivelPorMenor = true;
  } else {
    maiorDivisivelPorMenor = false;
  }
  let diferenca = maiorNumero - menorNumero;
  exercicio7.maiorNumero = maiorNumero;
  exercicio7.maiorDivisivelPorMenor = maiorDivisivelPorMenor;
  exercicio7.diferenca = diferenca;

  return exercicio7;
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let numerosPares = [];
  for (let i = 0; numerosPares.length < n; i++) {
    if (i % 2 == 0) {
      numerosPares.push(i);
    }
  }
  return numerosPares;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA == ladoB && ladoA == ladoC && ladoB == ladoC) {
    triangulo = "Equilátero";
  } else if (ladoA == ladoB && ladoA != ladoC && ladoB != ladoC) {
    triangulo = "Isósceles";
  } else if (ladoA != ladoB && ladoA != ladoC && ladoB != ladoC) {
    triangulo = "Escaleno";
  }
  return triangulo;
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  array.sort((a, b) => a - b);
  let segundo = array[array.length - 2];
  let primeiro = array[1];

  return [segundo, primeiro];
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`;
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  let dados = {
    ...pessoa,
    nome: "ANÔNIMO",
  };
  return dados;
}
// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  const podemAndar = pessoas.filter((pessoas) => {
    if (pessoas.altura >= 1.5 && pessoas.idade > 14 && pessoas.idade < 60) {
      return true;
    }
  });
  return podemAndar;
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  const naoPodeAndar = pessoas.filter((pessoas) => {
    if (pessoas.altura < 1.5 || pessoas.idade <= 14 || pessoas.idade > 60) {
      return true;
    }
  });
  return naoPodeAndar;
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  return contas.map((cliente) => {
    cliente.compras.map((compra) => {
      cliente.saldoTotal = cliente.saldoTotal - compra;
      cliente.compras = [];
    });
    return cliente;
  });
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  const ordemAlfabetica = consultas.sort(function (a, b) {
    if (a.nome > b.nome) {
      return 1;
    } else if (a.nome < b.nome) {
      return -1;
    } else {
      return 0;
    }
  });

  return ordemAlfabetica;
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    function compare(a,b){
        return a.dataDaConsulta < b.dataDaConsulta
    }
    return consultas.sort(compare)
}
