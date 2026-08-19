//  <!-- Datatypes : what kind of value a variable can store. 
//      js has 8 main dt 
         
//      -->

let name = "Shrutika";                  // String
let age = 21;                           // Number
let big = 12345678901234567890n;        // BigInt
let isStudent = true;                   // Boolean
let result;                             // Undefined
let data = null;                        // Null
let id = Symbol("id");                  // Symbol

let student = {                         // Object
    name: "Shrutika",
    age: 21
};

console.log(typeof name);
console.log(typeof age);
console.log(typeof big);
console.log(typeof isStudent);
console.log(typeof result);
console.log(typeof data);
console.log(typeof id);
console.log(typeof student);