    const quotes = [
        "The only way to do great work is to love what you do. - Steve Jobs",
        "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
        "To live is the rarest thing in the world. Most people exist, that is all. - Oscar Wilde",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
        "Be yourself; everyone else is already taken. - Oscar Wilde",
        "The best way to predict the future is to invent it. - Alan Kay",
        "You miss 100% of the shots you don't take. - Wayne Gretzky",
        "Not everything that is faced can be changed, but nothing can be changed until it is faced. - James Baldwin",
        "Life isn't about waiting for the storm to pass but learning to dance in the rain. - Vivian Greene",
        "It does not matter how slowly you go as long as you do not stop. - Confucius",
        "Happiness is not something ready made. It comes from your own actions. - Dalai Lama",
        "In the middle of difficulty lies opportunity. - Albert Einstein",
        "You must be the change you wish to see in the world. - Mahatma Gandhi",
        "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
        "The purpose of our lives is to be happy. - Dalai Lama"
      ];

    const button = document.querySelector('button');

    // This function generates random quotes
    function changequote()
    {
        const element = document.getElementById("quote");
        const index = Math.floor(Math.random()*quotes.length);
        element.textContent = quotes[index];
    }
      

    // This function is changing the color of background,Heading,quotes and button dynamically
    function changecolor()
    {
        const color1 = document.body;
        const Dynamic = document.getElementById('Dynamic');
        const quote = document.getElementById('quote');
        const Red = Math.floor(Math.random()*255);
        const Green = Math.floor(Math.random()*255);
        const Blue = Math.floor(Math.random()*255);
        color1.style.backgroundColor = `rgb(${Red},${Green},${Blue})`;
        quote.style.color = `rgb(${Red},${Green},${Blue})`;
        Dynamic.style.color = `rgb(${Red},${Green},${Blue})`;
        button.style.backgroundColor = `rgb(${Red},${Green},${Blue})`;
        // button1.style.c = `rgb(,${index2},${index3})`; 
        // color1.style.backgroundColor = "rgb(132,56,index1)";
    }
     
     

    // This is main function where we add event listener on button and function call
    // of changecolor and changequote when click on button it call these functions.
    button.addEventListener('click',()=>{
        // console.log(event.target);
        // console.log(event.type);
        // console.log(event.clientX);
        // console.log(event.clientY);
        changecolor();
        changequote();
    })
