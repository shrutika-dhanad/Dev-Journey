const marvel = ["spiderman", "ironman", "thor"];
const dc = ["superman", "flash", "batman"];

//spread : all elements will spread soo using ... to array nahi rahila tyacha every element ha individual
//  zala ahe ,
//o/p mdhe 1 1 value bhetel.

const new_heros = [...marvel, ...dc];
console.log(new_heros);

//concat= combining two arrays
//Combines two or more arrays. This method returns a new array without modifying any existing arrays.

const All_heros = marvel.concat(dc);
console.log(All_heros);

///flat:
//Returns a new array with all sub-array elements concatenated
//  into it recursively up to the specified depth

const first_array = [
  12,
  2,
  5,
  8,
  6,
  [58, 9, 3, 1],
  4,
  6,
  [258, 4, 2, 3, [5, 6, 1, 2]],
];
const All_array = first_array.flat(Infinity);
console.log(All_array);



console.log(Array.isArray("shrutika")); //it returns fall but when we use from iit can create a
// an array

//from: Creates an array from an iterable object.
console.log(Array.from("shrutika"))

//important for interview 
console.log(Array.from({name:"Pritesh"}))//it return an empty array , aplylaa sangava lagal
//keys / value kashacha Array krychay


//Array.of(): Returns a new array from a set of elements.
let score1=100;
let score2=200
let score3=300
let score4=450
console.log(Array.of(score1,score2,score3))
