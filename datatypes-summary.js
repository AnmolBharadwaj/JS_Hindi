//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100 // Number
const scoreValue = 100.3 // Number

const isLoggedIn = false // Boolean
const outsideTemp = null // null
let userEmail; // Undefined

const id = Symbol('123') // Symbol
const anotherId = Symbol('123') // Symbol

console.log(id === anotherId); 

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heroes = ["Ironman", "Thor", "Hawkeye"]; // Arrays
let myObj = {
    name: "Anmol",
    age: 22,
} // Object

const myFunction = function(){
    console.log("Hello world");
} // function

console.log(typeof bigNumber); // typeof function


// https://262.ecma-international.org/5.1/#sec-11.4.3

// Primitive datatypes:
// String - string
// Number - number
// Boolean - Boolean
// Null - object(****)
// Undefined - undefined
// BigInt - bigint

// Non-primitive datatypes:
// Array - object
// Function - function(object)
// Object - object