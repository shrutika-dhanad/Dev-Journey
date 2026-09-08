let num = [10, 20, 30, 40, 50, 60];
for (const n of num) {
  console.log(n);
}

let myGreeting = "hello shrutika";
for (const msg of myGreeting) {
  console.log("each char at " + msg);
}


let myMsg ="hey! pritesh";
for(const msg of myMsg){
    if(msg == " "){
        continue;

    }
    console.log(`every char is : ${msg}`)
}

let mynewMsg = "good morning "
for(const NewMsg of mynewMsg){
    if(NewMsg == "r"){
        break;
    }
    if(NewMsg == " "){
        continue;
    }
    console.log(`every char in mynewMsg ${NewMsg}`)
}