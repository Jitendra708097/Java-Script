const set = new Set([24,1342,14,545132,12,435,4532,124]);
console.log(typeof(set));
// console.log(set1);

// Add elements in set

set.add(5000);
set.add(450);
set.add(122);
set.add(450);
set.add(50);
set.add(10000);

console.log(set);
// console.log(typeof(set));

// Delete element from set
set.delete(122);
console.log(set);

// has(value) it checks value is present or not
let check = set.has(50);
console.log(check);

// size of set

let Size = set.size;
console.log(Size);

// converting set to an array
let arr = [...set];
console.log(arr[0]);


// converting arr to set

let set1 = new Set(arr);
console.log(set1);

// clear  deleted all elements from set
set.clear();
console.log(set);
