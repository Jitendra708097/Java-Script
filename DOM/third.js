// creating a new HTML element using js 
const element = document.createElement('div');
element.id = "container";
// const paragraph = document.createElement('p');
// paragraph.innerText = "Hello Ji Keso Ho Aao sb this is jitendra sharma";


// This is a textnode 
// const textnode = document.createTextNode('Hello ji keso ho aap sb');

// element.append(paragraph,textnode);
// document.body.appendChild(element);
// // document.body.appendChild(textnode);


const h1 = document.createElement('h1');
const h2 = document.createElement('h2');
const h3 = document.createElement('h3');
const h4 = document.createElement('h4');
const h5 = document.createElement('h5');
const h6 = document.createElement('h6');
const paragraph = document.createElement('p');

paragraph.innerHTML = "Hello jitendra kese ho";
h1.innerHTML = "HaPpaY";
h2.innerHTML = "HaPpaY";
h3.innerHTML = "HaPpaY143";
h4.innerHTML = "HaPpaY";
h5.innerHTML = "HaPpaY";
h6.innerHTML = "HaPpaY";

// element.insertBefore(h3,h2);
element.append(h1,h2,h4);  // it add element as a last child
element.prepend(h6,h5);  // it add element as first child
element.insertBefore(h3,h5);  // it insert the element before that element you want to add
document.body.appendChild(element);
element.replaceChild(paragraph,h1);  // it replaces the element that you want to replace (new_element,old_element)
element.removeChild(paragraph); // it removes specified child that you want to remove

// element.remove();  it removes element
