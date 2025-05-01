// // const obj = {
// //     name : "jitendra ",
// //     age:20,
// //     course:"B Tech",
// //     salary:0,
// //     0:2,
// //     1:23,
// //     4:49038
// // }


// // console.log(obj.name); // methods to accessing from object element
// // console.log(obj["age"]);
// // console.log(obj[0]);

// // second method to create object using new keyword
// const obj1 = new Object();
// obj1.name = "jitendra sharma";
// obj1.age = 20;
// obj1.gender = "Male"

// console.log(obj1);

// // delete from Object
// delete obj1.name;
// console.log(obj1);

// // updation
// obj1.name = "jitendra sharma"

// // third method to create Object
// class person{
//     constructor(na,ag,sa)
//     {
//          this.name = na;
//          this.age = ag;
//          this.salary = sa;
//     }
// }

// let per1 = new person("Jitendra sharma",20,500);
// let per10 = new person("Jitendra sharma",20,500);
// let per100 = new person("Jitendra sharma",20,500);
// let per1000 = new person("Jitendra sharma",20,500);
// let per10000 = new person("Jitendra sharma",20,500);
// let per100000 = new person("Jitendra sharma",20,500);
// let per1000000 = new person("Jitendra sharma",20,500);
// console.log(per1);
// console.log(per10);
// console.log(per100);
// console.log(per1000);
// console.log(per10000);
// console.log(per100000);
// console.log(per1000000);

// function addition(number1,number2)
// {
//     return number1+number2;
// }

// const add = function(number1,number2)
// {
//     return number1+number2;
// }

// console.log(add(4,42542));

// // arrow function in javascript

// const sub = (number1,number2)=>{
//     return number1-number2;
// };

// console.log(sub(200,100));

// const fun = ()=>{
//     console.log("Hii Jitendra How are you");
// }

// fun();

// const funct1 = ()=> "Hii Jitendra sharma";
// console.log(funct1());


// // when we have a single parameter then we don't need to write parenthesis

// const multiply = a=>a*a*a;

// console.log(multiply(2));

// check negative and positive using rest parameter 
// (...) it contain multiple parameter as required                   
// const check = function(...number)
// {
//     for(let i=0;i<number.length;i++)
//     {
//         if(number[i]>0)
//             {
//                 console.log("Number is positive");
//             }
//             else
//             {
//                 console.log("Number is not negative");
//             }
//     }
// }

// check(1,1,-1,3,444,-3,43,3,-3,43,3,343,-33,-343,-34);

// Now we created a function which access object 
let obj = {
    name : "jitendra sharma",
    age : 20,
    amount : 0,
    course : "B Tech"
};

function fun(obj)
{
    console.log(obj.name);
    console.log(obj.age);
    console.log(obj);
}

// destructure object 

function destructure({amount,course})
{
    console.log(amount,course);
}

fun(obj);
destructure(obj);