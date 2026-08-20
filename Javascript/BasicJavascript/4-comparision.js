console.log(null > 0); //f
console.log(null == 0); //f
console.log(null >= 0); //T beacuase caparision convert null to a number . treating it as 0 ;
//that's why null > =0  is true and null > 0 is false.

console.log("2" > 1);
console.log("02" > 2);
console.log("2" > false);
console.log(undefined == 0);

// Equality check ==  and ===(strictly check)
// console.log(2 == "2");  it can only check and compare the value not the Datatype
// console.log(2==="2")     ;   it can check & compare both value and datatype
