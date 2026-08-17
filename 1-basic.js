// 1. var, let, and const

// JavaScript provides three keywords for declaring variables:

// 1] var : A variable is a container used to store a value.
// var is the older way of declaring variables in JavaScript.
// Re-declaration is allowed.
// Re-assignment is allowed
// var is function scoped
// introduced old js , Hoisting is possble  , no TDZ
function variables() {
  var a = 10;
  console.log(a);
}
variables();

// 2] let - let was introduced in ES6 (ECMAScript 2015).
//reassignment is allowed. redecaration is not allowed in the same scope,
//it is block scoped
// introduced es6 , Hoisting is possble  , TDZ

if (true) {
  let x = 10;
  console.log(x);
}

//3] const : const is used when you don't want to reassign a variable.
//redeclaration and reassign is not allowed
// block scoped
// introduced es6 , Hoisting is possble  , TDZ


{
  const p = 220;
  console.log(p);
}
// console.log(p);  p is not defined 

//****
// var is function-scoped and allows both redeclaration and reassignment.
//  let and const are block-scoped. let allows reassignment but not redeclaration,
//  while const allows neither reassignment nor redeclaration
//  ******//

// 5. console.log()

// console.log() is used to print/output information in the browser's console.
// During development, it is commonly used for debugging.


// undefined means:

// A variable has been declared, but no value has been assigned to it.
let x
console.log(x)  //o/p undefined 

//null
// We intentionally want to represent "no value" or an empty value.

let user=null
console.log(user)
// Why is typeof null "object"?

// This is a historical behavior/legacy bug in JavaScript that has been preserved for compatibility.
// null itself is a primitive value, even though typeof null returns "object".




// 10. ECMAScript

// Now let's understand ECMA / ECMAScript.

// What is ECMAScript?

// ECMAScript is the standard/specification that defines how JavaScript should work.

// Think of it like this:

// ECMAScript → rules/specification

// JavaScript → programming language that follows those rules

// Why was ECMAScript created?

// JavaScript became very popular, but different browsers could implement JavaScript differently.

// To create a common standard, JavaScript was standardized by ECMA International.

// The standard is called:

// ECMAScript

// ES6 = ECMAScript 2015

// Released in 2015.

// ES6 was a major update to JavaScript.
// It introduced many important features.: =>{
//     let 
//     const 
//     arrow function  
//     classes 
//     template literals 
//     destructuring
//     modules promises 
// }