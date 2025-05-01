// function add(number1,number2)
// {
//         console.log(number1+number2);
// }

// add(234552,23532);
// add(121,121);

// function multiply(num1,num2)
// {
//    return num1*num2;
// }

// let result = multiply(4,5);
// console.log(multiply(12,12));
// console.log(result);

// // 2nd method to create function 
// const fun = function(){
//     console.log("Hii Jitendra Sharma");
//     console.log("ByeBye");
// }

// console.group(fun);
// fun();

// // arrow function we arrow instead  of funciton =>

//     const sum = (num1,num2)=>{
//             return num1+num2;
//     }

//     console.log(sum(4234,2432437843567));

//     const product = (num1,num2,num3)=> num1*num2*num3;
//     console.log(product(1,12,23));
    

//     // jb bhi single parameter ho to hm in () ko bhi nhi lgate hai
//     const check = num1=> num1*num1*num1;
//     console.log(check(2));

//     // for multiple parameter se use krte rest operator(...)
//     const fun3 = function(...number)
//     {
//         console.log(number);
//     }

//     fun3(32,345,23,42,432,42,42);

var thinkof;
function pattern(n)
{
    for(let i=1; i<n; i++)
    {
        for(let j=1; j<=i; j++)
        {
            console.log(j);
            // console.log(" ");
        }

        console.log("\n");
    }
}
 pattern(6);
//  console.log(thinkof);
