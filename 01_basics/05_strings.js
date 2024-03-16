const name = "Anmol"
const repoCount = 2

// console.log(name +  repoCount + " Value"); // Never do this

console.log(`My name is ${name} and my repo count is ${repoCount}`);


const gameName = new String ('OppaiSenpai')
console.log(gameName);
console.log(gameName [0]);
console.log(gameName.__proto__);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));
console.log(gameName.toUpperCase());

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(0, -4)
console.log(anotherString);

const newStringOne = "     Anmol     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Anmol.com/Anmol%20Bharadwaj"
console.log(url.replace('%20', '-'));
console.log(url.includes('Anmol'));

console.log(gameName.split('-'));