export const returnColor = (name) => {
    switch (name.toUpperCase()) {
      case "MEGA-SENA":
        return "#6befa3";
      case "QUINA":
        return "#8666EF";
      case "LOTO-FÁCIL":
        return"#DD7AC6";
      case "LOTOMANIA":
        return "#FFAB64";
      case "TIMEMANIA":
        return "#5AAD7D";
      case "DIA DE SORTE":
        return "#BFAF83";
      default:
        return "#6befa3";
    }
  }