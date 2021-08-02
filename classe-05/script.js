const getHours = require('date-fns/getHours');
const getDay = require('date-fns/getDay');

function taAberto(data) {
    let taAberto = false;

    if (getHours(data) >= 8 && getHours(data) <= 18) {
        if (getDay(data) !== 0 && getDay(data) !== 6) {
            taAberto = true;
        }
    }
    if (getDay(data) === 6) {
        if (getHours(data) >= 8 && getHours(data) <= 12) {
            taAberto = true;
        }
    }
    return taAberto;
}

console.log(taAberto(new Date(2021, 3, 25, 12)));
console.log(taAberto(new Date(2021, 3, 26, 12)));
console.log(taAberto(new Date(2021, 3, 26, 7, 59)));
console.log(taAberto(new Date(2021, 3, 24, 9, 30)));