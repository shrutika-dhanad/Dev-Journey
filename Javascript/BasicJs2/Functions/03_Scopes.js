// var - is global scobed
// let and const - is a blocked scope

//child function can access the variables/properties of parent funtions

function outer() {
  let username = "shrutika";

  function inner() {
    let salary = 50000;
    console.log(username);
  }
  inner();
}
// console.log(salary);
outer();




if(true){
    const age =21;
    if(age===21){
        const name="dhanad";
        console.log("its true")
    }
    // console.log(name)
}
// console.log(age)