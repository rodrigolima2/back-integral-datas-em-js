const getYear = require('date-fns/getYear');
const getDayOfYear = require('date-fns/getDayOfYear');

/**/
function promocao(dataInicio, dataCliente) {
    let taValendo = false;

    if (getYear(dataInicio) === getYear(dataCliente)) {
        if (getDayOfYear(dataCliente) >= getDayOfYear(dataInicio) && getDayOfYear(dataCliente) <= getDayOfYear(dataInicio) + 30) {
            taValendo = true;
        }
    }
    return taValendo;
}

console.log(promocao(new Date(2021, 0, 1), new Date(2021, 0, 23)));
console.log(promocao(new Date(2021, 0, 1), new Date(2021, 1, 23)));
console.log(promocao(new Date(2021, 0, 1), new Date(2020, 0, 23)));
console.log(promocao(new Date(2021, 1, 1), new Date(2021, 2, 3)));