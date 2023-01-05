function calculaSaldoSalario(salario,dias){
    let saldoSalario = (salario/30) *  dias
    return saldoSalario

}

let salario = 1320
let dias = 26
console.log(calculaSaldoSalario(1320,26))