const div = document.createElement('div');
div.id = "container";
const paragraph = document.createElement('p');
const h1 = document.createElement('h1');


h1.innerText = "Hello Jitedra Aur kese ho";
paragraph.innerText = "I think you are best citizen to india";
div.append(h1,paragraph);
document.body.append(div);

const box = document.getElementById('container');
// box.addEventListener('dblclick',()=>{
//     box.style.backgroundColor = 'green';
//     box.style.color = "yellow";
//     alert("Hey App Kese Mujhe abhi abhi pta chla hai tumhari tabiyat bahut kharab hai");
// })

// Single click use for this technique

// box.addEventListener('click',()=>{
//     box.style.backgroundColor = 'green';
//     box.style.color = "yellow";
//     alert("Hey App Kese Mujhe abhi abhi pta chla hai tumhari tabiyat bahut kharab hai");
// })

// mousedown click 
// box.addEventListener('mousedown',()=>{
//     box.style.backgroundColor = 'green';
//     box.style.color = "yellow";
//     alert("Hey App Kese Mujhe abhi abhi pta chla hai tumhari tabiyat bahut kharab hai");
// })

// mouseup click use for mouse event 
// box.addEventListener('mouseup',()=>{
//     box.style.backgroundColor = 'green';
//     box.style.color = "yellow";
//     alert("Hey App Kese Mujhe abhi abhi pta chla hai tumhari tabiyat bahut kharab hai");
// })

// mouse move use for clickable purpose
// box.addEventListener('mouseover',()=>{
//     box.style.backgroundColor = 'green';
//     box.style.color = "yellow";
//     // alert("Hey App Kese Mujhe abhi abhi pta chla hai tumhari tabiyat bahut kharab hai");
// })

// using keyword for clicking purpose
box.addEventListener('click',()=>{
    // console.log(event.key);
    box.style.backgroundColor = "white";
    box.style.color = "black";
})

box.removeEventListener('click',()=>{
    box.style.backgroundColor = "white";
    box.style.color = "black";
});


