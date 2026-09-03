function printsum(num1, num2) {
  let res = num1 + num2;
  return res;
}
const res = printsum(10, 50);
console.log("result of sum:" + res);

const ShrutiFunction = (salary, location) => {
  let name = "shrutika";
  let age = 21;
  console.log("my name is " + name + " and age is :" + 21);

  
  console.log("salary is  :  " + salary + "  location " + location)
};
console.log(ShrutiFunction(500000, "Chinchwad"));




function userLoggedin(username){
return`${username} just logged in`  //o/p is undefined because we cant pass any argument 
}
console.log(userLoggedin())



// function userNameInfo(userName){
//   if(userName===undefined){     //we can aslo write -> if(!userName)
//     console.log("please enter a userName");
//   return 
//   }
//   return `${userName} just logged in`
// }
// console.log(userNameInfo())


//we can also give a default value;

function userNameInfo(userName="shrutika"){
  if(userName===undefined){     //we can aslo write -> if(!userName)
    console.log("please enter a userName");
  return 
  }
  return `${userName} just logged in`
}
// console.log(userNameInfo())
console.log(userNameInfo("pritesh")) // it can oveeride the user name 



//Rest operator (...)

function calculateCartPrice(num1){
  return num1;
}
// console.log(calculateCartPrice(100,200,300,400))  //100


//but 

function calculateCartPrice1(...num1){
  return num1;
}
console.log(calculateCartPrice1(100,200,300,400))  ///o/p is [100,200,300,400]

function calculateCartPrice2(value1 , value2 , value3, ...num1){
return  num1;
}
console.log(calculateCartPrice2(100,800,952,54,58454))  //o/p : - [54,58454] becuase 100,800,952,is going in value1 and value2




