const accountId = 144553
let accountEmail = "vasu@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState;
console.log(accountId)
/*
prefer not to use var
because of the issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])