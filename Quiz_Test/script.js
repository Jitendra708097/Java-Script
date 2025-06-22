// const original_answer = {
//      q1:"Sachin Tendulkar",
//      q2:"England",
//      q3:"Sachin Tendulkar",
//      q4:"264",
//      q5:"Muttiah Muralitharan"
// };

// const form = document.querySelector('form');
// form.addEventListener('submit',(event)=>{
//      event.preventDefault();
//      const data = new FormData(form);

// let result = 0;
// let wrong =0;
// for(let [key,value] of data.entries())
// {
//    if(value === original_answer[key])
//    {
//      result++;
//    }
//    else
//    {
//       wrong++;
//    }
// }

// const total = document.getElementById("Total");
// const correct = document.getElementById("Correct");
// const Attempted = document.getElementById("Attempted");
// const Wrong = document.getElementById("Wrong");
// total.innerText = 5;
// correct.innerText = result;
// Attempted.innerText = result+wrong;
// Wrong.innerText = wrong;
// form.reset();
// })

// code for which gives random 5 question  

const cquestions = [
  {
      question: "What is the correct way to declare an array in C++?",
      options: ["int arr[10];", "arr{10};", "array<int> arr(10);", "int arr;"],
      answer: "int arr[10];"
  },
  {
      question: "Which of the following accesses the 5th element of an array named 'numbers'?",
      options: ["numbers[4]", "numbers(5)", "numbers[5]", "numbers{4}"],
      answer: "numbers[4]"
  },
  {
      question: "What is the default value of elements in an array of type int?",
      options: ["0", "1", "Undefined", "NULL"],
      answer: "0"
  },
  {
      question: "What is the size of int in C++?",
      options: ["2 bytes", "4 bytes", "8 bytes", "Depends on the compiler"],
      answer: "Depends on the compiler"
  },
  {
      question: "How do you initialize an array with all elements as 0 in C++?",
      options: ["int arr[5] = {0};", "int arr[5] = {};","int arr[5];", "int arr = {0};"],
      answer: "int arr[5] = {0};"
  },
  {
      question: "Which of the following is a valid array declaration?",
      options: ["int arr[5];", "int arr[] = {1, 2, 3};", "int[] arr = {1, 2, 3};", "arr = int[5];"],
      answer: "int arr[5];"
  },
  {
      question: "Which operator is used to access array elements in C++?",
      options: ["()", "{}", "[]", "<>"],
      answer: "[]"
  },
  {
      question: "What does the expression 'sizeof(arr)/sizeof(arr[0])' typically compute in C++?",
      options: ["Size of the array", "Number of elements in the array", "Size of the first element", "Number of elements minus one"],
      answer: "Number of elements in the array"
  },
  {
      question: "What will be the output of the following code snippet: int arr[3] = {1, 2, 3}; cout << arr[1];",
      options: ["1", "2", "3", "0"],
      answer: "2"
  },
  {
      question: "How can you pass an array to a function in C++?",
      options: ["void func(int arr[])", "void func(int *arr)", "Both", "None"],
      answer: "Both"
  },
  {
      question: "Which keyword is used to dynamically allocate an array in C++?",
      options: ["malloc", "new", "alloc", "create"],
      answer: "new"
  },
  {
      question: "What is the index of the first element in a C++ array?",
      options: ["0", "1", "Depends on array size", "-1"],
      answer: "0"
  },
  {
      question: "What will be the output of the following code snippet: int arr[5] = {}; cout << arr[4];",
      options: ["0", "Undefined", "Random value", "5"],
      answer: "0"
  },
  {
      question: "Which of the following is the correct way to declare a 2D array in C++?",
      options: ["int arr[3][3];", "int arr{3,3};", "array<int,3,3> arr;", "int arr = [3][3];"],
      answer: "int arr[3][3];"
  },
  {
      question: "What is the result of accessing an array element with an out-of-bounds index in C++?",
      options: ["Compile-time error", "Run-time error", "Undefined behavior", "Returns 0"],
      answer: "Undefined behavior"
  },
  {
      question: "Which function can be used to sort an array in C++?",
      options: ["sort()", "order()", "arrange()", "sequence()"],
      answer: "sort()"
  },
  {
      question: "What will be the value of 'arr[2]' after the following code is executed: int arr[] = {5, 10, 15};",
      options: ["5", "10", "15", "20"],
      answer: "15"
  },
  {
      question: "Which of the following correctly initializes a pointer to the first element of an array in C++?",
      options: ["int *ptr = arr;", "int ptr = arr[0];", "int *ptr = &arr;", "int *ptr = *arr;"],
      answer: "int *ptr = arr;"
  },
  {
      question: "How do you access the last element of an array named 'arr' with size 'n'?",
      options: ["arr[n]", "arr[n-1]", "arr[n-2]", "arr[0]"],
      answer: "arr[n-1]"
  },
  {
      question: "What is the maximum size of an array in C++?",
      options: ["2^31-1", "2^32", "It depends on system and compiler", "INT_MAX"],
      answer: "It depends on system and compiler"
  },
  {
      question: "What is a correct way to initialize an array in C++?",
      options: ["int arr[] = {1, 2, 3};", "int arr(3);", "array<int> arr = {1, 2, 3};", "int arr[3] = {1};"],
      answer: "int arr[] = {1, 2, 3};"
  },
  {
      question: "What keyword is used to deallocate memory allocated for an array in C++?",
      options: ["delete", "free", "dispose", "dealloc"],
      answer: "delete"
  },
  {
      question: "Which of the following statements about arrays in C++ is true?",
      options: ["Arrays are dynamically sized", "Arrays can store elements of different types", "Array size must be a constant", "Arrays are a reference type"],
      answer: "Array size must be a constant"
  },
  {
      question: "What is the output of the following code snippet: int arr[] = {1, 2, 3}; cout << arr;",
      options: ["123", "1", "Address of first element", "Error"],
      answer: "Address of first element"
  },
  {
      question: "What is the time complexity of accessing an element in an array by index?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
      answer: "O(1)"
  }
];

// Just for confirmation, print the first question

 
//  console.log(cquestions[0].options[0]);
// const index2 = 0;
// function RandomSelect(index2)
// {
//    const data = new Set();
//    while(data.size != 5)
//    {
//        const index2 = Math.floor(Math.random()*20);
//       data.add(cquestions[index2]);
//    }


//     // convert set into array using spread operator
//    return [...data];
// }

// const questions = RandomSelect();
const form = document.querySelector('form');

const original_answer = {};

cquestions.forEach((obj,index)=>
{
const div_element = document.createElement('div');
div_element.className = "quiz";
original_answer[`q${index+1}`] = obj['answer'];

const para = document.createElement('p');
para.textContent =  `${index+1}.${obj.question}`;
div_element.appendChild(para);

// create 4 options

obj.options.forEach((value1)=>{

   const label = document.createElement('label');
   const input = document.createElement('input');
   input.type = "radio";
   input.name = `q${index+1}`;
   input.value = value1;

   label.appendChild(input);
   label.appendChild(document.createTextNode(value1));
   div_element.appendChild(label);
   div_element.appendChild(document.createElement('br'));

})


form.appendChild(div_element);
// form.appendChild(d); 
});

const button = document.createElement('button');
button.type = 'submit';
button.id = 'sub';
button.textContent = "Submit";
button.style.width = '90%';
button.style.padding = '.3rem';
button.style.backgroundColor = 'blue';
button.style.color = 'white';
button.style.fontSize = '15px';
button.style.margin = '2rem';
button.style.border = 'none';
button.style.borderRadius = '8px';
form.appendChild(button);


// const form = document.querySelector('form');
form.addEventListener('submit',(event)=>{
     event.preventDefault();
     const data = new FormData(form);

let result = 0;
let wrong =0;
for(let [key,value] of data.entries())
{
   if(value === original_answer[key])
   {
     result++;
   }
   else
   {
      wrong++;
   }
}

const total = document.getElementById("Total");
const correct = document.getElementById("Correct");
const Attempted = document.getElementById("Attempted");
const Wrong = document.getElementById("Wrong");
total.innerText = Object.keys(original_answer).length;
correct.innerText = result;
Attempted.innerText = result+wrong;
Wrong.innerText = wrong;
form.reset();
})


 

 