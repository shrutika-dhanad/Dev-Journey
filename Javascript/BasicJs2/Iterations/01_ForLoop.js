for (let i = 0; i <= 10; i++) {
  const number = i;
  // console.log(number)
}

for (let i = 0; i <= 10; i++) {
  const elemets = i;
  if (i == 6) {
    console.log("6  is a best number");
  }
  //console.log(elemets)
}

for (let i = 1; i <= 10; i++) {
  console.log(`outer loop ${i} `);
  for (let j = 1; j <= 10; j++) {
    console.log(`inner loops ${j} and outer loop ${i}`);
  }
}

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(i + " * " + j + " = " + i * j);
  }
}

let myArray = ["shrutiika", "vaibhavi", "tejashri", "sayali"];

for (let i = 0; i < myArray.length; i++) {
  let ele = myArray[i];
  console.log(ele);
}

//keywords

//1.break and continue

//1.break...

for (let i = 0; i <= 20; i++) {
  if (i == 5) {
    console.log("5 is detected..");
    break;
  }
  console.log(i);
}

//2. continue...

for (let i = 1; i <= 10; i++) {
  if (i == 6) {
    console.log(" the 6 is detected..");
    continue;
  }
  console.log(i);
}
