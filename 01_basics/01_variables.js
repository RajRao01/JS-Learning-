const accountId = 736781
let accountEmail = "raj@gmail.com"
var accountPassword = "12345"
accountCity = "Bettiah"
let accountState;

//  accountId = 2//not allowed
accountEmail = "raj02@gmail.com"
accountPassword = "121212"
accountCity = "Patna"

 console.log(accountId);
/*
prefer not to use var
becaue of issue in block scope and functional scope
*/
 console.table([accountId,accountEmail,accountPassword,accountCity,accountState])