// call back function 

function fetchuser()
{
    console.log("Data is fetching")
    setTimeout(()=>{
        console.log("Data fetched successsfully");
        greet("jai ho");
        meet();
    },2000)
}

function greet(name)
{
    console.log(`Hello ${name}`);
}

function meet(name)
{
    console.log(`Hello ${name} I will meet you in ghaziabad`);
}
fetchuser();