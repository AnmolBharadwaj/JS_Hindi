const marvel_heroes = ["Thor", "Ironman", "Captain America"]
const dc_heroes = ["Batman", "Superman", "Aquaman"]

// marvel_heroes.push(dc_heroes) // pushes the whole array(dc heroes) inside the first arrays(marvel heroes) 

// console.log(marvel_heroes);

const concatAll = marvel_heroes.concat(dc_heroes) // pushes all the elements of one array(dc_heroes) to the other one(marvel_heroes) to make one new array

console.log(concatAll);

const spreadAll = [...marvel_heroes, ...dc_heroes]
console.log(spreadAll);

//**********flat***************

const anotherArray = [1, 2, 3, 4, 5, [6, 7, 8], 7, [8, [9, 10]]]

const usableArray = anotherArray.flat(Infinity)

console.log(usableArray);


console.log(Array.isArray("Anmol"));
console.log(Array.from("Anmol"));
console.log(Array.from({name: "Anmol"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));