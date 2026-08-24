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

const mySentence="shruutika ur so intelligent"
console.log(mySentence.split(" ,"))

let str = "Dhanad"
console.log(str.split(""))