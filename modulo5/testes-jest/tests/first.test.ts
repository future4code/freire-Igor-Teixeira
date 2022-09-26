//exercicio 1

describe("Test retornar em caixa alta", () => {
  test("retorna caixa alta", () => {
    const parametroUpperCase = (str: string): string => {
      return str.toUpperCase();
    };
    expect(parametroUpperCase("bananinha")).toBe("BANANINHA");
  });

  // exercicio 2

  test("rettorna array de letras", () => {
    const toSplit = (str: string): string[] => {
      return str.split("");
    };
    const result = toSplit("bananinha");
    expect(result).toEqual(["b", "a", "n", "a", "n", "i", "n", "h", "a"]);
  });

  //exercicio 3
  test("tranform string em numero ", () => {
    const transformaNumero = (str: string): number => {
      return Number(str);
    };
    const result = transformaNumero("232");
    expect(result).toBe(232);
  });

  // exercicio 4

  test("retorna numero de caracteries", () => {
    const numeroDeCaracteries = (str: string): number => {
      const result = str.split("");
      return result.length;
    };
    const result = numeroDeCaracteries("igor");
    expect(result).toBe(4);
  });

  // exercicio 5

  test("retorna numero de caracteries", () => {
    const randomNumber = (): number => {
      const min = 1;
      const max = 10;
      const result = Math.floor(Math.random() * (max - min + 1)) + min;
      return result;
    };
    const numero = randomNumber();

    const result = (numero: number): boolean => {
      numero > 1 && numero < 10;
      return true;
    };

    expect(result(numero)).toBe(true);
  });

  //exercicio 6

  type User = {
      name:string,
      age:number  
  }

  const usuarios:User[] = [
        {
            name:"astrodev",
            age:26
        },
        {
            name:"Goku",
            age:327
        }
  ]

  test("Filtra array de usuarios",()=>{
    const listaUser = (lista:User[],name:string): string =>{
        lista.find(user => user.name === name)
        return name
  }
    expect(listaUser(usuarios,"astrodev")).toBe("astrodev")
  })

  //exercicio 7

  const mediaNumeros = (array:number[]):number => {
    let soma = 0
    for (let n of array) {
        soma += n
    }
    const result = Math.ceil(soma / array.length)

    return result
  }
  test("Retorna media entre numeros",()=>{
    expect(mediaNumeros([10, 4, 7, 6])).toEqual(7)
  })

  // exercicio 8
  const calcularIdade= (ano: number): number => {
    const anoAtual = new Date().getFullYear()
    const age = anoAtual - ano
    
    return age
}
    test("retorna idade atual",() => {
        const result = calcularIdade(1993)
        expect(result).toBe(29)
    })

    //exercicio 9
    const formatDate = (data: string): string => {
        const novaData = new Date(data)
            const dataFormatada = novaData.toLocaleDateString()
    
        return dataFormatada
    }
    test("retorna data formatada",() => {
        const result = formatDate("1993/04/26")
        expect(result).toBe("26/04/1993")
    })


 


});
