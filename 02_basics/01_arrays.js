// Arrays

// const myArr = [0(These are elements), 1, 2, 3, 4, true , false, "Anmol"] 

const myArr= [1, 2, 3, 4, 5]

const myArr2 = new Array(5, 3, 4, 2, 1)
// console.log(myArr[0]);
// console.log(myArr2[3]);

// Array Methods

// myArr.push(6) //push elements in the array
// myArr.push(7)
// myArr.pop() // remove/pop the last added element from the array


// myArr.unshift(7) // push elements in the array on the starting position
// myArr.shift() // pop/remove elements from the starting position
// console.log(myArr);

// console.log(myArr.includes(5));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() //converts the array to a string and also combine them

// console.log(newArr);
// console.log(typeof newArr);



//**********Slice and Splice***********

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // Manipulates a copy of a reference of the array
console.log(myn1);

console.log("B ", myArr);

const myn2 = myArr.splice(1,3) // manipulates the orignal data of the array
console.log("C ", myArr);
console.log(myArr);

