// function fetchdata(callback)
// {
//     console.log("Data fetching....");
//     setTimeout(()=>{
//         console.log("Data fetched Succesfully")
//     },2000);

//     const name = "jitendra sharma";
//     callback(name);
    
// }

// function meet(name)
// {
//     console.log(`Hey ${name} how goes it`);
// }

// fetchdata(meet);

// callback hell function 
function Order(callback)
{
    console.log("I am talking zomato");
    setTimeout(()=>{
        console.log("Order placed succesfully")
        callback();
    },2000);
}

function Preperation(callback)
{
    console.log("Order start preparing");
    setTimeout(()=>{
        console.log("Order prepared succesfully")
        callback();
    },2000);
}

function pickupOrder(callback)
{
    console.log("Reaching to restaurant for picking order");
    setTimeout(()=>{
        console.log("Order picked up from hotel");
        callback();
    },2000);
}

function deliverOrder()
{
    console.log("Order on the way");
    setTimeout(()=>{
        console.log("Order placed succesfully")
    },5000);
}

Order(()=>{
    Preperation(()=>{
        pickupOrder(()=>{
            deliverOrder();
        })
    });
});