function setUserName(username) {
  this.username = username;
  console.log("called..");
}
function getuserDetails(username, email, isLoggedIn) {
  setUserName.call(this, username);
  this.email = email;
  this.isLoggedIn = isLoggedIn;
}
const user = new getuserDetails("shrutika", "shrt@ex.com", true);
console.log(user);

function myname(name) {
  this.name = name;
}

function personalDetails(name, age, email) {
  myname.call(this, name);

  this.age = age;
  this.email = email;
  console.log("personal details  found");
}

const details = new personalDetails("shruu", 21, "emial@ex.com");

console.log(details);

function greet() {
  console.log("hello " + this.name);
}

const user1 = {
  name: "shrutika",
};

const user2 = {
  name: "Vaibhavi",
};

greet.call(user1);

function introduce(city, profession) {
  console.log(
    "my name is " + this.name + ", i live in " + city + ", i am a " + profession+ "."
  );
}

const shru = {
  name: "shruuu",
};

introduce.call(shru, "pcmc", "Developer");
