// Object.create // Creating object using constructor

// object literals

const mySym = Symbol("key1") // symbol

const JsUser = {
    name: "Anmol", // name is key and Anmol is a value
    "full name": "Anmol Bharadwaj",
    [mySym]: "myKey1", // Correct syntax to define a symbol and use it as a key
    age: 22,
    Location: "Noida",
    Mail: "Anmol@google.com",
    IsLoggedIn: false,
    LastlogInDays: ["Monday", "Wednesday", "Friday"]
}

// console.log(JsUser);
// console.log(JsUser.Mail);
// console.log(JsUser["Mail"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.Mail = "Anmol@yahoo.com"
// Object.freeze(JsUser) // used to freeze an object so no changes could be made in that object after that
JsUser.Mail = "Anmol@riot.com"

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS family");
}

console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`); // "this" is used to reference same object (eg:- (`${}`) ) and using of ` is called string interpolation
}

console.log(JsUser.greetingTwo());