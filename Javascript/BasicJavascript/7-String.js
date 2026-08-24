//String interoulation-we can inject a methods, variables inside in string

const { Children } = require("react");

const name = "shruu";
const repoCount = 15;
console.log(`helllo my name is ${name} and repocount is ${repoCount}`);

const gameName = new String("shrutika");

console.log(gameName.__proto__);
console.log(gameName.charAt(1));
console.log(gameName.toUpperCase());
console.log(gameName.length);
console.log(gameName.indexOf("h"));

// substring : print the character end index is not counted.
const newString = gameName.substring(4, 6);
console.log(newString);

const anotherString = gameName.split(" , ");
console.log(anotherString);

const mySentence = "shruutika ur so intelligent";
console.log(mySentence.split(" ,"));

let str = "Dhanad";
console.log(str.split(""));

// length	Get string length
// charAt()	Get character at index
// at()	Get character, supports negative index
// toUpperCase()	Convert to uppercase
// toLowerCase()	Convert to lowercase
// trim()	Remove whitespace from both ends
// trimStart()	Remove beginning whitespace
// trimEnd()	Remove ending whitespace
// includes()	Check whether substring exists
// startsWith()	Check starting text
// endsWith()	Check ending text
// indexOf()	Find first occurrence
// lastIndexOf()	Find last occurrence
// slice()	Extract part of string
// substring()	Extract part of string
// replace()	Replace first matching occurrence
// replaceAll()	Replace all matching occurrences
// split()	Convert string to array
// concat()	Join strings
// repeat()	Repeat string
// padStart()	Add padding at beginning
// padEnd()	Add padding at end
// charCodeAt()	Get UTF-16 code unit

let myStr = `shrutika 
 bhagwan dhanad!
       from Shirdi,
 Maharashtra. `;

console.log(myStr);
console.log(myStr.toLowerCase());
console.log(myStr.toUpperCase());
console.log(myStr.length);
//console.log(myStr.length()) //it throw an error bcs lentgh is not a fucntion it is a property
console.log(myStr.charAt(5));
console.log(myStr.at(1));

let Words = "pritesh  ";
console.log(Words.trim());

console.log(myStr.includes("ok"));
// Returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are greater than or equal to position; otherwise, returns false.

console.log(myStr.indexOf("a"));
console.log(myStr.substring(4, 8));
console.log(myStr.lastIndexOf());
console.log(myStr.isWellFormed());

let text = "hishruu ";
let res = text.repeat(4);
console.log(res);

console.log(text.replace("hishruu", "Kay g"));
console.log(text.replaceAll("hishruu", "Ay Bhaiyya"));

const sentence = "hello everyone , Good Evening";
console.log(sentence.split());

let word = "shrutika Bhagwan Dhanad";
console.log(word.charCodeAt(5));

console.log(sentence.slice(1, 8));
