const accountId=14453
let accountEmail="hitesh@google.com"
var accountPassword="12345"
accountCity="Jaipur" // possible to declare variable like this but should never do, not a good practice 
let accountState; // this will display undefined in console because the variable is only declared and not alloted any value 

// accountId=2 // not allowed since const because you have used accountId brfore with const 

/*
prefer not to use var datatype because of issue in block scope and functional scope use let instead a better choice 
*/

accountEmail="hc@hc.com"
accountPassword="212121"
accountCity="Bengaluru"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])