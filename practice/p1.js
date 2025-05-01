let arr = [1,2,3,4,5,6,7];
for(let day=0;day<arr.length;day++)
{
    switch(arr[day])
    {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        default:
            console.log("Sunday");
    }
}