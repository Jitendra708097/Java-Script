const one = document.getElementById('one');
const two = document.getElementById('two');
const plus = document.getElementById('plus');
const result = document.getElementsByTagName('h2');

one.addEventListener('click',(event)=>{
    one1 = one.innerHTML;
    result.innerHTML = one1;
})

two.addEventListener('click',()=>{
    two = two.innerHTML
})

plus.addEventListener('click',(event)=>{
    plus = plus.innerHTML
})

// result.innerHTML = one1;
