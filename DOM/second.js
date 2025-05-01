const container = document.getElementsByClassName("container")[0];
const first = document.getElementsByClassName('first')[0];
// const container = document.getElementById('container1')
container.style.backgroundColor = "pink";
first.style.backgroundColor = "black";

// IN class selector there is an issue that 
// With getElementById, 
// you don't need to worry about specifying which element you want,
//  as it always returns one element.

// With getElementsByClassName, 
// you get a collection (HTMLCollection) of elements, 
// even if there's only one element with that class name.

// Since getElementsByClassName returns a collection, 
// you need to specify which element you want to modify 
// by indexing into the collection (e.g., [0] for the first element). 
// This is why there's an extra step when using class selectors.