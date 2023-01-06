function calculaFeriasProporcionais(meses, valor) {
    let feriasProporcionais = (valor/12) * meses 
    return feriasProporcionais.toFixed(2)

}

let meses = 12
let valor = 1760
console.log(calculaFeriasProporcionais(12, 1760))