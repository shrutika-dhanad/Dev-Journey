//Filter 
//  Returns the elements of an array that meet the condition specified in a callback function.

// @param predicate — A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.

// @param thisArg — An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.

//it can return the value automatically


const myNums = [1, 2, 3, 4, 5, 6];
const newNums = myNums.filter((n) => n > 2);
console.log(newNums);

const array = [10, 20, 5, 56, 25];
const result = array.filter((num) => {
  {
    // num > 2;    //it can return the empty array [] beacuse we define this condition inside the scopre {} so we need to use a return keyword to print the elements
    return num > 50;
  }
});
// console.log(result);


// /using forEach
const newnumb=[]
 array.forEach((numb) => {
   if(numb > 40 ){
    newnumb.push(numb);
   }
}); 
console.log(newnumb)






const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks= books.filter((bk)=> bk.genre === 'History')
  console.log(userBooks)

userBooks = books.filter((bk)=>{
    return bk.publish >= 1995  && bk.genre=== 'Science' 
})
console.log(userBooks)