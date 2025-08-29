
// string to number 
let account_number = '100';
let num = Number(account_number);
console.log("number: "+num);
console.log( typeof account_number);  // the typeof operator tells you the current type of the variable itself, not the type of the value it originally came from.
console.log( typeof num);
let mul = '5*20';
console.log( Number(mul));  //Number() only works with simple numeric strings, not expressions

// NaN is not equal itself
console.log(NaN === NaN); //false 
console.log(NaN == NaN); //false

// Boolean to Number
let x = true;
console.log( Number(x));

// Number to Boolean
let y = 0;
console.log(Boolean(y));

// null to Number
let a = null
console.log(Number(a));

// Number to null
// let b = 0;
// console.log(null(b));  null is a value you assign, not a function you call.

// undefined to Number
let c;
console.log(Number(c));  // NaN

