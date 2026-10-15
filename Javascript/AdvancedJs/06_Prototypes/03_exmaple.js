const animal = {
  eat: function () {
    console.log("Animal is eating");
  },
};
const dog = Object.create(animal);
dog.bark = function () {
  console.log("dog is barking");
};
dog.bark();
dog.eat();

const Animals = {
  walk: function () {
    console.log("Animal is walking");
  },
};

const cat = Object.create(Animals);
cat.run = function () {
  console.log("Cat is running..");
};

cat.run();
cat.walk();


const anim={
    eat: function(){
        console.log("eatting");
    }
}

const dog1 = Object.create(anim)

console.log(Object.getPrototypeOf(dog1)===anim)



function user(name){
    this.name=name;

    user.prototype.greet=function(){
        console.log("helloo " + this.name)
    }

}


const users= new user("SHRUTIKA ")
users.greet()