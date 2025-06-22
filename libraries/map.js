// it stores values in key and value pair form here key is datatype 
// unlike object where key only of string or symbol type

const mymap = new Map();

mymap.set(2,23);
mymap.set("name","jitendra sharma");
mymap.set(1,2);
mymap.set(3,4);
mymap.set("Course","B Tech");
mymap.set(5,6);
mymap.set("age",20);

console.log(mymap);  // it prints values of map with keys and values
console.log(mymap.keys());  // it print all keys from map
console.log(mymap.values());  // it print all values from map
console.log(mymap.entries());  // it creates array of each keys and values pair
console.log(mymap.size);  // it total number of keys-value pair
console.log(mymap.get(1));

// has(value) it checks value whether is present or not
let check = mymap.has("name");
console.log(check);

// delete value throw pass key 
console.log(mymap.delete("age"));
console.log(mymap);
