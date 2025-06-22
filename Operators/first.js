// let a = 2;
// console.log(2**3);  //** exponentiation operator

// let sum = 20;
// console.log(sum++);  // post increament
// console.log(sum--);  // post decreament
// console.log(sum);

// let num = 4;
// console.log(--num);  // pre decreament
// console.log(++num);  // pre increament

// // **= Exponentiation &assign 
// let x = 4;
// x**=2;
// console.log(x);

// // Null is only equivalent to undefined otherwise in all cases it is not equals
// console.log(null == 0); // false
// console.log(NaN == NaN); // false
// console.log(null == undefined) // true
// console.log(null >= 0); // true because null is converted into 0
// console.log(null <= 0); // true because null is converted into 0

// const nuM = 123;
// const str = "123";
// const abc = 123;
// console.log(nuM == str == abc);

// && operator 
// If the first operand (a) is falsy (e.g., 0, null, undefined, false, NaN, or ""), the result will be the first operand.
// If the first operand (a) is truthy, the result will be the second operand (b), regardless of its value.

let a = 10;
let b = null;
console.log(a && b);

// || operator
// Both Operands Truthy:

let a11 = 10;
let b11 = 20;
console.log(a || b);  // Output: 10
// Since a is truthy (10), the operator returns a without evaluating b.

// First Operand Falsy:
let x = 0;
let y = 20;
console.log(x || y);  // Output: 20
// Since x is falsy (0), the operator evaluates y and returns it.

// Both Operands Falsy:
let m = 0;
let n = "";
console.log(m || n);  // Output: ""
// Both m and n are falsy, so the operator returns the second operand (n).

// General Behavior:
// Truthiness: The logical OR operator returns the first truthy value.

// Fallbacks: It provides a way to set default values when dealing with potential null, undefined, or other falsy values.
let a1 = 10;
let b1 = null;
console.log(a || b);