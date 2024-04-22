// const tinderUser =  new Object()
const tinderUser = {}

tinderUser.id = "696969"
tinderUser.name = "Mia khalifa"
tinderUser.isLoggedIn = true

// console.log(tinderUser);

const regularUser = {
    fullName : {
        userfullname : {
            firstname : "Anmol",
            Lastname : "Bharadwaj"
        }
    }
}

// console.log(regularUser.fullName.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2} // ... is spread operator
// console.log(obj3);

const user = [
    {
        id : 1,
        email: "A@google.com"
    },
    {
        id : 2,
        email: "b@google.com"
    }
]

// console.log(user[1].email);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));