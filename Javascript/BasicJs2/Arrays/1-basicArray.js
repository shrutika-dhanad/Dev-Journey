// Array : arrays are resizable in js , and containe a mix of difffrent data types.
// js Array are not associative arrays and arrays Elements cannot be accessed using arbitary Strings as indexes
// js arr are zero-indexed
// js array-copy-operations create shallow-copies rather than deep copy

// shallow-copy- s c of an object is a copy whose properties share the same references.- original array will change

// and
// deep copy -  d c of an object is a copy whose properties do not share the same references,original arr dosent chnage.

const myArr = new Array(1, 2, 3, 4, 5);

//1.push : it can add a element at the end of array.

myArr.push(6);
myArr.push(7);
myArr.push(8);
console.log(myArr);

//2.pop() - it can remove the last element from an array,

console.log(myArr.pop());

//3.include check the element is present or not
console.log(myArr.includes(4));

//4.unshift() - it is used to add an element at the begin

myArr.unshift(99)
console.log(myArr)

//5.shift - it removes the element from begin

// myArr.shift()
// console.log(myArr)
// myArr.shift()
// console.log(myArr)
// myArr.shift()
// console.log(myArr)
// myArr.shift()
// console.log(myArr)
// myArr.shift()
// console.log(myArr)
// myArr.shift()
console.log(myArr)

//6.indexOf- return am index of perticular element
console.log("index of 5  :" + myArr.indexOf(5))


//7.join() -Adds all the elements of an array into a string, separated by the specified separator string.

const one = [10,20,50,30,5,66,554];
const two = one.join()

console.log(one)
console.log(two)
console.log(typeof two)

//8.slice- Returns a copy of a section of an array. For both start and end, 
// a negative index can be used to indicate an offset from the end of the array.
// 1.returns a portionof an array.
// 2 . dosent changes original Array
// 3 . return a new Array

let first =[1,2,3,4,5,6,7,8,9]
let second = first.slice(1,6)
console.log("Slice" ,second)


//9.splice() - remove the other element from array which is not mentioned in index
// Returns a copy of a section of an array. For both start and end, 
// a negative index can be used to indicate an offset from the end of the array.

// 1 . chnages original Array.
// 2. Adds, remove, or replace elements 
// 3 . returns an arraay of removed elements.

let third = first.splice(0,2)
console.log("splice" ,third)
console.log(first)