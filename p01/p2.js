
const greetings = ["Hello", "Hi", "Hey", "Greetings", 
    "Salutations", "Howdy", "Hola", "Bonjour", "Namaste", "Ciao"];


const body = document.querySelector('body');
body.addEventListener('click',(event)=>{
    const index1 = Math.ceil(Math.random()*10)-1;
    // for(let i=0;i<10;i++)
    // {
           body.innerHTML = greetings[index1];
    // }
})