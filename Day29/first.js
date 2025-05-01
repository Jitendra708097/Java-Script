


// const promises = fetch(`http://api.weatherapi.com/v1/current.json?key=96c25612e1534369976122856252801&q=London&aqi=yes`);


// we can print this result using setTimeout 
// in this techinque problem occurs of time 
// setTimeout(()=>{
//     console.log(obj);
// },2000);


// promises.then((result)=>{
//     console.log(result);
// })

// there are three states of promise 
// 1.pending
// 2.resolve
// 3.reject

// console.log(promises);  // this is a pending state 

// promises.then((result)=>{  // this is a resoleve state
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);   // this is a reject state
// })

// it print body part of this API 

// const pro2 = promises.then((response)=>{
//     //  const pro2 = response.json();  //java script object notation 
//     //  pro2.then((response1)=>{
//     //     console.log(response1);
//     //  })

//     return response.json();
// })

// // second method 
// pro2.then((response1)=>{
//     console.log(response1);
//  })

//  fourth
// promises.then((response)=>{
//     return response.json();
// }).then((result)=>{
//     console.log(result);
// })

// third
// promises
// .then(response=>response.json())
// .then(data=>console.log(data))

// fifth method 
fetch(`http://api.weatherapi.com/v1/current.json?key=96c25612e1534369976122856252801&q=London&aqi=yes`)
.then(response=>response.json())
.then(data=>console.log(data))
.catch(error=>console.log(error));

