const arr1 = [1,2,3,4,5,6,7,8,9,10];
console.log(...arr1);  //it is known as spread operator which expands values 

// copy array arr1 in arr2
const arr2 = [...arr1,2,23,45,67,89,90];
console.log(arr2);

const number = [1,2,3,4,5];
function sum(a,b,c,d,e)
{
    return a+b+c+d+e;
}

const result = sum(...number);
console.log(result);

// spread operator on objects
const obj1 = {
    name:"jitendra kuamar",
    age:20,
    course:"B Tech"
}

console.log(obj1);

// rest operator 
const [first,...rest] = [1,2,3,4,5,6,7];
console.log(first);
console.log(...rest);

function restOperator(a,b,...rest)
{
    console.log(a)
    console.log(b)
    console.log(...rest);
}

restOperator(1,2,3,4,5,6,7,56,63,7673,"jitene");