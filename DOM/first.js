//  created element using jss
 

// function atttach(content)
// {
//  const element = document.createElement('li');
//  element.innerHTML = content;

//  const element2 = document.createElement('li');
//  element2.innerHTML = content+"V2.0";

//  const parent = document.getElementById('list');
// //  parent.appendChild(element);
//  parent.append(element,element2);
// }


// atttach("TS");
// atttach("React");
// atttach("Node.js");
// atttach("GIT");
// atttach("Github");

//**************************************** */
// create text Node
// const element = document.createTextNode("Hello Jitendra ji");
// const parent = document.getElementById("list");
// parent.append(element);

//*************  create attribute node **********/
// const element = document.createAttribute("id");
// element.value = "first";

// access to first list
// const curr = document.querySelector('li');
// curr.setAttributeNode(element);

// access to second list 
// const parent = document.getElementById('list');
// parent.children[2].setAttributeNode(element);

//****************access attribute of element */
// const element = document.getElementById("list");
// console.log(element.getAttribute("class"));
// element.setAttribute("custom","20"); //create new attribute and sets its value
// element.setAttribute("class","jitendra") //update attribute and its value
// element.removeAttribute("custom");

//*****************adds node to the DOM********** */
// const parent = document.getElementById("list");
// const new_ele = document.createElement("li");
// new_ele.innerHTML = "TS";
// parent.prepend(new_ele);  //add element from start
// parent.append(new_ele);  //add element from end

// const child2 = parent.children[1];
// parent.insertBefore(new_ele,child2);
// parent.replaceChild(new_ele,child2);

// to delete element using javascritp
// const parent = document.getElementById("list");
// parent.remove();

const input = document.querySelector('input');
const label = document.querySelector('label');
const ol = document.createElement('ol');
const inp = document.getElementById('input');
label.addEventListener('click',()=>{
    const li = document.createElement('li');
    li.innerHTML = input.value;
    ol.append(li);
})
inp.append(ol);