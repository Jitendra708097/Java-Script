let num = 123;
let num1 = new Number(123);
let num2 = new Number(123);

console.log(typeof(num));
console.log(typeof(num1));

console.log(num1==num2); //false: Because both are objects and they  memory allocate in heap
// num1,num2 stores addresses of these memory location and both address never same.

console.log(num == num1);  // True

let num3 = 2010.222222226489813548984;
console.log(num3.toFixed(2));   //2010.22

console.log(num3.toPrecision(5));

let num4 = num3.toString();
console.log(typeof num4);
console.log(num4);


