// Calcular Saldo Salário

function calculaSaldoSalario(salario,dias){
    let saldoSalario = (salario/30) *  dias
    return saldoSalario.toFixed(2)

}

let salario = 1320
let dias = 26
console.log(calculaSaldoSalario(1320,26))


// Calcular Férias Proporcionais

function calculaFeriasProporcionais(meses, valor) {
    let feriasProporcionais = (valor/12) * meses 
    return feriasProporcionais.toFixed(2)

}
  
let meses = 12
let valor = 1760
console.log(calculaFeriasProporcionais(12, 1760))

// Cálculo Férias Vencidas: 
// Saláriointegral = 1320
// Fórmula: Salário integral * 1.3 adicional * 2 = 1320 * 1.3 * 2
// Férias Vencidas = 3432


// Calcular Multa Rescisória

function calculaMultaRescisoria(saldoSalario, feriasVencidas, feriasProporcionais) {
    let multaRescisoria = totalContribuicaoFgts * 0.4
    return multaRescisoria.toFixed(2)
}
    let saldoSalario = 1144
    let feriasVencidas = 3432
    let feriasProporcionais = 1760

    let salario1 = 1320
    let depositoMensalFgts = salario1 * 0.08
    
    let totalContribuicaoFgts = depositoMensalFgts * 12

    console.log(calculaMultaRescisoria(1144, 3432, 1760))



