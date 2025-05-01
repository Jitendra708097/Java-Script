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
      function change()
 
 
      {      
         const element = document.getElementById("quote");
         const index = Math.floor(Math.random()*quotes.length);
         element.textContent = quotes[index];
    }

    function changecolor()
    {
        const color1 = document.body;
        const h = document.getElementById('Dynamic');
        const h3 = document.getElementById('quote');
        const button1 = document.getElementById('button1');
        const index1 = Math.floor(Math.random()*255);
        const index2 = Math.floor(Math.random()*255);
        const index3 = Math.floor(Math.random()*255);
        color1.style.backgroundColor = `rgb(${index1},${index2},${index3})`;
        h.style.color = `rgb(${index1},${index2},${index3})`;
        h3.style.color = `rgb(${index1},${index2},${index3})`;
        button1.style.backgroundColor = `rgb(${index1},${index2},${index3})`;
        // button1.style.c = `rgb(,${index2},${index3})`; 
        // color1.style.backgroundColor = "rgb(132,56,index1)";
    }
     
    // setInterval(changecolor,2000);
    // setInterval(change,2000);

    // h2{
    //     color: rgb(92, 85, 85);
    //     font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    // }

    // h1{
    //     font-family:Arial, Helvetica, sans-serif;
    //     color: #454141;
    // }
     

    // add button
    const button = document.getElementById('button1');
    button.addEventListener('click',(event)=>{
        console.log(event.target);
        console.log(event.type);
        console.log(event.clientX);
        console.log(event.clientY);
        changecolor();
        change();
    })

    // to change quote usin keybord key 
    // document.addEventListener('keyup',()=>{
    //     changecolor();
    //     change();
    // })

    // to change quote when only we press enter 
    // document.addEventListener('keydown',(event)=>{
    //     // console.log(event.key);
    //     if(event.key === 'Enter')
    //     {
    //         change();
    //         changecolor();
    //     }
    // })