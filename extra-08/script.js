const format = require('date-fns/format');

console.log(format(new Date(2020, 9, 5), "dd 'de' MMMM 'de' yyyy"));
console.log(format(new Date(2020, 9, 5), "dd/MM/yyyy"));
console.log(format(new Date(2020, 9, 5), "d MMM"));
console.log(format(new Date(2020, 9, 5), "dd MMM yyyy"));
console.log(format(new Date(2020, 9, 5), "dd 'de' MMM 'de' yyyy"));
console.log(format(new Date(2020, 9, 5), "dd/MMM"));
