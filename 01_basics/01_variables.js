const accountId = 14456
let accountEmail = "Anmol@gmail.com"
var accountPassword = "12345"
accountCity = "Noida"
let accountSate;

// accountId = 2 // not allowed

accountEmail = "Ab@Ab.com"
accountPassword = "54321"
accountCity = "Delhi"

console.log(accountId);

/*
prefer not using var
because of block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountSate])