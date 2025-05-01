// let obj = {
//     name:"rohan",
//     age:22,
//     gender:"male",
//     city:"kotdwar"
// };

// for(let key in obj)
// {
//     console.log(key,obj[key]);
// }

// let obj2 = Object.create(obj);
// obj2.money = 2000;
// obj2.id = "12jite";

// console.log(Object.keys(obj2));  // it prints only obj2 key or their values

// for(let key in obj2)   // it prints both keys or values of both objects obj and obj2
// {
//     console.log(key);
// }


// writable
// let obj3 = {}
// obj3.name = "jitendra sharma";
// Object.defineProperty(obj3,'name',
//     {
//         value:'jitendra sharma',
//         writable:false,
//         enumerable:true,
//         configurable:false,

//     }
// )

// configurable
// // console.log(Object.getOwnPropertyDescriptor(obj3,'name'));
// console.log(obj3.name);

// Object.defineProperty(obj3,'name',{
//     // value:'jitendra sharma';
//     writable:true
// })
// obj3.name = "jitendra";
// console.log(obj3.name);


// configurable
// let obj = {
//     name : "Jitendra sharma",
//     age:21,
//     balance:0,
//     account_number:120220356545
// };

// console.log(Object.entries(obj));  //it print all values of object
// Object.defineProperty(obj,'account_number',{
//     writable:false,
//     configurable:false
// })


// console.log(obj.account_number);

// Object.defineProperty(obj,'name',{
//     writable:false,
//     configurable:false
// })

// console.log(obj.name);

// enumerable

const customer = {
    name:"Saurav",
    age:22,
    account_number:34535874976591,
    acount_balance:4500
}

for(let keys in customer)
{
    console.log(keys);
}

Object.defineProperty(customer,'name',{
    enumerable:false 
})

console.log(" After editing enumerable true to false ")
for(let keys in customer)
{
    console.log(keys);
}

let customer1 = Object.create(customer);
customer.city = "Etawah";
customer.place = "Jila ghaziabad";

for(let keys in customer1)
{
    console.log(keys);
}

console.log(Object.getOwnPropertyDescriptor(Object.prototype,'toString'));