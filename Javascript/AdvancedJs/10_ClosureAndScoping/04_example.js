function mainFunc() {
  let city = "PCMC";
  function anotherFunc() {
    console.log(city);
  }
  return anotherFunc;
}

let res = mainFunc();
console.log(res);