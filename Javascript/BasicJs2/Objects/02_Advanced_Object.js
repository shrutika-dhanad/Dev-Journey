//syntax
//1.it it a singleton object.
const tinder = new Object();
console.log(tinder);

//object literal
const tindeer = {};
console.log(tindeer);

const tender = new Object();

tender.id = "shruti123";
tender.name = "shrutika";
tender.age = 21;
console.log(tender);

//Object inside an object
const one = {
  msg: "hello",
  two: {
    userFullName: {
      firstName: "shrutika",
      lastName: "Dhanad",
    },
  },
};
console.log(one);
console.log(one.two);
console.log(one.two.userFullName.lastName);

//combuning objects
//assign() :-is a static method,
//  Copy the values of all of the enumerable own properties from one or more source objects to a target object.
//  Returns the target object.

const value1 = { a: 10, b: 20 };
const value2 = { c: 30, d: 40 };
const returnedResult = Object.assign(value1, value2);
console.log(returnedResult);

const result = Object.assign({}, value1, value2); //{} it is optional but is a good practice|| {} it is a target and all are source
//aapn jr {} kel tr apli sagli values hya {} ya mdhe jata but nhi kel tr all values are goes into value1.
console.log(result);

//best practice and always used to combine object is spread(...) operator

const res = { ...value1, ...value2 };
console.log("using spread", res);

//Array of Objects
const Users = [
  {
    email: "shruti@gmail.com",
    age: 21,
  },
  {
    email: "pritu@gmail.com",
    age: 25,
  },
  {
    email: "vaibhavi@gmail.com",
    age: 21,
  },
  {
    email: "raj@gmail.com",
    age: 22,
  },
];
console.log(Users);

console.log(Users[1].email + "   AND  " + Users[1].age);

//key- value will returns in Array.
console.log(Object.keys(tender));
console.log(Object.values(tender));
console.log(Object.entries(tender));

//to ensure this property is present in object or not
// hasOwnProperty()

console.log(tender.hasOwnProperty('isLoggedIn'));
console.log(tender.hasOwnProperty("name"));

