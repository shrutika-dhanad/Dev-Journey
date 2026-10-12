const { UNSAFE_getTurboStreamSingleFetchDataStrategy } = require("react-router-dom");

class user{
    constructor(username, id, age,passoword){
        this.username=username;
        this.age=age;
        this.id= id;
        this.passoword=passoword;


    }

    encryptPassword(passoword){
        return `${this.passoword}-abcd`

    }

    changeUserName(username){
        return ` ${this.username} is a student `
    }

}

const detail = new user("shrutika", 21 , 11 , "hello")
console.log(detail.encryptPassword())


//behind the scene 
// same code using function 


function detailsAboutShruti(username, id, age,passoword){
    this.username=username;
        this.age=age;
        this.id= id;
        this.passoword=passoword;
}

detailsAboutShruti.prototype.encryptPassword= function(){
    return `${this.passoword}121@abc`

}
detailsAboutShruti.prototype.myusername=function(){
    return `username is ${this.username} `

}

const data = new detailsAboutShruti("shruti" , 1 ,21 ,"code")
// console.log(data)
console.log(data.encryptPassword())