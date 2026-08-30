//singleton : menas there is only one instacnce in throughtout the application,
//means 11 ch objcet referece saglikde use kela jail , multiple parts of the application
// referrence to  the same object,ex: Object.create

//important ;
//when we can decalre an object as an literals at that time it is not became the singlton obj.
//ex: const jsUser ={ }

//but

//when we can decare an object throgh controuctor so that time it become the singleton objevt
//ex- Object.create

// /Object:-  for accessing any value we can define both value or key,
const first_object = {
  name: "shrutika",
  age: 21,
};
console.log(first_object.name);

///another best way

console.log(first_object["name"]);
console.log(first_object["age"]);

//interview important

const mySym = Symbol("shrutika");
const secondObj = {
  name: "shru",
  age: 21,
  location: "pcmc",
  isLoggedIn: false,
  [mySym]: "dhanadshrutika",
};
// console.log(secondObj[mySym]);

const mySymbols = Symbol("|shrutika|");

let myNewObject = {
  [mySymbols]: "1st symbol !",
  name: "shrutika Dhanand",
  "full Name": "shrutika Bhagwan Dhanad",
  age: 22,
  isLoggedIn: true,
};

// console.log(myNewObject[mySymbols]);
console.log(typeof myNewObject[mySymbols]);
console.log(myNewObject["name"]);
console.log(myNewObject["full Name"]);
console.log(typeof mySymbols);

//freeze():-Object on which to lock the attributes.
// freeze can lock the attribute | after freeze() we didn't chnage the value

myNewObject.name = "shru Dhanad";
Object.freeze(myNewObject);
myNewObject.name = "pritesh dhanad";
console.log(myNewObject);

const Prituu = Symbol("helllo prituu");
let user = {
  name: "pritesh",
  age: 25,
  occupation: "software developer",
  family: "mother, father and sister",
  location: "kopargaon",
  salary: 50000,
  [Prituu]: " hey guddu!",
};

console.log(user);
console.log("symbol of pritesh : - " + user[Prituu]);

user.salary = 100000;
// Object.freeze(user);
user.salary = 80000;
console.log(user);

console.log(
  "******************************************************************************************************",
);


const JsUser={
 state:"maharashtra",
 pin_code:123654,
 country:"india",
 ["name"]:"shrutika",
 salary:5000
};

JsUser.greets=function(){
  console.log(`hellyy  i am from ${this.state} and salary is ${this.salary}`)
  // same object la reference karnyasathi this cha use krto.
}
console.log(JsUser.greets())