// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);
// console.log(2 >= 1);
// console.log(2 <= 1);

// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0); // we avoid these types of comparisons
console.log(null == 0); // equality keeps null as null
console.log(null >= 0); // comparisons like(>, <, >=, <=) converts "null" to 0

// strict check => "==="

console.log("2" === 2);