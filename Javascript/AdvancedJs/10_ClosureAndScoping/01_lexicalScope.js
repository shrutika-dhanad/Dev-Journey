function outer(){
  let  username='shrutika';
  console.log("Outer " , sirname)
  function inner(){

    let sirname="dhanad"
    console.log("inner :" , username)
  }

  function innerTwo(){
//   console.log("innteTwo :" , sirname)
  }
  inner();
  innerTwo()
}

outer();




