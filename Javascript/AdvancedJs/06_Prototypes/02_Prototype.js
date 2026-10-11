

let myHero=["thor", "spiderman"];


let heroPowe={
    thor:"hammer",
    spiderman:"Sling",

    getSpidyPower:function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.shrutika = function(){
    console.log(`shrutika is present in all objects`)
}
// heroPowe.shrutika()
heroPowe.getSpidyPower()
myHero.shrutika()




Array.prototype.heyShrutika= function(){
    console.log(`shrutika says Helloo`)
}
myHero.heyShrutika()
// heroPowe.heyShrutika()

//Prototypal Inheritance


const user = {
    username:"shruti",
    id :123,
    gender:"female"
}

const Teacher={
    isAvailable:true,
    looged:"yes"
}
const TeachingSupport={
   compltedWork:"almost ",
   trusty:"trustables"
}
const TASuport={
    makeAssingment:"js Assignment",
    fulltime:true,
    __proto__: TeachingSupport
}



Teacher.__proto__=user


// moder Syntax 

Object.setPrototypeOf(TeachingSupport, Teacher)



//String


let AnotherUserName="ShrutikaBhagwanDhanad"

String.prototype.trueLength=function(){
    console.log(`${this}`)
    console.log(`true length is : ${this.trim().length}`)

}
AnotherUserName.trueLength()
"pritesh".trueLength()
"BhagwanDhanad".trueLength()
"Sunita Bhagwan Dhanad".trueLength()
