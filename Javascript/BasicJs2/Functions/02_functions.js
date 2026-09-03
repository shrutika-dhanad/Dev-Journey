//Object inside the function

const user = {
  name: "shrutika",
  price: 50000,
};

function handleObject(anyobject) {
  console.log(
    `the users name is : ${anyobject.name} and price is :${anyobject.price}`,
  );
}

//we can also create the oject directly inside in function

function handleInfo(anyobject) {
  console.log(
    `username:- ${anyobject.username} and prices:- ${anyobject.prices}`,
  );
}
handleInfo({
  username: "shruti Dhanad",
  prices: 366,
});

//Arrays inside the function

const myNewArray = [200, 500, 600, 710];

function returnSecondValue(myarray) {
  return myarray[2];
}
console.log(returnSecondValue(myNewArray));

const arr = ["shrutika", "pritesh", "bhagwan", "sunita"];

function secondArrayFunction(newvalue) {
//   console.log(`the zeroth index value is ${newvalue[0]}`);
//we can also used

return newvalue[1]

}
console.log(secondArrayFunction(arr));


//we can also give the value as an argument

function secondArrayFunction1(newvalue) {
//   console.log(`the zeroth index value is ${newvalue[0]}`);
return newvalue[2];

}
console.log(secondArrayFunction1([100,500,600]));
