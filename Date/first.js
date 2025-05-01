// const date = new Date();
// console.log(date.toString());   //this format toString =  Sat Nov 30 2024 08:48:26 GMT+0530 (India Standard Time)
// console.log(date.toLocaleTimeString());

// creating a count down of birthday

const date1 = new Date("2025-07-20");
const date2 = new Date();
const date3 = date1-date2;

const days = date3/(1000*60*60*24);
const hour = date3/(1000*60*60)%24;
const minute = date3/(1000*60)%60;
const second = date3/(1000)%60;

console.log(`CountDown Start For My BirthDay Days :${Math.floor(days)} Hour :${Math.floor(hour)} Minute :${Math.floor(minute)} Second :${Math.floor(second)}`);
