// Dates

let myDate = new Date()
console.log(myDate.getDay());
console.log(myDate.getMonth() + 1);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 4, 23)
// let myCreatedDate = new Date(2023, 4, 23, 21, 7)
// let myCreatedDate = new Date("2024-05-23")
let myCreatedDate = new Date("05-23-2024")

console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));

newDate.toLocaleString('default' , {
    weekday: "long", 
})