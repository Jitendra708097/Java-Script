// call back is a function which is passes in another function as an argument

// function name(callback)
// {
//     console.log("This is a simple funciton call");
//     callback();
// }

// function greet()
// {
//     console.log("This is a call back function call");
// }


name(greet);

function name(()=>{
    console.log("this is a callback");
});