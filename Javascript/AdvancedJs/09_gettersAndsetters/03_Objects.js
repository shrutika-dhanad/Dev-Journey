const { use } = require("react");

const user = {
  _email: "shru@gmail.com",
  _password: "123",

  get email() {
    return this._email.toUpperCase();
  },
  set email(value) {
    this._email = value;
  },
};
const us =Object.create(user)
console.log(us.email);
