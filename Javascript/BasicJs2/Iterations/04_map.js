const map = new Map();

map.set("in", "india");
map.set("br", "brazil");
map.set("en", "England");
map.set("fr", "france");
map.set("USA", "United state of America");

console.log(map);

for (const [key, value] of map) {
  console.log(key + " : -" + value);
}

// const myObjet={
//     game1:"spiderman",
//     game2:"NSF"
// }
// for(const [key, value] of myObjet){
//     // console.log(key + " and " + value)   //it can throw an error because objects are not iterable
// }

//but we can use the for in loop to print the object's keys and values

const myObj = {
  js: "javascript",
  rjs: "react js",
  cpp: "C++",
  swift: "swift by apple",
};
for (const key in myObj) {
  console.log(key); //it can return the key only
}

//we camprit the objevt for this :

const myNewObject = {
  js: "javascript",
  rjs: "react js",
  cpp: "C++",
  swift: "swift by apple",
};
for (const key in myNewObject) {
  console.log(myNewObject[key]); /// it can retun the values of key.
}

console.log(
  "************************************************************************************************************************************************",
);
const myAnotherObject = {
  js: "javascript",
  rjs: "react js",
  cpp: "C++",
  swift: "swift by apple",
};
for (const key in myAnotherObject) {
  console.log(`the ${key} for ${myAnotherObject[key]}`);
}

//keys in array..........

const cars = ["toyota", "tata", "Kia", "Rolls Royce"];
for (const key in cars) {
  console.log(cars[key]); //it an return the values of key
}

const cars1 = ["toyota", "tata", "Kia", "Rolls Royce"];
for (const key in cars1) {
  console.log(key); //it can return the keys only which is start from 0(zero).
}

const cars2 = ["toyota", "tata", "Kia", "Rolls Royce"];
for (const key in cars) {
  console.log(`the ${key} for the ${cars2[key]}`); //it can return the keys with its values
}

//we cannt aplly the iteration on map

const map1 = new Map();

map1.set("in", "india");
map1.set("br", "brazil");
map1.set("en", "England");
map1.set("fr", "france");
map1.set("USA", "United state of America");

console.log(map1);

for (const [key, value] of map1) {
  //   console.log(key + " : -" + value);
}

//we cannt apply the iteration on map

for (const key in map) {
  console.log(key); //it doesent return any
  console.log([key]); //same
  console.log(map1[key]);   //same 
}
