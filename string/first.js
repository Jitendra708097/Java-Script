// string concatenation

// let str1 = "Hello ";
// let str2 = "Jitendra Sharma";
// let str3 = str1+str2;   // string concatenation
// console.log(str3);

//  console.log(str3.length);  //it find size of string

//  //"Hello Jitendra Sharma "  print this using single quotation''
//  console.log('"Hello Jitendra Sharma"')

// there are thee ways to declare string using single quot double quot and terminal symbol

let str = "jitendra sharma is a very smart boy and looking handsome ";  //"",'',``;
let str1 = 'Jitendra sharma is a very smart boy and looking handsome';
let str2 = `Jitendra sharma is a very smart boy and looking handsome`;

// console.log(str);
// console.log(str1);
// console.log(str2);

// string concatenation using + opreator
// console.log(str+str);

// // find length of string of using string.length object
// console.log(str.length);

// // Access character of string using indexing which starting from 0
// // 1st method 
// console.log(str[0]+str[str.length-4]);
// // 2nd method 
// // for(let index=0;index<str.length;index = index+1)
// // {
// //     console.log(str[index]);
// // }

// // 3rd method 
// console.log(str.charAt(0));

// // lowercase to uppercase
// console.log(str1.toLowerCase());
// console.log(str1.toUpperCase());
// console.log(str1);


// searching in string 
// console.log(str.indexOf("jitendra"));  //it returns first index of occuring substring first char in original string

// lastindex(substring)
// it return last index of substring from original 
// string if exist otherwise return -1

// console.log(str.lastIndexOf("jitendra"));

// check substring is present return true otherwsie false 

// console.log(str.includes("jitendra"));
// console.log(str.includes("jitendrajinfkfharbvbarygfbulrh"));

// Extracting substrings
//  Slice(start ,end)
// Extracts partof a string
//  from start index to end·
// end is
//  not included.

// console.log(str.slice(0,6));

//  replacing oldsubstring by newsubstring
console.log(str.replace("jitendra","jitendra very handsome boy"));