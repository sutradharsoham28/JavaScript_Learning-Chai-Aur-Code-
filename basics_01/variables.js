const accountId=280105
let accountEmail="soham280105@gmail.com"
var accountPassword=12345
accountCity="Siliguri"
let accountState
let accountStreak=null


// accountId=324242    Cannot allow changing the value of const variables
accountEmail="sutradharsoham@gmail.com"
accountPassword=3533636
accountCity="Haldia"

// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);    Use table to print large data

/*
DO NOT USE var, because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState,accountStreak])


