const score = 300
// console.log(score);

const balance = new Number(100)
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(5));

const otherNumber = 150.8739
// console.log(otherNumber.toPrecision(3));

const hundreds = 100000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++++++++ Maths ++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4.323));
// console.log(Math.round(4.7));
// console.log(Math.ceil(5.1));
// console.log(Math.floor(6.9))
// console.log(Math.min(4, 3, 5, 2, 1));
// console.log(Math.max(4, 3, 5, 2, 1));


console.log(Math.random());
console.log(Math.random()*6);
console.log(Math.floor(Math.random()*6) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);