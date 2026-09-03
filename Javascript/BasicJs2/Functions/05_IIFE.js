//Immitdiately Invoked function Expressions
//Global scoped chya pollution la hatavnyasathi we use IIFE,the function which is excecuted immidiately.()()
//when we can run 2 function 1 by 1 so end a first function with ; and start next function, otherwise function will not executes , it throws an error.



//named IIFE - function with name 
//simppl/unnamed IIFE - function without name
(function chai() {
  console.log("DB Connected..");
})();
(function code() {
  console.log("DB 2 connected...");
})();

(() => {
  console.log("hello shrutika");
})();
(() => {
  console.log("hello pritesh");
})();




(function hello(name, lastname){
    console.log(`${name} and ${lastname}`)
})("shrutika","Dhanad");




 