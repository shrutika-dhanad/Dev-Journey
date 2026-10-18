function makeFunc() {
  let name = "shruti";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();

function outer() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
  return inner;
}

  const outerFunc = outer();
  outerFunc();
  outerFunc();
  outerFunc();
  outerFunc();
  outerFunc();




