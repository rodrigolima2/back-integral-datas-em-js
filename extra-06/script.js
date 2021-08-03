const getYear = require('date-fns/getYear');
const getDayOfYear = require('date-fns/getDayOfYear');

function promocao(dataInicio, dataCliente) {
    let taValendo = false;

    if (getYear(dataInicio) === getYear(dataCliente)) {
        if (getDayOfYear(dataInicio) === getDayOfYear(dataCliente)) {
            taValendo = true;
        }
    }
    return taValendo;
}

console.log(promocao(new Date(2021, 0, 21), new Date(2021, 1, 21)));
console.log(promocao(new Date(2020, 0, 21), new Date(2021, 0, 21)));
console.log(promocao(new Date(2021, 0, 21), new Date(2021, 0, 21)));