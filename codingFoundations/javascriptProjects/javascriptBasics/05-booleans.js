let isLoggedIn = true;
let isAuthenticated = true;
let hasLoggedInToday = false;
let hasToken = false;

// ! Comparison / Relational Operators

console.log(2 == '2');
// double equals checks for values only; this returns true
console.log(2 === '2');
// triple equals, strict equals - checks for values and data types; this returns false
console.log(2 != '2');
// bang equals means does not equal ; returns false 
console.log(2 !== '2');
// stricter does not equal, checks for values and data types ; returns true 
console.log(5 > 5); // returns false
console.log(5 >= 5); // returns true
console.log(5 < 5); // returns false
console.log(5 <= 5); // returns true

// ! Logic Operators

let x = true;
let y = false;

console.log(x&&y) // AND Operator - checks to see if both variables are true
console.log(x||y) // OR Operator - checks to see if either operator is true
console.log(!x) // NOT operator - checks to see if specific variable is not true