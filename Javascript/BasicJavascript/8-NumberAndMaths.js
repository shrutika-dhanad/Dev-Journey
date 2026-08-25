//conver number into string

let balance = new Number(500);
console.log(balance);
console.log(balance.toString().length);

//use of precison value

console.log(balance.toFixed(1));

let num = 123.654;
console.log(num.toPrecision(4));

const hundreds = 1000000000000;
console.log(hundreds.toLocaleString("en-IN"));

console.log(hundreds.toFixed(5));

//++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++

//Math - is a object it can have multiple valued and properties.


console.log(Math);

// Returns the absolute value of a number (the value without regard to whether it 
// is positive or negative). For example, the absolute value of -5 is the same as the absolute value of 5.

// @param x — A numeric expression for which the absolute value is needed.
console.log(Math.abs(-4));  //negative value becomes +ve using abs.

console.log(Math.round(50.9)) //eturns a supplied numeric expression rounded to the nearest integer.

console.log(Math.ceil(4.1)) // it can return a top value  . o/p -> 5

console.log(Math.floor(4.9)) //it can return floor/lowest valye  . o/p -> 4

console.log(Math.min(4,8,6,0));
console.log(Math.max(4,8,6,0));


//Math.random() -
//    Math.random() always return a value between 0 to 1
//   it can return a random decimal value bet 0(inclusive) and 1(exclusive).
// it is used to generate a random number

const min=10
const max= 20
console.log(Math.floor(Math.random() * (max-min + 1))+ min)