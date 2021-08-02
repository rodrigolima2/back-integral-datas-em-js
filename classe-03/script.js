const getHours = require('date-fns/getHours')

function taAberto(data) {
    let taAberto = false;

    if (getHours(data) >= 8 && getHours(data) <= 18) {
        taAberto = true;
    }
    return taAberto;
}

console.log(taAberto(new Date(2015, 1, 1, 12)));
console.log(taAberto(new Date(2015, 1, 1, 2)));