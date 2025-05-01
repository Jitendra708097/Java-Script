let obj = {
    name:"jitendra sharma",
    age:21,
    Course:"B Tech"
};

for(const key of Object.keys(obj))
{
    console.log(obj[key]);  // it access values of their keys
}

for(let values of Object.values(obj))
{
    console.log(values);  // it makes an array of values
}

for(const [key,value] of Object.entries(obj))
{
    console.log(`${key} : ${value}`);  // it makes an array of keys and values
}