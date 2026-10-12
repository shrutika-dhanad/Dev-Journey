const { useResolvedPath, useViewTransitionState } = require("react-router-dom");

class user {
  constructor(username) {
    this.username = username;
  }

  callMe() {
    console.log(`USERNAME Is : ${this.username} `);
  }
}
class Teacher extends user {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  printMe() {
    console.log(
      ` the email is : ${this.email} and the pwd is : ${this.password}`,
    );
  }
}

const data = new Teacher("pritesh", "pritu@ex.com", "121");
data.printMe();

// data.callMe();

const userDaata = new user("shrutiika");
userDaata.callMe();
// userDaata.printMe()  give an error

console.log(userDaata === data);
console.log(data === Teacher)
console.log(data instanceof Teacher);
console.log(data instanceof user)