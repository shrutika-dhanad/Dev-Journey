//Arrow function  And this keyword

//this: it is used to refere the current context
// this keyword is not used in arrow fucntion.or also not  in functiom
// the value of this is a empty object-{}

//**************************************Important******************************************************************** */


//when we can use (this) keyword in normal function it can return a undefined in output 
// and 
//when we can use (this) keyword in Arrow-Function it can return a empty object({}) in output.

//**************************************Important******************************************************************** */

const user = {
  username: "hitesh",
  price: 999,

  welcomeMsg: function () {
    console.log(`${this.username} , welcome to website.`);
    console.log(this);
  },
};

// user.welcomeMsg();  //o/p- hitesh welcome to web
// user.username = "shrutika";
// user.welcomeMsg();  //o/p- shrutika welcome to web

console.log(this); //o/p this can return an empty object

//***************************************************************** */

function chai() {
  console.log(this);
}
chai();  //it can return a multiple concets




function chaiAurcode(){
    let username="pritesh";
    console.log(this.username)
}
chaiAurcode()  // it can return a undefined because this  will not used in function.

const ones = function(){
    let username="hello charlie";
    console.log(this.username)
}
ones() //undefined
 




///********************************************************************************************************************************************* */

const addTwo=(num1, num2)=>{
    return num1+num2;

}
console.log(addTwo(50,85))

// implicit return :- means dont need to use return keyword
// explicit return :- need to use a return keyword.


//implicit return arrow function -- dont use curly braces  , implicit means aapn aassume kel ki - {} write krychi grj nhiye he 1 arrow function ahe.
//if we can wrap a value in curly braces the (return) keyword is required if we wrap in paranthesis()so the return keyword is not required.

//  const multTwo = (value1, value2) =>  value1*value2 ;
 const multTwo = (value1, value2) =>  (value1*value2) ;

console.log(multTwo(20,5))




//objcet inside in arrow function.

const userInf=(name)=>({name:"harshu"})
console.log(userInf())