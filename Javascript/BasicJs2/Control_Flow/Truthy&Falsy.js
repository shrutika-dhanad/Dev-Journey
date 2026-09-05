// falsy values:=>
// "",null,undefined, BigInt 0n, false, 0, -0, NaN

//truthy values :=>
// "0" , 'false', " "(space inside string), [],{},function(){}

const user = [];
// const user = {}
// const user = 0
// const user = ""
// const user = " ";
// const user = ()=>{}
// const user = 'false'

if (user) {
  console.log("yes user logged in ");
} else {
  console.log("not logged in");
}

if (user.length === 0) {
  console.log("array is empty");
}

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("Objrct is emoty..");
}

//Nullish coalescing operator (??) : null undefined

let val1 = 10;
val1 = 10 ?? 52 ?? 523;
console.log(val1)