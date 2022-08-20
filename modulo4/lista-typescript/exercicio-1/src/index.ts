//  retorna data formatada
const returnsDate = (nome:string,data:string) => {
    const newDate = data.split("/")
    const day:string = newDate[0]
    const month:string = newDate[1]
    const year:string = newDate[2]
        console.log(`Olá me chamo ${nome}, nasci no dia ${day} do mês ${month} do ano de ${year}`)
}

returnsDate("igor","26/04/1993")