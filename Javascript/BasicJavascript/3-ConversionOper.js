let a = "123";
let one = Number(a);
console.log(typeof one);

// "33"  => 33
// "33Abc" = > NaN
// true => 1 ;  false=> 0
// 1 => true ; 0=> false

let isLoggedIn = 1;

let booleanIsLogIn = Boolean(isLoggedIn);
console.log(booleanIsLogIn);

let loggedIn = ""; //false
let loggedInString = "shruu"; //true

let logged = Boolean(loggedIn);
console.log(logged);

let logged1 = Boolean(loggedInString);
console.log(logged1);

let checkString = 33;
let isString = String(checkString);
console.log(isString);
console.log(typeof isString);

console.log(typeof isLoggedIn);

console.log(+true); // 1
console.log(+""); //0 because emprty string is a false|0

let x = 100;
x++;
console.log(x);

let y =99
++y;
console.log(y)


