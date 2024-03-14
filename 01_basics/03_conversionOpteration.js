let score = true

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)

// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "69" => 69
// "69abc" => Nan
// true => 1; false => 0
// undefined => 

let loggedIn = "Anmol"

let BooleanIsLoggedIn = Boolean(loggedIn)
// console.log(BooleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Anmol" => true

let someNumber = 69

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// ***************** Operations *******************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2); // Addition operation
// console.log(2-2); // subtraction 
// console.log(2*2); // Multiplication
// console.log(2**3); // Power
// console.log(2/2); //division
// console.log(2%3); // Remainder

let str1 = "Hello"
let str2 = " Anmol"
let str3 = str1 + str2

// console.log(str3);

// console.log("2" + 3);
// console.log(2 + "3");
// console.log("2" + 3 + 3);  // preferred type
// console.log(2 + 3 + "3"); // preferred type

// console.log(((2 + 3) * 5) % 4);

// console.log(true);
// console.log(+true);
// console.log("");
// console.log(+"");

let x = 3
const y = x++

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

// If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

// If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.