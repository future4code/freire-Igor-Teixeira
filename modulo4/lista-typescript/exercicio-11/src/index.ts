type Lista= {
    letra:string
    valor:number
}

const numerosRomanos: Lista[] = [
    {letra: "M", valor: 1000},
    {letra: "CM", valor: 900},
    {letra: "D", valor: 500},
    {letra: "CD", valor: 400},
    {letra: "C", valor: 100},
    {letra: "XC", valor: 90},
    {letra: "L", valor: 50},
    {letra: "XL", valor: 40},
    {letra: "X", valor: 10},
    {letra: "IX", valor: 9},
    {letra: 'V', valor: 5},
    {letra: "IV", valor: 4},
    {letra: 'I', valor: 1}
]

const anoEmRomano = (valor: number) => {
    const conversao = String(valor);
    const milenio = Number(conversao.substring(0, 1).concat('000'));
    const seculo = Number(conversao.substring(1, 2).concat('00'));
    const decada = Number(conversao.substring(2, 3).concat('0'));
    const singular = Number(conversao.substring(3, 4));
  
    const milenioConvertido = numerosRomanos
      .filter((item) => {
        if (item.valor === milenio) {
          return item;
        } else {
          return null;
        }
      })
      .map((item) => item.letra)
      .join();
  
    const seculoConvertido = numerosRomanos
      .filter((item) => {
        if (item.valor === seculo) {
          return item;
        } else {
          return null;
        }
      })
      .map((item) => item.letra)
      .join();
  
    const decadaConvertido = numerosRomanos
      .filter((item) => {
        if (item.valor === decada) {
          return item;
        } else {
          return null;
        }
      })
      .map((item) => item.letra)
      .join();
  
    const singularConvertido = numerosRomanos
      .filter((item) => {
        if (item.valor === singular) {
          return item;
        } else {
          return null;
        }
      })
      .map((item) => item.letra)
      .join();
  
    const anoRomano =
      milenioConvertido +
      seculoConvertido +
      decadaConvertido +
      singularConvertido;
  
    return anoRomano;
  };
  
  console.log(anoEmRomano(1999))