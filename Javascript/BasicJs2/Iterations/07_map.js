// Calls a defined callback function on each element of an array, and returns an array that contains the results.
// @param callbackfn — A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.

// @param thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

//it can return the value automatically.

let  myNumbers=[1,2,3,4,5,6,7,8,9];
let  newNums = myNumbers.map((num)=> num + 20)
console.log(newNums)


// filter() does not modify the array values. It checks whether each element should be included.  

let newArr = [55,9,6,31,2,5,86];
let result = newArr.filter((n)=>{
    return n + 1
})
console.log(result) //it retrun the array as it is . beause filter does not modify array value



// forEach() is used to perform an action on each element, but it does not return a new array

result= newArr.forEach((number)=> number  + 2)
console.log(result)