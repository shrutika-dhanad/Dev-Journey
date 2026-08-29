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
console.log(secondObj[mySym]);
