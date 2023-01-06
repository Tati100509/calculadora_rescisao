function calculaSaldoSalario(salario,dias){
    let saldoSalario = (salario/30) *  dias
    return saldoSalario.toFixed(2)

}

let salario = 1320
let dias = 26
console.log(calculaSaldoSalario(1320,26))


function calculaFeriasProporcionais(meses, valor) {
    let feriasProporcionais = (valor/12) * meses 
    return feriasProporcionais.toFixed(2)

}

let meses = 12
let valor = 1760
console.log(calculaFeriasProporcionais(12, 1760))